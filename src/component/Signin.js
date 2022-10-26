import React, { useState } from 'react';
import styled from 'styled-components'; // styled components 사용 -> CSS in Js
import { useDispatch, useSelector } from 'react-redux';

const Backgrounddiv = styled.div` // styled components를 사용하여 div를 만듬
background-color: rgb(230, 232, 244);
    margin:0px;
    width:100vw;
    height:100vh;
    
    display : flex;
    align-items: center;
    justify-content: center;
    position :relative;

    ::before {
      
        margin:0px;
        width:100vw;
        height:100vh;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
        position :absolute;
        content: "";
        filter: blur(4px); 
        transform: scale(1.1); //가장자리 안보이게 하기
  }
    
`;


const CardWrapper = styled.div`
  overflow: hidden;
  background-color: #ffffff;
  margin: auto;
  width: 500px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 80), 0 0px 40px rgba(0, 0, 0, 0.01);
  border-radius: 16px;
  color : black;

`;

const CardHeader = styled.header`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const CardHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

const CardBody = styled.div`

  padding-right: 50px;
  padding-left: 50px;

`;

const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 30px;
  }

  &:nth-last-of-type(2) {
    margin-top: 16px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

const CardInput = styled.input`
  text-align:left;
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }


`;
const CardOptionsNote = styled.small`
  padding-top: 15px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

const CardButton = styled.button`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #5d64c6;
  border: 0;
  border-radius: 16px;
  height: 60px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const CardLink = styled.a`
  color: black;
  margin: 5px;
  margin-bottom: 20px;
  display: inline-block;
  font-size: 15px;
  text-decoration: none;
  border-bottom: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #5d64c6;
  }
`;





function Signin() {



  const regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/; //비밀번호 정규식


  const dispatch = useDispatch()  // useDispatch를 이용해 reducer로 action을 보낸다.
  const state = useSelector((state) => state) // useSelector를 이용해 state값을 사용 할 수 있게 한다

  // useEffect(() => {
  //     console.log(state)
  // }, [state]) // 의존성 배열에 state를 넣어서 state값이 바뀔때마다 state값을 보여준다. state를 통해서 USER가 등록되었는지 확인 가능하다.


  const [inputs, setInputs] = useState({
      email: '',
      password: '',
      checkPassword: '',
      name: '',
  })

  const { email, password, checkPassword, name } = inputs // 구조분해할당

  const onChange = (e) => {
      const { name, value } = e.target
      setInputs({
          ...inputs,
          [name]: value
      })
  }

  // const onBlur =()=>{
  //     dispatch({type:'CHECKID', data:id})
  // }

  const onSummit = () => {


    
  }








  return (
    <Backgrounddiv>
    <CardWrapper>
        <CardHeader>
            <CardHeading>Sign in</CardHeading>
        </CardHeader>
        <CardBody>

            <CardFieldset>
                <CardInput
                    placeholder="E-mail"
                    type="text"
                    onChange={onChange}
                    name="email"
                    value={email}
                    required />

                {inputs.email.indexOf('@') < 0 && inputs.email.length > 0 && <span style={{ color: 'red' }}>Doesn't fit the email format<br /></span>}
                {/* 이메일 형식 안맞으면 오류메세지 코드 작성 부분 */}
            </CardFieldset>
            <CardFieldset>
                <CardInput
                    placeholder="Password"
                    type="password"
                    onChange={onChange}
                    name="password"
                    value={password}
                    required />
                <CardIcon className="fa fa-eye" eye small />
                {!regPass.test(password) && inputs.password.length > 0 && <span style={{ color: 'red' }}>Password must be at least 8 characters including English and special characters and numbers<br /></span>}
                {regPass.test(password) && <span style={{ color: 'black' }}>GOOD!<br /></span>}

                {/* 비밀번호 자리수가 8자리 이후면 오류 메세지 출력 */}
            </CardFieldset>

            <CardFieldset>
                <CardInput
                    placeholder="Confirm Password"
                    type="password"
                    onChange={onChange}
                    name="checkPassword"
                    value={checkPassword}
                    required />
                <CardIcon className="fa fa-eye" eye small />
            </CardFieldset>
            {inputs.password !== inputs.checkPassword && inputs.checkPassword.length > 0 && <span style={{ color: 'red' }}>Mismatched passwords<br /></span>}
            {/* 확인비밀번호와 비밀번호가 일치하지 않으면 오류 메세지 출력 */}


            <CardFieldset>
                <CardInput
                    placeholder="Name"
                    type="text"
                    onChange={onChange}
                    name="name"
                    value={name}
                    required />
            </CardFieldset>

            <CardFieldset>
                <CardButton type="button " onClick={onSummit}>Sign Up</CardButton>
            </CardFieldset>
            <hr />
            <CardFieldset>
                <CardLink href="/login">I already have an account</CardLink>
            </CardFieldset>
        </CardBody>
    </CardWrapper>
</Backgrounddiv>
    )
}

export default Signin;
