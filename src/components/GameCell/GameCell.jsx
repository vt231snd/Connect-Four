import styles from './GameCell.module.css';

const GameCell = ({ value, onClick }) => {
    return (
        <div className={styles.cellWrapper} onClick={onClick}>
            <div className={`${styles.cell} ${value ? styles[value] : ''}`}>
            </div>
        </div>
    );
};

export default GameCell;