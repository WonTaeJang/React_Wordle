import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import '../App.css';

function KeyBoard(props) {
    let dispatch = useDispatch();
    let chkTAnswer = props.chkTAnswer;
    let keyboard = useRef([]);
    let onClickEvent = (e) => {
        dispatch({ type: 'btnClick', payload: e });
    }

    useEffect(()=>{
        if(chkTAnswer.compareList.length <= 0) return;

        chkTAnswer.compareList.map((comp, i)=>{
            let arr = keyboard.current[(chkTAnswer.inputWords[i].charCodeAt()-65)].className.split(' ');
            if(arr.length === 1)
            {
                // none click
                switch(comp)
                {
                    case 'c': 
                        keyboard.current[(chkTAnswer.inputWords[i].charCodeAt()-65)].className = keyboard.current[(chkTAnswer.inputWords[i].charCodeAt()-65)].className + ' correct';
                        break;
                    case 'w': 
                        keyboard.current[(chkTAnswer.inputWords[i].charCodeAt()-65)].className = keyboard.current[(chkTAnswer.inputWords[i].charCodeAt()-65)].className + ' wrong';
                        break;
                    case 'a': 
                        keyboard.current[(chkTAnswer.inputWords[i].charCodeAt()-65)].className = keyboard.current[(chkTAnswer.inputWords[i].charCodeAt()-65)].className + ' any';
                        break;
                }
                   
            }
            else
            {
                // clicked
                if(arr[1] === 'correct')
                {
                    // 변화 없음
                }
                else if(arr[1] === 'wrong')
                {
                    if(comp === 'c')
                    {
                        keyboard.current[(chkTAnswer.inputWords[i].charCodeAt()-65)].className = arr[0] + ' correct';
                    }
                }
                else if(arr[1] === 'any')
                {
                    if(comp === 'w')
                    {
                        keyboard.current[(chkTAnswer.inputWords[i].charCodeAt()-65)].className =  arr[0] + ' wrong';
                    }
                    else if(comp === 'a')
                    {
                        keyboard.current[(chkTAnswer.inputWords[i].charCodeAt()-65)].className =  arr[0] + ' any';
                    }
                }
            }

        })

        //console.log(chkTAnswer);
    },[chkTAnswer])

    return (
        <>
            <div className="keyboard">
                <div>
                    <input type='button' onClick={()=>{onClickEvent('Q');}} ref={el => (keyboard.current[16] = el)} className="keyboard-btn" value="Q"></input>
                    <input type='button' onClick={()=>{onClickEvent('W');}} ref={el => (keyboard.current[22] = el)} className="keyboard-btn" value="W"></input>
                    <input type='button' onClick={()=>{onClickEvent('E');}} ref={el => (keyboard.current[4] = el)} className="keyboard-btn" value="E"></input>
                    <input type='button' onClick={()=>{onClickEvent('R');}} ref={el => (keyboard.current[17] = el)} className="keyboard-btn" value="R"></input>
                    <input type='button' onClick={()=>{onClickEvent('T');}} ref={el => (keyboard.current[19] = el)} className="keyboard-btn" value="T"></input>
                    <input type='button' onClick={()=>{onClickEvent('Y');}} ref={el => (keyboard.current[24] = el)} className="keyboard-btn" value="Y"></input>
                    <input type='button' onClick={()=>{onClickEvent('U');}} ref={el => (keyboard.current[20] = el)} className="keyboard-btn" value="U"></input>
                    <input type='button' onClick={()=>{onClickEvent('I');}} ref={el => (keyboard.current[8] = el)} className="keyboard-btn" value="I"></input>
                    <input type='button' onClick={()=>{onClickEvent('O');}} ref={el => (keyboard.current[14] = el)} className="keyboard-btn" value="O"></input>
                    <input type='button' onClick={()=>{onClickEvent('P');}} ref={el => (keyboard.current[15] = el)} className="keyboard-btn" value="P"></input>
                </div>

                <div>
                    <input type='button' onClick={()=>{onClickEvent('A');}} ref={el => (keyboard.current[0] = el)} className="keyboard-btn" value="A"></input>
                    <input type='button' onClick={()=>{onClickEvent('S');}} ref={el => (keyboard.current[18] = el)} className="keyboard-btn" value="S"></input>
                    <input type='button' onClick={()=>{onClickEvent('D');}} ref={el => (keyboard.current[3] = el)} className="keyboard-btn" value="D"></input>
                    <input type='button' onClick={()=>{onClickEvent('F');}} ref={el => (keyboard.current[5] = el)} className="keyboard-btn" value="F"></input>
                    <input type='button' onClick={()=>{onClickEvent('G');}} ref={el => (keyboard.current[6] = el)} className="keyboard-btn" value="G"></input>
                    <input type='button' onClick={()=>{onClickEvent('H');}} ref={el => (keyboard.current[7] = el)} className="keyboard-btn" value="H"></input>
                    <input type='button' onClick={()=>{onClickEvent('J');}} ref={el => (keyboard.current[9] = el)} className="keyboard-btn" value="J"></input>
                    <input type='button' onClick={()=>{onClickEvent('K');}} ref={el => (keyboard.current[10] = el)} className="keyboard-btn" value="K"></input>
                    <input type='button' onClick={()=>{onClickEvent('L');}} ref={el => (keyboard.current[11] = el)} className="keyboard-btn" value="L"></input>
                </div>

                <div>
                    <input type='button' onClick={()=>{onClickEvent('ENTER');}} className="keyboard-btn" value="ENTER"></input>
                    <input type='button' onClick={()=>{onClickEvent('Z');}} ref={el => (keyboard.current[25] = el)} className="keyboard-btn" value="Z"></input>
                    <input type='button' onClick={()=>{onClickEvent('X');}} ref={el => (keyboard.current[23] = el)} className="keyboard-btn" value="X"></input>
                    <input type='button' onClick={()=>{onClickEvent('C');}} ref={el => (keyboard.current[2] = el)} className="keyboard-btn" value="C"></input>
                    <input type='button' onClick={()=>{onClickEvent('V');}} ref={el => (keyboard.current[21] = el)} className="keyboard-btn" value="V"></input>
                    <input type='button' onClick={()=>{onClickEvent('B');}} ref={el => (keyboard.current[1] = el)} className="keyboard-btn" value="B"></input>
                    <input type='button' onClick={()=>{onClickEvent('N');}} ref={el => (keyboard.current[13] = el)} className="keyboard-btn" value="N"></input>
                    <input type='button' onClick={()=>{onClickEvent('M');}} ref={el => (keyboard.current[12] = el)} className="keyboard-btn" value="M"></input>
                    <input type='button' onClick={()=>{onClickEvent('BACKSPACE');}} className="keyboard-btn" value="←"></input>
                </div>
            </div>
        </>
    )
}

export default KeyBoard;