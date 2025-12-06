import { useEffect } from 'react';
import GameBoard from '../components/GameBoard/GameBoard';
import Button from '../components/Button/Button';
import { useConnectFour } from '../hooks/useConnectFour';

const GamePage = ({ onEndGame }) => {
    const { board, currentPlayer, winner, dropChip, resetGame } = useConnectFour();

    useEffect(() => {
        if (winner) {
            const timer = setTimeout(() => {
                onEndGame(winner);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [winner, onEndGame]);

    return (
        <div className="page-container">
            <header>
                {/* динамічне відображення чий хід */}
                <h2>Хід: <span style={{ color: currentPlayer }}>{currentPlayer.toUpperCase()}</span></h2>
            </header>

            {/* передаємо дошку та функцію кліку вниз */}
            <GameBoard board={board} onColumnClick={dropChip} />

            <footer>
                <Button variant="secondary" onClick={() => onEndGame(null)}>
                    Здатися
                </Button>
            </footer>
        </div>
    );
};

export default GamePage;