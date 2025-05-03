import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function Topbar() {
  return (
    <div className="topbar">
      <div className="window-controls">
        <button className="control-btn close" title="Close"></button>
        <button className="control-btn minimize" title="Minimize"></button>
        <button className="control-btn maximize" title="Maximize"></button>
      </div>
      <div className="topbar-title">Portfolio - Suvansh Choudhary</div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content-area" style={{ width: '100%' }}>
          <Topbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
