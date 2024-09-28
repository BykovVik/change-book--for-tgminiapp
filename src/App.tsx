import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import DescriptionPage from './pages/DescriptionPage';

function App() {
    return (
        <Router basename={'/github-page-for-tg-change-book'}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/game' element={<GamePage />} />
                <Route path='/result' element={<ResultPage />} />
                <Route path='/description' element={<DescriptionPage/>} />
            </Routes>
        </Router>
    );
  }

export default App;
