import React, { useRef, useState } from "react";
import { Button, Table } from 'react-bootstrap';

function Main(){

   const [gameIntroduce, setGameIntroduce] = useState(true);
   const [screenState, setScreenState] = useState('waiting');
   const [message, setMessage] = useState('시작하시려면 화면클릭');
   const [resultTime, setResultTime] = useState([]);

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
            setMessage('시작하시려면 화면클릭');
            setResultTime((prev)=>{
                return [...prev, endTime.current - startTime.current];
            })
        }
   }
    
   const showAvg = ()=>{
       return resultTime.length === 0
       ? null
       : <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
       </>
   }

    return(
        <>
            {gameIntroduce === true
            ? <div className="mt-5 introduce">
                <h4 className="mainfontsize1">게임설명</h4>
                <span className="mainfontsize">시작 버튼을 누르고 화면이 초록색으로 변하면 클릭하세요</span><br></br>
                <Button variant="info" className="mt-2 mainfontsize" onClick={()=>{setGameIntroduce(false)}}>닫기</Button>{' '}
            </div>
            : null
            }
            
            <div
                id="screen"
                className={screenState}
                onClick={onClick}>{message}
            </div>
            {showAvg()}
        </>
    )
}
export default Main;