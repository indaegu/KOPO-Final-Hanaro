/*eslint-disable*/

// css
import "./style/App.css";

// dependencies
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// pages
import Land from "./pages/Land";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation(); // 현재 위치를 확인하기 위해 useLocation 사용

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300} // 전환 지속 시간
          classNames="page-enter" // CSS 클래스 이름
        >
          <Routes location={location}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Land />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
