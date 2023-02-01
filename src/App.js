import "./App.css";
import Nav from "./component/Nav/Nav";
// import Result from "./component/Result";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "pages/Landing";
import ReactionTest from "pages/ReactionTest";
import NotFound from "pages/NotFound";
import Result from "pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/reactiontest" element={<ReactionTest />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
