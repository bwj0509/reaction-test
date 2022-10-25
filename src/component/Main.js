import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components'

import { ReactComponent as SvgOne } from '../svg/1.svg' //svg image import
import { ReactComponent as SvgTwo } from '../svg/2.svg'
import { ReactComponent as SvgThree } from '../svg/3.svg'

import { Link } from "react-router-dom"; // Link를 이용해 원하는 페이지로 이동할 수 있게 한다

const ContainerDiv = styled.div`
    width: 70%;
    margin: auto;
    max-width:600px;
    max-height:400px;
    overflow:hidden;
    
`

const ItemDiv = styled.div`
    height: 20vw;
    margin-top: 2vw;
    padding: 2vw;
    box-shadow:rgb(0 0 0 / 10%) 0px 2px 5px;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    &:hover {
        position: relative;
        bottom:10px;
        fill:#379237;
        box-shadow:rgb(0 0 0 / 30%) 0px 2px 5px;
    }
    transition:all 100ms linear;
`
const TitleDiv = styled.div`
    //background-color: yellow;
    margin-top: 15px;
    font-size: 1.7rem;
    font-weight: bold;
`

const ContentDiv = styled.div`
    //background-color: greenyellow;
    font-size: 1.1rem;
    margin-top: 15px;
`

function Main() {
    return (
        <div style={{ background: 'rgb(230 232 244)', width: '100%', height: '100vh' }}>
            <ContainerDiv>
                <Row>
                    <Col sm={4}>
                        <Link to='/reactiontest' style={{ textDecorationLine:'none', color:'black' }}>
                            <ItemDiv>
                                <SvgOne />
                                <TitleDiv>Reaction Test</TitleDiv>
                                <ContentDiv>How fast are you?</ContentDiv>
                            </ItemDiv>
                        </Link>
                    </Col>
                    <Col sm={4}>
                        <ItemDiv>
                            <SvgTwo />
                            <TitleDiv>Input title</TitleDiv>
                            <ContentDiv>Input comments</ContentDiv>
                        </ItemDiv>
                    </Col>
                    <Col sm={4}>
                        <ItemDiv>
                            <SvgThree />
                            <TitleDiv>Input title</TitleDiv>
                            <ContentDiv>Input comments</ContentDiv>
                        </ItemDiv>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <ItemDiv>
                            <SvgOne />
                            <TitleDiv>Input title</TitleDiv>
                            <ContentDiv>Input comments</ContentDiv>
                        </ItemDiv>
                    </Col>
                    <Col sm={4}>
                        <ItemDiv>
                            <SvgOne />
                            <TitleDiv>Input title</TitleDiv>
                            <ContentDiv>Input comments</ContentDiv>
                        </ItemDiv>
                    </Col>
                    <Col sm={4}>
                        <ItemDiv>
                            <SvgOne />
                            <TitleDiv>Input title</TitleDiv>
                            <ContentDiv>Input comments</ContentDiv>
                        </ItemDiv>
                    </Col>
                </Row>
            </ContainerDiv >
        </div>

    );
}

export default Main;