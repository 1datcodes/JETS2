// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.js';
import About from './About.js';
import WithFade from './WithFade.js';
import './App.css';

const FadedHomePage = WithFade(HomePage);
const FadedAboutPage = WithFade(About);

function App() {
  return (
    <Router>
      <div className="App fade-in">
        <Routes>
          <Route path="/" element={<FadedHomePage />} />
          <Route path="/home" element={<FadedHomePage />} />
          <Route path="/about" element={<FadedAboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
