import React, { useRef, useState } from "react";
import { Button, InputGroup, FormControl, Navbar, Container } from 'react-bootstrap';
import Score from "./Score";

function Main(){

   const [gameIntroduce, setGameIntroduce] = useState(true); // 게임설명UI를 보여주기 위한 State

   const [screenState, setScreenState] = useState('waiting'); // 상태관리를 하기 위한 State
   const [message, setMessage] = useState('시작하시려면 화면클릭'); // div화면에 보여지는 메세지 State
   const [count, setCount] = useState(1); // 게임을 3번 반복하면 1번 사이클 State  
   const [resultTime, setResultTime] = useState([]); // 게임 결과(시간)을 보여주기 위해 만든 State 
   const [resultAvg, setResultAvg] = useState([]); // 3번의 결과를 받아 평균값을 저장하는 State

   const [name, setName] = useState('백우진');
   const [name2, setName2] = useState('') // 게임 결과(이름)보여주기 위해 만든 State
   
  
   const timeout = useRef();
   const startTime = useRef();
   const endTime = useRef();
 // useRef를 이용하여 변수관리를 실시한다. -> 재랜더링 필요없음


   const onClick = ()=>{

       if(count<=3){
            if(screenState === 'waiting'){
                setScreenState('ready');
                setMessage('초록색 화면으로 변하면 클릭!');
    
                timeout.current =  setTimeout(() => { //clearTimeout 위해서 timeout 키워드 설정
                    setScreenState('go');
                    setMessage('클릭!');
                    startTime.current = new Date() //시작시간 체크
                }, Math.floor((( Math.random()*3000 ) + 2000))); // 2초 ~ 5초 // 테스트모드 실행중!
            }
    
            else if(screenState === 'ready'){
                clearTimeout(timeout.current); // setTimeout 초기화
                setScreenState('waiting');
                setMessage('클릭을 너무 일찍했음');
            }
    
            else if(screenState === 'go'){
                endTime.current = new Date(); // 끝시간 체크
                setScreenState('waiting');
                setMessage('다시 시작하시려면 화면클릭');
                setResultTime((prev)=>{
                    return [...prev, endTime.current - startTime.current];
                })
                console.log(resultTime)
                setCount(count+1)
                
            }
       }
   }
    
    const gameRestart = ()=>{
       let sum =  Number(resultTime[0]) + Number(resultTime[1]) + Number(resultTime[2])
       let avg = Math.floor(sum / 3)
       setResultAvg((prev)=>{
        return [...prev ,[avg, name]]
       })
       setResultTime([]);
       setCount(1);
    }


    return(
        <>
            <> {/* 상단 Navbar구현*/}
                <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="../logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'  '}
                    반응속도 테스트
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <div>{name}</div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </>

            {gameIntroduce === true
            ? <div className="mt-5 introduce">
                <h4 className="mainfontsize1">게임설명</h4>
                <span className="mainfontsize">3번의 반응속도를 측정 후 평균값을 보여줍니다<br></br>시작하려면 게임설명을 닫고 화면을 클릭하세요</span><br></br>
                <Button variant="info" className="mt-2 mainfontsize" onClick={()=>{setGameIntroduce(false)}}>닫기</Button>{' '}
            </div>
            : null
            }
            
            <div id="screen" className={screenState} onClick={onClick}>
                {message}
                {message === '다시 시작하시려면 화면클릭'
                ?<div className="mainfontsize">{count-1}번째 시도는 {endTime.current - startTime.current}ms입니다.</div>
                :null
                }
                {count === (3+1) // 왜 여기서는 +1을 해야하는지...
                ?<><div className="mainfontsize">3번의 평균값은 {Math.floor((Number(resultTime[0])+Number(resultTime[1])+Number(resultTime[2])) / 3)}ms입니다.</div><Button variant="warning" onClick={gameRestart}>다시 시도하기</Button></>
                :null
                }
            </div>


            <div className="mt-3" style={{width:'80vw' ,margin:'auto'}} >
                <InputGroup className="mb-3" onChange={(e)=>{setName2(e.target.value)} } >
                    <FormControl 
                    placeholder="변경하고자 하는 이름을 입력해주세요"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={()=>{setName(name2)}}>
                    이름변경
                    </Button>
                </InputGroup>
            </div>
            


            <Score resultAvg = {resultAvg}/>
        </>
    )
}
export default Main;