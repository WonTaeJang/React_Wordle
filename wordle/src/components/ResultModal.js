import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal } from 'react-bootstrap';

function ResultModal(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = (e) => {
        setShow(false)

        // next 클릭시 게임 초기화 필요
        if (e.target.id == 'next-btn')
            dispatch({ type: 'game_start' });
    };

    let dispatch = useDispatch();
    let game_state = useSelector((state) => state.game_reducer);
    let modal_state = useSelector((state) => state.open_modal_reducer);

    useEffect(() => {
        //console.log(game_state);
        if (!game_state) {
            handleShow();
        }

    }, [game_state])

    // game 종료 후 close 버튼을 누른 후 다시 창을 띄우고 싶을때 
    useEffect(() => {
        if (modal_state) {
            handleShow();
            dispatch({ type: 'close' });
        }

    }, [modal_state])

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
                    <Modal.Title>
                        {
                            props.player.length > 0 ?
                                props.player[props.player.length - 1].isAnswer ? 'SUCCESS' : 'FAIL'
                                : 'NULL'
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Played: {' '+ props.player.length}
                    </p>
                    <p>
                        Success Rate:
                        {
                            props.player.length > 0 ?
                                ' '+ calcRate(props.player) + "%"
                                : 'NULL'
                        }
                    </p>
                    <p>
                        Answer:
                        {
                            props.player.length > 0 ?
                                ' '+ props.player[props.player.length - 1].answer
                                : 'NULL'
                        }
                    </p>
                    <p>
                        Mean:
                        {
                            props.player.length > 0 ?
                                ' '+ props.player[props.player.length - 1].meaning
                                : 'NULL'
                        }
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button id="next-btn" variant="primary" onClick={handleClose}>Next</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

function calcRate(obj) {
    let total_games = obj.length;
    let success_cnt = 0;

    obj.map((o, i) => {
        if (o.isAnswer) {
            success_cnt++;
        }
    })

    return Math.ceil((success_cnt / total_games) * 100);
}

export default ResultModal;