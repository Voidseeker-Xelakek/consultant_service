import Calculator from "./components/Calculator";
import React, { useState } from "react";
import App from "./components/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function Main() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
