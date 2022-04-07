import React, { useState, useEffect } from "react";
import '../App.css';
import { Container, InputGroup, Row, Col, Form } from 'react-bootstrap';

function Main(props) {
    // step에 따른 textbox 
    let [step, setStep] = useState(0);
    let [word, setWrod] = useState({
        "w0": '',
        "w1": '',
        "w2": '',
        "w3": '',
        "w4": ''
    })
    let [wordNum, setWordNum] = useState(0);
    let keyArray = ["Q","W", "E", "R","T", "Y", "U", "I", "O", "P",
                    "A", "S", "D", "F", "G", "H", "J", "K", "L", 
                    "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE", "ENTER"];
    let maxStep = props.max_step;

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if(keyArray.includes(e.key.toUpperCase()))
            {
                console.log(e.key);
                switch(e.key.toUpperCase())
                {
                    case "BACKSPACE": break;
                    case "ENTER": break;
                    default: break;
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
    console.log(props.id);
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