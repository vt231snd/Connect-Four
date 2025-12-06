import { useState } from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultsPage from './pages/ResultsPage';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('start');
    const [lastResult, setLastResult] = useState(null);
    const handleStartGame = () => setCurrentPage('game');

    const handleEndGame = (result) => {
        setLastResult(result);
        setCurrentPage('results');
    };

    const handleRestart = () => {
        setLastResult(null);
        setCurrentPage('start');
    };

    return (
        <div className="app">
            {currentPage === 'start' && <StartPage onStart={handleStartGame} />}

            {currentPage === 'game' && <GamePage onEndGame={handleEndGame} />}

            {/* передаємо результат на сторінку підсумків */}
            {currentPage === 'results' && (
                <ResultsPage winner={lastResult} onRestart={handleRestart} />
            )}
        </div>
    );
}

export default App;