import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as S from "pages/Landing/indexStyle";

import { ReactComponent as SvgOne } from "asset/svg/1.svg";
import { ReactComponent as SvgTwo } from "asset/svg/2.svg";
import { ReactComponent as SvgThree } from "asset/svg/3.svg";
import { ReactComponent as SvgFour } from "asset/svg/4.svg";

function Landing() {
  const navigate = useNavigate();
  const handleIsLogin = () => {
    if (localStorage.getItem("userName")) {
      navigate("/reactiontest");
      navigate(0);
    } else {
      Swal.fire({
        icon: "error",
        title: "로그인이 필요합니다.",
        text: "우측 상단의 로그인을 해주세요.",
      });
    }
  };
  return (
    <S.Container>
      <S.ItemContainer>
        <Row>
          <Col sm={4}>
            <S.StyledLink onClick={handleIsLogin}>
              <S.ItemDiv>
                <SvgOne />
                <S.TitleDiv>Reaction Test</S.TitleDiv>
                <S.ContentDiv>How fast are you?</S.ContentDiv>
              </S.ItemDiv>
            </S.StyledLink>
          </Col>
          <Col sm={4}>
            <S.StyledLink to="/result">
              <S.ItemDiv>
                <SvgFour />
                <S.TitleDiv>Ranking</S.TitleDiv>
                <S.ContentDiv>Show your score</S.ContentDiv>
              </S.ItemDiv>
            </S.StyledLink>
          </Col>
          <Col sm={4}>
            <S.ItemDiv>
              <SvgThree />
              <S.TitleDiv>About</S.TitleDiv>
              <S.ContentDiv>About Us</S.ContentDiv>
            </S.ItemDiv>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <S.ItemDiv2>
              <SvgTwo />
              <S.TitleDiv>Coming soon</S.TitleDiv>
              <S.ContentDiv>Please wait</S.ContentDiv>
            </S.ItemDiv2>
          </Col>
          <Col sm={6}>
            <S.ItemDiv2>
              <SvgTwo />
              <S.TitleDiv>Coming soon</S.TitleDiv>
              <S.ContentDiv>Please wait</S.ContentDiv>
            </S.ItemDiv2>
          </Col>
        </Row>
      </S.ItemContainer>
    </S.Container>
  );
}

export default Landing;
