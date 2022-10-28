import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

function Test() {

    const ref = useRef(1)

    const [inputs, setInputs] = useState({
        name:'',
        age:''
    })
    const {name, age} = inputs

    const userId = useRef(5)


    const [users, setUsers] = useState([
      {
        id:1,
        name:'우진',
        age:'26'
      },
      {
        id:2,
        name:'요도',
        age:'26'
      },
      {
        id:3,
        name:'성원',
        age:'30'
      },
      {
        id:4,
        name:'신혜',
        age:'28'
      },
    ])
    


    useEffect(()=>{
      console.log(users)
    },[users])



    const onChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onLogin = ()=>{
        setUsers([...users, {id:userId.current, ...inputs }])
        alert(`${inputs.name}님 환영합니다!`)
        setInputs({
            name:'',
            age:''
        })
        ref.current.focus()
        userId.current +=1
    }

    const onKeyPressEnter =(e) =>{
      if(e.key === 'Enter'){
        onLogin()
      }
    }



  return (
    <div style={{ margin:'auto', marginTop:'50px', padding:'20px' , width:'50vw',height:'50vh', background:'#e1e1e1' }}>
      <input name='name' placeholder='name' onChange={onChange} value={name} ref={ref}></input>
      <input name='age' placeholder='age' onChange={onChange} onKeyPress={onKeyPressEnter} value={age}></input>
      <button onClick={onLogin}>로그인</button>
      <div>이름 : {inputs.name}</div>
      <div>나이 : {inputs.age}</div>
      
    {users.map((user, index)=>(
      <>
        {user.name}{user.id}<button id={user.id} onClick={(e)=>{setUsers(users.filter((user)=>(Number(user.id) !== Number(e.target.id)))) }}>삭제</button><br/>
      </>
    ))}
    </div>
  );
}

export default Test;