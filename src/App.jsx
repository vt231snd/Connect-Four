import { useState } from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultsPage from './pages/ResultsPage';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('start');

    const handleStartGame = () => setCurrentPage('game');
    const handleEndGame = () => setCurrentPage('results');
    const handleRestart = () => setCurrentPage('start');

    return (
        <div className="app">
            {currentPage === 'start' && <StartPage onStart={handleStartGame} />}
            {currentPage === 'game' && <GamePage onEndGame={handleEndGame} />}
            {currentPage === 'results' && <ResultsPage onRestart={handleRestart} />}
        </div>
    );
}

export default App;