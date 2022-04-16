import React from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import '../App.css';

function KeyBoard(props) {
    let dispatch = useDispatch();

    let onClickEvent = (e) => {
        if (props.wordlength === 5)
            dispatch({ type: 'btnClick', payload: '' });
        else
            dispatch({ type: 'btnClick', payload: e });
    }

    return (
        <>
            <div className="keyboard">
                <div>
                    <input type='button' onClick={()=>{onClickEvent('Q');}} className="keyboard-btn" value="Q"></input>
                    <input type='button' onClick={()=>{onClickEvent('W');}} className="keyboard-btn" value="W"></input>
                    <input type='button' onClick={()=>{onClickEvent('E');}} className="keyboard-btn" value="E"></input>
                    <input type='button' onClick={()=>{onClickEvent('R');}} className="keyboard-btn" value="R"></input>
                    <input type='button' onClick={()=>{onClickEvent('T');}} className="keyboard-btn" value="T"></input>
                    <input type='button' onClick={()=>{onClickEvent('Y');}} className="keyboard-btn" value="Y"></input>
                    <input type='button' onClick={()=>{onClickEvent('U');}} className="keyboard-btn" value="U"></input>
                    <input type='button' onClick={()=>{onClickEvent('I');}} className="keyboard-btn" value="I"></input>
                    <input type='button' onClick={()=>{onClickEvent('O');}} className="keyboard-btn" value="O"></input>
                    <input type='button' onClick={()=>{onClickEvent('P');}} className="keyboard-btn" value="P"></input>
                </div>

                <div>
                    <input type='button' onClick={()=>{onClickEvent('A');}} className="keyboard-btn" value="A"></input>
                    <input type='button' onClick={()=>{onClickEvent('S');}} className="keyboard-btn" value="S"></input>
                    <input type='button' onClick={()=>{onClickEvent('D');}} className="keyboard-btn" value="D"></input>
                    <input type='button' onClick={()=>{onClickEvent('F');}} className="keyboard-btn" value="F"></input>
                    <input type='button' onClick={()=>{onClickEvent('G');}} className="keyboard-btn" value="G"></input>
                    <input type='button' onClick={()=>{onClickEvent('H');}} className="keyboard-btn" value="H"></input>
                    <input type='button' onClick={()=>{onClickEvent('J');}} className="keyboard-btn" value="J"></input>
                    <input type='button' onClick={()=>{onClickEvent('K');}} className="keyboard-btn" value="K"></input>
                    <input type='button' onClick={()=>{onClickEvent('L');}} className="keyboard-btn" value="L"></input>
                </div>

                <div>
                    <input type='button' onClick={()=>{onClickEvent('ENTER');}} className="keyboard-btn" value="ENTER"></input>
                    <input type='button' onClick={()=>{onClickEvent('Z');}} className="keyboard-btn" value="Z"></input>
                    <input type='button' onClick={()=>{onClickEvent('X');}} className="keyboard-btn" value="X"></input>
                    <input type='button' onClick={()=>{onClickEvent('C');}} className="keyboard-btn" value="C"></input>
                    <input type='button' onClick={()=>{onClickEvent('V');}} className="keyboard-btn" value="V"></input>
                    <input type='button' onClick={()=>{onClickEvent('B');}} className="keyboard-btn" value="B"></input>
                    <input type='button' onClick={()=>{onClickEvent('N');}} className="keyboard-btn" value="N"></input>
                    <input type='button' onClick={()=>{onClickEvent('M');}} className="keyboard-btn" value="M"></input>
                    <input type='button' onClick={()=>{onClickEvent('BACKSPACE');}} className="keyboard-btn" value="←"></input>
                </div>
            </div>
        </>
    )
}

export default KeyBoard;