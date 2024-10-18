import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Home from "./components/Home";
import Level from "./components/Level";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/level/:levelNumber" element={<Level />} />
      </Routes>
    </Router>
  );
};

export default App;
