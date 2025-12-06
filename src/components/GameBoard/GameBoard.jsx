import GameCell from '../GameCell/GameCell';
import styles from './GameBoard.module.css';

const ROWS = 6;
const COLS = 7;

const GameBoard = () => {
    const grid = Array(ROWS).fill(Array(COLS).fill(null));

    return (
        <div className={styles.board}>
            {grid.map((row, rIndex) => (
                <div key={rIndex} className={styles.row}>
                    {row.map((_, cIndex) => (
                        <GameCell key={`${rIndex}-${cIndex}`} columnIndex={cIndex} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GameBoard;