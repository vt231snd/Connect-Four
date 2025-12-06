import { useState } from 'react';
import GameBoard from '../components/GameBoard/GameBoard';
import Button from '../components/Button/Button';

const GamePage = ({ onEndGame }) => {
    const [currentPlayer, setCurrentPlayer] = useState('Гравець 1');
    const [score, setScore] = useState({ p1: 0, p2: 0 });

    return (
        <div className="page-container">
            <header>
                <h2>Хід гравця: {currentPlayer}</h2>
                <div className="score">Рахунок: {score.p1} : {score.p2}</div>
            </header>

            <GameBoard />

            <footer>
                <Button variant="secondary" onClick={onEndGame}>Здатися / Завершити</Button>
            </footer>
        </div>
    );
};

export default GamePage;