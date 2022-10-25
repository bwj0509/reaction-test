import './App.css';
import ReactionTest from './component/ReactionTest';
import Main from './component/Main';
import Nav from './component/Nav';

import { BrowserRouter, Routes, Route } from 'react-router-dom' // 리액트 라우터 기능 사용

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<><Main /></>}></Route>
        <Route path="/reactiontest" element={<><ReactionTest /></>}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;



