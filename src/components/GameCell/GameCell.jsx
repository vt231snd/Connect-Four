import styles from './GameCell.module.css';

const GameCell = ({ value, columnIndex }) => {
    return (
        <div className={styles.cellWrapper}>
            <div className={`${styles.cell} ${value ? styles[value] : ''}`}>
                {/* візуально відображатиметься фішка */}
            </div>
        </div>
    );
};

export default GameCell;