import React, { useState } from "react";
import '../App.css';
import { Container, InputGroup, Row, Col, Form } from 'react-bootstrap';

function Main(props) {
    // step에 따른 textbox 
    let [step, setStep] = useState(0);
    let maxStep = props.max_step;

    return (
        <>
            <Container>
                <h1>Wordle Start!</h1>
                {
                    maxStep.map((a,i) => {
                        return(
                            <WordBox key={i}></WordBox>
                        )
                        
                    })
                }
                
            </Container>

        </>
    )
}

function WordBox(props) {
    return (
        <div>
            <InputGroup>
                <input type="text" className="word-box"></input>
                <input type="text" className="word-box"></input>
                <input type="text" className="word-box"></input>
                <input type="text" className="word-box"></input>
                <input type="text" className="word-box"></input>
            </InputGroup>
        </div>
    )
}

export default Main;