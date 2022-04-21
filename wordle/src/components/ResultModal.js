import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Modal } from 'react-bootstrap';

function ResultModal(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = (e) => {
        //console.log(e);
        setShow(false)

        // next 클릭시 게임 초기화 필요
        if(e.target.id == 'next-btn')
            dispatch({type:'game_start'});
    };

    let dispatch = useDispatch();
    let game_state = useSelector((state) => state.game_reducer);

    useEffect(()=>{
        console.log(game_state);
        if(!game_state)
        {
            handleShow();
        }
           
    }, [game_state])


    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Result</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>body: 정답의 뜻을 알려주기, 성공률 표시하기</p>
                    <p>close: 그냥 닫히기만 하고 모달창을 다시 띄울수 있어야함</p>
                    <p>next: 다음게임으로 넘어가기</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button id="next-btn" variant="primary" onClick={handleClose}>Next</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ResultModal;