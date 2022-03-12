import React, { useRef, useState } from "react";
import { Button, Table, InputGroup, FormControl } from 'react-bootstrap';
import Score from "./Score";

function Main(){

   const [gameIntroduce, setGameIntroduce] = useState(true);
   const [screenState, setScreenState] = useState('waiting');
   const [message, setMessage] = useState('시작하시려면 화면클릭');
   const [resultMessage, setResultMessage] = useState('기본값')
   const [resultTime, setResultTime] = useState([]);
   const [name, setName] = useState('백우진');
   const [name2, setName2] = useState('')
   
  
   const timeout = useRef();
   const startTime = useRef();
   const endTime = useRef();



   const onClick = ()=>{

       if(screenState === 'waiting'){
           setScreenState('ready');
           setMessage('초록색 화면으로 변하면 클릭!');

           timeout.current =  setTimeout(() => { //clearTimeout 위해서 timeout 키워드 설정
               setScreenState('go');
               setMessage('클릭!');
               startTime.current = new Date() //시작시간 체크
           }, Math.floor((( Math.random()*1000 ) + 2000))); // 2초 ~ 3초
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
                return [...prev, [endTime.current - startTime.current, name]];
            })
        }
   }
    
   

    return(
        <>
            {gameIntroduce === true
            ? <div className="mt-5 introduce">
                <h4 className="mainfontsize1">게임설명</h4>
                <span className="mainfontsize">아래 화면을 누르고 화면이 초록색으로 변하면 클릭!</span><br></br>
                <Button variant="info" className="mt-2 mainfontsize" onClick={()=>{setGameIntroduce(false)}}>닫기</Button>{' '}
            </div>
            : null
            }
            
            <div id="screen" className={screenState} onClick={onClick}>
                {message}
                {message === '다시 시작하시려면 화면클릭'
                ?<div className="mainfontsize">{name}님의 반응속도는 {endTime.current - startTime.current}ms입니다.</div>
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
            


            <Score resultTime = {resultTime}/>
        </>
    )
}
export default Main;