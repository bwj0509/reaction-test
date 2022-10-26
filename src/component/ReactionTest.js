import React, { useRef, useState } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Navbar,
  Container,
} from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as SvgClock } from "../svg/clock.svg";

const MiniResultDiv = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 40px;
  border: 3px solid gray;
  border-radius: 5px;

  :hover {
    background-color: gray;
  }
`;
const PlayScreenDiv = styled.div`
  width: 100%;
  height: 50vh;
  cursor: pointer;
`;
const Mentdiv = styled.div`
  //background-color: #050500;
  margin: auto;
`;
const ProgressDiv = styled.div`
  width: 50%;
  margin: auto;
  padding-top: 15px;
  padding-bottom: 50px;
`;

function ReactionTest() {
  const state = useSelector((state) => state.score);
  console.log(state);
  const dispatch = useDispatch();

  const [screenState, setScreenState] = useState("waiting"); // 상태관리를 하기 위한 State [wating, ready, go]
  const [message, setMessage] = useState("Click Screen!"); // div화면에 보여지는 메세지 State
  const [count, setCount] = useState(1); // 게임을 3번 반복하면 1번 사이클 State
  const [progressbarColor, setProgressbarColor] = useState("variant");

  const timeout = useRef();
  const startTime = useRef();
  const endTime = useRef();
  // useRef를 이용하여 변수관리를 실시한다. -> 재랜더링 필요없음

  const onClick = () => {
    if (count <= 3) {
      if (screenState === "waiting") {
        setScreenState("ready");
        setMessage("Waiting for Green!");
        setProgressbarColor("danger"); //빨간색

        timeout.current = setTimeout(() => {
          //clearTimeout 위해서 timeout 키워드 설정
          setScreenState("go");
          setMessage("Click!");
          setProgressbarColor("success"); //초록색
          startTime.current = new Date(); //시작시간 체크
        }, Math.floor(Math.random() * 500 + 500)); // 2초 ~ 5초
      } else if (screenState === "ready") {
        clearTimeout(timeout.current); // setTimeout 초기화
        setScreenState("waiting");
        setProgressbarColor("varient"); //파란색(기본색)
        setMessage("Early Click...");
      } else if (screenState === "go") {
        endTime.current = new Date(); // 끝시간 체크
        setScreenState("waiting");
        setMessage("Click to keep going");
        setProgressbarColor("varient"); //파란색(기본색)
        dispatch({
          type: "ADDSCORE",
          data: endTime.current - startTime.current,
        });

        setCount(count + 1);
      }
    }
  };

  const gameRestart = () => {
    dispatch({
      type: "RESETSCORE",
    });
    setCount(1);
  };

  const avg = Math.floor(
    (state.score[0] + state.score[1] + state.score[2]) / 3
  );

  function AnimatedExample() {
    return <ProgressBar animated now={45} />;
  }

  return (
    <>
      <PlayScreenDiv className={screenState} onClick={onClick}>
        <Mentdiv>
          <ProgressDiv>
            <ProgressBar
              variant={progressbarColor}
              animated
              now={(state.score.length / 3) * 100}
            />
          </ProgressDiv>
          <div>
            <SvgClock fill="white" width=""></SvgClock>
          </div>
          <div style={{ fontSize: "70px" }}>{count < 4 && message}</div>

          {message === "Click to keep going" && count < 4 ? (
            <div style={{ fontSize: "80px", marginBottom: "20px" }}>
              {" "}
              {endTime.current - startTime.current}ms
            </div>
          ) : null}
          {count === 3 + 1 ? ( // 왜 여기서는 +1을 해야하는지...
            <>
              <div
                style={{
                  fontSize: "50px",
                  marginTop: "15px",
                  fontWeight: "bold",
                }}
              >
                Average reaction time
              </div>
              <div style={{ fontSize: "80px", marginBottom: "20px" }}>
                {avg}ms
              </div>
              <Button variant="warning" onClick={gameRestart}>
                RETRY
              </Button>
            </>
          ) : null}
        </Mentdiv>
      </PlayScreenDiv>

      <MiniResultDiv>
        첫번째 시도 :{state[0] ? `${state[0]}ms` : "실시 전"}
        <br />
        두번째 시도 :{state[1] ? `${state[1]}ms` : "실시 전"}
        <br />
        세번째 시도 :{state[2] ? `${state[2]}ms` : "실시 전"}
        <br />
        평균 : {avg ? `${avg}ms` : "세번의 시도 후에 보여집니다"}
        {/* 첫번째, 두번째, 세번째 시도는 state의 값을 받아와서 존재하면 state[i]에 해당하는 값을 보여주고 아니면 실시전 이라고 보여줌 */}
        {/* 평균은 평균값이 계산될때 즉, state1,2,3이 존재할때 참 문장이 실행되어 평균을 보여준다 */}
      </MiniResultDiv>
    </>
  );
}
export default ReactionTest;
