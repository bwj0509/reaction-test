import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: rgb(230 232 244);
  width: 100%;
  height: 100vh;
`;

export const ItemContainer = styled.div`
  width: 70%;
  margin: auto;
  max-width: 700px;
  min-width: 600px;
  box-sizing: border-box;
`;

export const ItemDiv = styled.div`
  margin-top: 30px;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 5px;
  border-radius: 5px;
  background-color: white;
  min-width: 220px;
  max-width: 240px;
  max-height: 240px;
  cursor: pointer;
  &:hover {
    position: relative;
    bottom: 10px;
    fill: #379237;
    box-shadow: rgb(0 0 0 / 30%) 0px 2px 5px;
    background-color: rgb(250 255 248 / 70%);
  }
  &:active {
    color: #379237;
    background-color: rgb(250 255 248 / 70%);
  }
  transition: all 100ms linear;
`;

export const ItemDiv2 = styled.div`
  margin-top: 30px;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 5px;
  border-radius: 5px;
  background-color: white;
  min-width: 330px;
  max-width: 360px;
  max-height: 240px;
  cursor: pointer;
  &:hover {
    position: relative;
    bottom: 10px;
    fill: #379237;
    box-shadow: rgb(0 0 0 / 30%) 0px 2px 5px;
    background-color: rgb(250 255 248 / 70%);
  }
  &:active {
    color: #379237;
    background-color: rgb(250 255 248 / 70%);
  }
  transition: all 100ms linear;
`;

export const TitleDiv = styled.div`
  margin-top: 15px;
  font-size: 1.7rem;
  font-weight: bold;
`;

export const ContentDiv = styled.div`
  font-size: 1.1rem;
  margin-top: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration-line: none;
  color: black;
`;
