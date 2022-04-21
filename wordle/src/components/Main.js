import React, { useState, useEffect, useRef } from "react";

// axios 
import axios from 'axios';

// react redux
import { useDispatch ,useSelector } from 'react-redux';

// javascript
import Compare from '../data/compareWord.js'; // 정답 비교
import Data from '../data/data.js'; // 정답

// components
import KeyBoard from './KeyBoard';
import ResultModal from "./ResultModal";

// css
import '../App.css';

// react bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Modal } from 'react-bootstrap';

function Main(props) {
    let state = useSelector((state) => state.reducer);
    let game_state = useSelector((state) => state.game_reducer); // game 상태
    let dispatch = useDispatch();

    const answer = Data.word;

    // step에 따른 textbox 
    let [step, setStep] = useState(0);
    let [word, setWord] = useState({ word: '' });
    let [wordList, setWordList] = useState({
        'step0': []
    });

    let [chkTAnswer, setChkTAnswer] = useState({
        step: 0,
        compareList: [],
        isAnswer: false
    })

    let wordRef = useRef([]);
    let titleRef = useRef();
    let keyArray = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE", "ENTER"];
    let maxStep = props.max_step;

    // 객체 깊은 복사
    const cloneObj = obj => JSON.parse(JSON.stringify(obj));

    // 최초 1회 실행
    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (keyArray.includes(e.key.toUpperCase())) {
                // 이벤트 리스너를 사용할경우 usestate의 set만 가능하고 변수값을 가져올 수 없다.
                // 그래서 set을 한 후 useEffect로 값을 읽는 방식을 채택
                setWord({ word: e.key.toUpperCase() });
            }
        })

        console.log(answer);
    }, [])

    // keyboard로 키값을 받을때
    useEffect(() => {
        if (state[0].word !== '') {
            setWord({ word: state[0].word });
        }

    }, [state])

    useEffect(() => {
        let tempObj = {};
        let tempArray = [];

        if(!game_state) return;
        if (!keyArray.includes(word.word)) return;

        const chk = async () => {
            switch (word.word) {
                case "ENTER":

                    //console.log(wordList);
                    // 단어 입력 후 엔터키 눌렀을때
                    if (wordList[`step${step}`].length < 5) return;
                    if (Object.keys(wordList).length > maxStep.length) return;

                    let wordSum = '';
                    wordList[`step${step}`].map((w, i) => {
                        wordSum += w;
                    })

                    // 단어가 dictionary api를 통해 실제로 있는 단어인지 확인
                    await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordSum}`)
                        .then((result) => {
                            //console.log(result);

                            // 실제 단어가 있는지 확인되었으면 해당 값의 일치 정보를 체크
                            // chkTAnswer 에 정보를 넣고 정답인지 확인 후 정답이 아니면 다음 단계
                            let comp = Compare(answer, wordSum);

                            // 해당 값을 넣어 단어 리스트 색 변환하기
                            setChkTAnswer({ ...comp, step: step });

                            //console.log(step, maxStep, (step+1) === maxStep);
                            if (comp.isAnswer || (step + 1) === maxStep.length) {
                                console.log("step over");

                                // if(comp.isAnswer)
                                // {
                                //     alert("is Correct!!");
                                //     //console.log();
                                // }                                
                            }
                            else {
                                let stepUp = (step + 1)
                                setStep(stepUp);

                                tempObj = cloneObj(wordList);
                                tempObj[`step${stepUp}`] = [];

                                setWordList(tempObj);
                            }
                        })
                        .catch((e) => {
                            if (e.response) {
                                if (e.response.status === 404) {
                                    console.log(`fail word: ${wordSum}`);
                                }
                            }
                        })

                    break;
                case "BACKSPACE":
                    if (wordList[`step${step}`].length === 0) return;

                    tempArray = [...wordList[`step${step}`]];
                    tempArray.pop();
                    tempObj = cloneObj(wordList);
                    tempObj[`step${step}`] = tempArray;

                    setWordList(tempObj);
                    break;
                default:
                    // step 당 알파벳은 5개까지
                    if (wordList[`step${step}`].length >= 5) return;

                    // wordList의 step array
                    tempArray = [...wordList[`step${step}`]];
                    tempArray.push(word.word);
                    tempObj = cloneObj(wordList);
                    tempObj[`step${step}`] = tempArray;

                    setWordList(tempObj);

                    break;
            }
        }

        chk();

    }, [word])   // word 값이 변할때만 반응

    // wordlist 값이 변경되면 useEffect가 반응
    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            if (wordList[`step${step}`].length > (i))
                wordRef.current[i + step * 5].value = wordList[`step${step}`][i];
            else
                wordRef.current[i + step * 5].value = '';
        }
        titleRef.current.focus();
    }, [wordList])

    // 색 변환
    // 게임 종료 확인
    useEffect(() => {
        if (chkTAnswer.compareList.length <= 0) return;

        let addCSS = '';

        chkTAnswer.compareList.map((comp, i) => {
            switch (comp) {
                case 'c': addCSS = ' correct'; break;
                case 'w': addCSS = ' wrong'; break;
                case 'a': addCSS = ' any'; break;
                default: break;
            }

            wordRef.current[i + chkTAnswer.step * 5].className = wordRef.current[i + chkTAnswer.step * 5].className + addCSS;
        })

        if (((chkTAnswer.step + 1) === maxStep.length) || chkTAnswer.isAnswer) {
            dispatch({type:'game_end'});

            if (chkTAnswer.isAnswer) {
                // 모달창 필요
                console.log('Clear!!');
            }
            else {
                // 모달창 필요
                console.log('Fail!!');
            }
        }

    }, [chkTAnswer])

    return (
        <>
            <Container>
                <h1 ref={el => (titleRef.current = el)}>Wordle Start!</h1>
                {
                    maxStep.map((a, i) => {
                        return (
                            <WordBox key={i} id={a} wordRef={wordRef}></WordBox>
                        )
                    })
                }
                <KeyBoard chkTAnswer={chkTAnswer}></KeyBoard>

                <ResultModal ></ResultModal>
                
            </Container>
        </>
    )
}

function WordBox(props) {
    let count = parseInt(props.id);

    return (
        <div>
            <input id={`${props.id}-0`} type="text" readOnly className="word-box" ref={el => (props.wordRef.current[(0 + (count - 1) * 5)] = el)}></input>
            <input id={`${props.id}-1`} type="text" readOnly className="word-box" ref={el => (props.wordRef.current[(1 + (count - 1) * 5)] = el)}></input>
            <input id={`${props.id}-2`} type="text" readOnly className="word-box" ref={el => (props.wordRef.current[(2 + (count - 1) * 5)] = el)}></input>
            <input id={`${props.id}-3`} type="text" readOnly className="word-box" ref={el => (props.wordRef.current[(3 + (count - 1) * 5)] = el)}></input>
            <input id={`${props.id}-4`} type="text" readOnly className="word-box" ref={el => (props.wordRef.current[(4 + (count - 1) * 5)] = el)}></input>
        </div>
    )
}

export default Main;