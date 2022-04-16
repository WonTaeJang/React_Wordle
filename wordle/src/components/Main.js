import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import Data from '../data/data.js'; // 정답
import { Container, InputGroup, Row, Col, Form } from 'react-bootstrap';
import KeyBoard from './KeyBoard';
import { useSelector, useDispatch } from 'react-redux';

function Main(props) {
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    const answer = Data.word;

    useEffect(()=>{
        console.log(state[0].word);
        if(state[0].word !== '')
        {
            setWord({ word: state[0].word });
            dispatch({type:'btnClick', payload: ''});
        }
            
    },[state])

    // step에 따른 textbox 
    let [step, setStep] = useState(0);
    let [word, setWord] = useState({ word: '' });
    let [wordList, setWordList] = useState({ 'step0': [] });
    let wordRef = useRef([]);
    let titleRef = useRef();
    let keyArray = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE", "ENTER"];
    let maxStep = props.max_step;

    // 객체 깊은 복사
    const cloneObj = obj => JSON.parse(JSON.stringify(obj));

    useEffect(() => {
        let tempObj = {};
        let tempArray = [];

        if (!keyArray.includes(word.word)) return;

        //console.log(word.word);
        switch (word.word) {
            case "ENTER":
                if (wordList[`step${step}`].length < 5) return;
                if (Object.keys(wordList).length >= maxStep.length) return;
                // 단어가 정상적인 단어인지 확인하는 함수 필요

                let stepUp = (step + 1)
                setStep(stepUp);

                tempObj = cloneObj(wordList);
                tempObj[`step${stepUp}`] = [];

                setWordList(tempObj);
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

    }, [word])   // word 값이 변할때만 반응

    // wordlist 값이 변경되면 useEffect가 반응
    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            if (wordList[`step${step}`].length > (i))
            {
                //document.getElementById(`${step + 1}-${i}`).value = wordList[`step${step}`][i];
                wordRef.current[i + step*5].value = wordList[`step${step}`][i];
            }
            else
            {
                //document.getElementById(`${step + 1}-${i}`).value = '';
                wordRef.current[i + step*5].value = '';
            }
        }
        titleRef.current.focus();

    }, [wordList])

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
                <KeyBoard wordlength={wordList[`step${step}`].length}></KeyBoard>
            </Container>
        </>
    )
}

function WordBox(props) {
    let count = parseInt(props.id);

    return (
        <div>
            <input id={`${props.id}-0`} type="text" readOnly className="word-box" ref={el => (props.wordRef.current[(0 + (count-1)*5)] = el)}></input>
            <input id={`${props.id}-1`} type="text" readOnly className="word-box" ref={el => (props.wordRef.current[(1 + (count-1)*5)] = el)}></input>
            <input id={`${props.id}-2`} type="text" readOnly className="word-box" ref={el => (props.wordRef.current[(2 + (count-1)*5)] = el)}></input>
            <input id={`${props.id}-3`} type="text" readOnly className="word-box" ref={el => (props.wordRef.current[(3 + (count-1)*5)] = el)}></input>
            <input id={`${props.id}-4`} type="text" readOnly className="word-box" ref={el => (props.wordRef.current[(4 + (count-1)*5)] = el)}></input>
        </div>
    )
}

export default Main;