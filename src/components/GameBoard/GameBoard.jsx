import GameCell from '../GameCell/GameCell';
import styles from './GameBoard.module.css';

const GameBoard = ({ board, onColumnClick }) => {
    return (
        <div className={styles.board}>
            {board.map((row, rIndex) => (
                <div key={rIndex} className={styles.row}>
                    {row.map((cellValue, cIndex) => (
                        <GameCell
                            key={`${rIndex}-${cIndex}`}
                            value={cellValue}
                            onClick={() => onColumnClick(cIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GameBoard;