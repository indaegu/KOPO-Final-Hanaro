/*eslint-disable*/

// css
import "./style/App.css";

// dependencies
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// pages
import Land from "./pages/Land";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Land />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
