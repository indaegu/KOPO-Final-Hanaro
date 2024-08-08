/*eslint-disable*/

// css
import "./style/App.css";

// dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Land from "./pages/Land";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import MyCard from "./pages/MyCard";
import CardFind from "./pages/CardFind";
import BenefitMap from "./pages/BenefitMap";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/mycard" element={<MyCard />} />
        <Route path="/land" element={<Land />} />
        <Route path="/findcard" element={<CardFind />} />
        <Route path="/map" element={<BenefitMap />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
