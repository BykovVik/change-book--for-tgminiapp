import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/game' element={<GamePage />} />
                <Route path='/result' element={<ResultPage />} />
            </Routes>
        </Router>
    );
  }

export default App;
