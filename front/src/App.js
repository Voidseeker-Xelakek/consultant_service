import InvestCalc from "./components/InvestCalc";
import React, { useState } from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/calculator" element={<InvestCalc />} />\
        </Routes>
      </Router>
    </div>
  );
}

export default App;
