import React, { useRef, useState } from "react";
import { Button, InputGroup, FormControl, Navbar, Container } from 'react-bootstrap';

import Score from "./Score";
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';


const MiniResultDiv = styled.div`
    width: 80%;
    margin: auto;
    border: 3px solid gray;
    border-radius: 5px;

    :hover{
        background-color: gray;
    }
`




function ReactionTest() {
    const state = useSelector((state) => state.users.users)
    console.log(state)
    const dispatch = useDispatch()

    const [gameIntroduce, setGameIntroduce] = useState(true); // 게임설명UI를 보여주기 위한 State

    const [screenState, setScreenState] = useState('waiting'); // 상태관리를 하기 위한 State
    const [message, setMessage] = useState('시작하시려면 화면클릭'); // div화면에 보여지는 메세지 State
    const [count, setCount] = useState(1); // 게임을 3번 반복하면 1번 사이클 State  
    const [resultTime, setResultTime] = useState([]); // 게임 결과(시간)을 보여주기 위해 만든 State 
    const [resultAvg, setResultAvg] = useState([]); // 3번의 결과를 받아 평균값을 저장하는 State


    const [name, setName] = useState('');
    const [name2, setName2] = useState('') // 게임 결과(이름)보여주기 위해 만든 State


    const timeout = useRef();
    const startTime = useRef();
    const endTime = useRef();
    // useRef를 이용하여 변수관리를 실시한다. -> 재랜더링 필요없음


    const onClick = () => {

        if (count <= 3) {
            if (screenState === 'waiting') {
                setScreenState('ready');
                setMessage('초록색 화면으로 변하면 클릭!');

                timeout.current = setTimeout(() => { //clearTimeout 위해서 timeout 키워드 설정
                    setScreenState('go');
                    setMessage('클릭!');
                    startTime.current = new Date() //시작시간 체크
                }, Math.floor(((Math.random() * 500) + 500))); // 2초 ~ 5초
            }

            else if (screenState === 'ready') {
                clearTimeout(timeout.current); // setTimeout 초기화
                setScreenState('waiting');
                setMessage('클릭을 너무 일찍했음');
            }

            else if (screenState === 'go') {
                endTime.current = new Date(); // 끝시간 체크
                setScreenState('waiting');
                setMessage('다시 시작하시려면 화면클릭');
                setResultTime((prev) => {
                    return [...prev, endTime.current - startTime.current];
                })
                setCount(count + 1)

            }
        }
    }

    const gameRestart = () => {
        const sum = Number(resultTime[0]) + Number(resultTime[1]) + Number(resultTime[2])
        const avg = Math.floor(sum / 3)
        setResultAvg((prev) => {
            return [...prev, [avg, name]]
        })
        setResultTime([]);
        setCount(1);
    }





    return (
        <>
            {gameIntroduce === true
                ? <div className="mt-5 introduce">
                    <h4 className="mainfontsize1">게임설명</h4>
                    <span className="mainfontsize">3번의 반응속도를 측정 후 평균값을 보여줍니다<br></br>시작하려면 게임설명을 닫고 화면을 클릭하세요</span><br></br>
                    <Button variant="info" className="mt-2 mainfontsize" onClick={() => { setGameIntroduce(false) }}>닫기</Button>{' '}
                </div>
                : null
            }
            {/* 게임 설명을 보여주는 MODAL창 */}

            <div id="screen" className={screenState} onClick={name ? onClick : () => { alert('게임을 시작 하기 전 아래에 이름을 먼저 입력해주세요') }}>
                {message}
                {message === '다시 시작하시려면 화면클릭123'
                    ? <div className="mainfontsize">{count - 1}번째 시도는 {endTime.current - startTime.current}ms입니다.</div>
                    : null
                }
                {count === (3 + 1) // 왜 여기서는 +1을 해야하는지...
                    ? <><div className="mainfontsize">3번의 평균값은 {Math.floor((Number(resultTime[0]) + Number(resultTime[1]) + Number(resultTime[2])) / 3)}ms입니다.</div>
                        <Button variant="warning" onClick={gameRestart}>다시 시도하기</Button>
                    </>
                    : null
                }
            </div>
            <MiniResultDiv>
                첫번째 시도 :{resultTime[0] ? `${resultTime[0]}ms` : '실시 전'}<br />
                두번째 시도 :{resultTime[1] ? `${resultTime[1]}ms` : '실시 전'}<br />
                세번째 시도 :{resultTime[2] ? `${resultTime[2]}ms` : '실시 전'}<br />
                평균 : {Math.floor((Number(resultTime[0]) + Number(resultTime[1]) + Number(resultTime[2])) / 3)
                    ? `${Math.floor((Number(resultTime[0]) + Number(resultTime[1]) + Number(resultTime[2])) / 3)}ms`
                    : '세번의 시도 후에 보여집니다'
                }
                {/* 첫번째, 두번째, 세번째 시도는 resultTime의 값을 받아와서 존재하면 resultTime[i]에 해당하는 값을 보여주고 아니면 실시전 이라고 보여줌 */}
                {/* 평균은 평균값이 계산될때 즉, resultTime1,2,3이 존재할때 참 문장이 실행되어 평균을 보여준다 */}

            </MiniResultDiv>
            <hr />
            <div className="mt-3" style={{ width: '80vw', margin: 'auto' }} >
                <InputGroup className="mb-3" onChange={(e) => { setName2(e.target.value) }} >
                    <FormControl
                        placeholder="이름을 입력해주세요, 이름 변경 가능합니다"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={() => { setName(name2); alert(`${name2}님 반갑습니다^^`) }}>
                        이름변경
                    </Button>
                </InputGroup>
            </div>

            <Score resultAvg={resultAvg} />
        </>
    )
}
export default ReactionTest;