import React from "react";
import { Link } from "react-router-dom";
import * as S from "pages/NotFound/indexStyle";

function NotFound() {
  return (
    <S.Container>
      <S.Title>잘못된 접근 입니다.</S.Title>
      <Link to="/">
        <S.Button>메인페이지로 돌아가기</S.Button>
      </Link>
    </S.Container>
  );
}

export default NotFound;
