// dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Land from "./pages/Land";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// page wrapper
import PageWrapper from "./components/PageWrapper"; // 추가

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <PageWrapper>
              <Login />
            </PageWrapper>
          }
        />
        <Route
          path="/"
          element={
            <PageWrapper>
              <Land />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
