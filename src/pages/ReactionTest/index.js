import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as SvgClock } from "asset/svg/clock.svg";
import * as S from "pages/ReactionTest/indexStyle";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ReactionTest() {
  const state = useSelector((state) => state.score);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [screenState, setScreenState] = useState("waiting"); // 상태관리를 하기 위한 State [wating, ready, go]
  const [message, setMessage] = useState("Click Screen!"); // div화면에 보여지는 메세지 State
  const [count, setCount] = useState(1); // 게임을 3번 반복하면 1번 사이클 State
  const [progressbarColor, setProgressbarColor] = useState("variant");

  const timeout = useRef();
  const startTime = useRef();
  const endTime = useRef();
  // useRef를 이용하여 변수관리를 실시한다. -> 재랜더링 필요없음

  const handleStartGame = () => {
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

  const handleRestartGame = () => {
    dispatch({
      type: "RESETSCORE",
    });
    setCount(1);
  };

  const avg = Math.floor(
    (state.score[0] + state.score[1] + state.score[2]) / 3
  );

  if (!localStorage.getItem("userName")) {
    let timerInterval;
    Swal.fire({
      title: "비정상적인 접근입니다.",
      html: "<b></b> 시간 후에 메인으로 이동합니다.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      navigate("/");
      navigate(0);
    });
  }

  return (
    <S.GameWrapper>
      <S.PlayScreen className={screenState} onClick={handleStartGame}>
        <S.Mentdiv>
          <S.Progress>
            <ProgressBar
              variant={progressbarColor}
              animated
              now={(state.score.length / 3) * 100}
            />
          </S.Progress>
          <SvgClock fill="white"></SvgClock>
          <S.GameMessageWrapper>{count < 4 && message}</S.GameMessageWrapper>

          {message === "Click to keep going" && count < 4 && count > 1 ? (
            <S.GameScoreWrapper>
              {endTime.current - startTime.current}ms
            </S.GameScoreWrapper>
          ) : null}
          {count === 3 + 1 ? (
            <>
              <S.GameMessageWrapper>Average reaction time</S.GameMessageWrapper>
              <S.GameScoreWrapper>{avg}ms</S.GameScoreWrapper>
              <Button variant="warning" onClick={handleRestartGame}>
                SAVE SCORE & REGAME
              </Button>
            </>
          ) : null}
        </S.Mentdiv>
      </S.PlayScreen>

      <S.MiniResultDiv>
        1️⃣ : {state.score[0] ? `${state.score[0]}ms` : "Before implementation"}
        <br />
        2️⃣ : {state.score[1] ? `${state.score[1]}ms` : "Before implementation"}
        <br />
        3️⃣ : {state.score[2] ? `${state.score[2]}ms` : "Before implementation"}
        <br />
        Avgerage : {avg ? `${avg}ms` : "It is shown after three attempts."}
        {/* 첫번째, 두번째, 세번째 시도는 state의 값을 받아와서 존재하면 state[i]에 해당하는 값을 보여주고 아니면 실시전 이라고 보여줌 */}
        {/* 평균은 평균값이 계산될때 즉, state1,2,3이 존재할때 참 문장이 실행되어 평균을 보여준다 */}
      </S.MiniResultDiv>
    </S.GameWrapper>
  );
}
export default ReactionTest;
