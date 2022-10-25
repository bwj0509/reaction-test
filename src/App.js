import './App.css';
import ReactionTest from './component/ReactionTest';
import Main from './component/Main';
import Nav from './component/Nav';
import NotFound from './component/NotFound';
import Result from './component/Result';

import { BrowserRouter, Routes, Route } from 'react-router-dom' // 리액트 라우터 기능 사용

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<><Main /></>}></Route>
        {localStorage.getItem('id')
          ? <Route path="/reactiontest" element={<><ReactionTest /></>}></Route>
          : <Route path="/login" element={<><ReactionTest /></>}></Route>
        }
        <Route path="/result" element={<><Result></Result></>}></Route>
        <Route path="*" element={<><NotFound></NotFound></>}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;



