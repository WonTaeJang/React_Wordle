import React from "react";
import '../App.css';
import { Container } from 'react-bootstrap';

function Main(){
    return(
        <>
        <Container>
        <h1>Wordle Start!</h1>
        <input type="text" className="word-box"></input>
        <input type="text" className="word-box"></input>
        <input type="text" className="word-box"></input>
        <input type="text" className="word-box"></input>
        <input type="text" className="word-box"></input>
        </Container>
        </>
    )
}

export default Main;