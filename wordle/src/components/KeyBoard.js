import React from "react";
import { Container } from "react-bootstrap";
import '../App.css';

function KeyBoard(props) {
    return (
        <>
            <div className="keyboard">
                <div>
                    <input type='button' className="keyboard-btn" value="Q"></input>
                    <input type='button' className="keyboard-btn" value="W"></input>
                    <input type='button' className="keyboard-btn" value="E"></input>
                    <input type='button' className="keyboard-btn" value="R"></input>
                    <input type='button' className="keyboard-btn" value="T"></input>
                    <input type='button' className="keyboard-btn" value="Y"></input>
                    <input type='button' className="keyboard-btn" value="U"></input>
                    <input type='button' className="keyboard-btn" value="I"></input>
                    <input type='button' className="keyboard-btn" value="O"></input>
                    <input type='button' className="keyboard-btn" value="P"></input>
                </div>

                <div>
                    <input type='button' className="keyboard-btn" value="A"></input>
                    <input type='button' className="keyboard-btn" value="S"></input>
                    <input type='button' className="keyboard-btn" value="D"></input>
                    <input type='button' className="keyboard-btn" value="F"></input>
                    <input type='button' className="keyboard-btn" value="G"></input>
                    <input type='button' className="keyboard-btn" value="H"></input>
                    <input type='button' className="keyboard-btn" value="J"></input>
                    <input type='button' className="keyboard-btn" value="K"></input>
                    <input type='button' className="keyboard-btn" value="L"></input>
                </div>

                <div>
                    <input type='button' className="keyboard-btn" value="ENTER"></input>
                    <input type='button' className="keyboard-btn" value="Z"></input>
                    <input type='button' className="keyboard-btn" value="X"></input>
                    <input type='button' className="keyboard-btn" value="C"></input>
                    <input type='button' className="keyboard-btn" value="V"></input>
                    <input type='button' className="keyboard-btn" value="B"></input>
                    <input type='button' className="keyboard-btn" value="N"></input>
                    <input type='button' className="keyboard-btn" value="M"></input>
                    <input type='button' className="keyboard-btn" value="<-"></input>
                </div>
            </div>

        </>
    )
}

export default KeyBoard;