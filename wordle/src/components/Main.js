import React, { useState, useEffect } from "react";
import '../App.css';
import { Container, InputGroup, Row, Col, Form } from 'react-bootstrap';

function Main(props) {
    // step에 따른 textbox 
    let [step, setStep] = useState(0);
    let [word, setWord] = useState({ word: '' });
    let [wordNum, setWordNum] = useState(0);
    let keyArray = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE", "ENTER"];
    let maxStep = props.max_step;

    useEffect(() => {

        if (!keyArray.includes(word.word)) return;

        switch (word.word) {
            case "ENTER": break;
            case "BACKSPACE": break;
            default:
                console.log(word);
                console.log(word);
                console.log(word);
                break;
        }

    }, [word])   // word 값이 변할때만 반응

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (keyArray.includes(e.key.toUpperCase())) {
                //console.log(e.key);
                switch (e.key.toUpperCase()) {
                    case "BACKSPACE": break;
                    case "ENTER": break;
                    default:
                        // 이벤트 리스너를 사용할경우 usestate의 set만 가능하고 변수값을 가져올 수 없다.
                        // 그래서 set을 한 후 useEffect로 값을 읽는 방식을 채택
                        setWord({ word: e.key.toUpperCase() });
                        break;
                }

            }
        })
    }, [])

    return (
        <>
            <Container>
                <h1>Wordle Start!</h1>
                {
                    maxStep.map((a, i) => {
                        return (
                            <WordBox key={i} id={a}></WordBox>
                        )
                    })
                }
            </Container>

        </>
    )
}

function WordBox(props) {
    // console.log(props.id);
    return (
        <div>
            <InputGroup>
                <input id={`${props.id}-0`} type="text" readOnly className="word-box"></input>
                <input id={`${props.id}-1`} type="text" readOnly className="word-box"></input>
                <input id={`${props.id}-2`} type="text" readOnly className="word-box"></input>
                <input id={`${props.id}-3`} type="text" readOnly className="word-box"></input>
                <input id={`${props.id}-4`} type="text" readOnly className="word-box"></input>
            </InputGroup>
        </div>
    )
}

export default Main;