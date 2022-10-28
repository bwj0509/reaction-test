import './App.css';
import ReactionTest from './component/ReactionTest';
import Main from './component/Main';
import Nav from './component/Nav';
import NotFound from './component/NotFound';
import Result from './component/Result';
import Login from './component/Login';
import Signin from './component/Signin';
import Test from './component/Test';

import { BrowserRouter, Routes, Route } from 'react-router-dom' // 리액트 라우터 기능 사용

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<><Main /></>}></Route>
        {localStorage.getItem('email')
          ? <Route path="/reactiontest" element={<><ReactionTest /></>}></Route>
          : <Route path="/login" element={<><Login></Login></>}></Route>
        }
        <Route path="/result" element={<><Result></Result></>}></Route>
        <Route path="/signin" element={<><Signin></Signin></>}></Route>
        <Route path="/signin" element={<><Signin></Signin></>}></Route>
        <Route path="/test" element={<><Test></Test></>}></Route>
        
        <Route path="*" element={<><NotFound></NotFound></>}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;



