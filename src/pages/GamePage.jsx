import { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard/GameBoard';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import { useConnectFour } from '../hooks/useConnectFour';
import styles from './GamePage.module.css';

const GamePage = ({ onQuitGame }) => {

    const { board, currentPlayer, winner, dropChip, resetGame, settings } = useConnectFour();
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (winner) setModalOpen(true);
    }, [winner]);

    const handleRestart = () => {
        resetGame();
        setModalOpen(false);
    };

    const currentPlayerName = currentPlayer === 'red' ? settings.player1Name : settings.player2Name;
    const winnerName = winner === 'red' ? settings.player1Name : settings.player2Name;

    return (
        <div className="page-container">
            <header className={styles.header}>
                <div className={styles.playerInfo}>
                    Хід: <span className={`${styles.badge} ${styles[currentPlayer]}`}>{currentPlayerName}</span>
                </div>
                <Button variant="secondary" onClick={onQuitGame}>Меню</Button>
            </header>

            <main className={styles.main}>
                <GameBoard board={board} onColumnClick={dropChip} />
            </main>

            <Modal isOpen={isModalOpen} onClose={() => {}}>
                <h2 className={styles.modalTitle}>Гра завершена!</h2>

                {winner === 'draw' ? (
                    <p className={styles.modalText}>Нічия! Спробуйте ще раз.</p>
                ) : (
                    <p className={styles.modalText}>
                        Переміг <span className={`${styles.winnerName} ${styles[winner]}`}>{winnerName}</span>! 🎉
                    </p>
                )}

                <div className={styles.modalActions}>
                    <Button onClick={handleRestart}>Грати знову</Button>
                    <Button variant="secondary" onClick={onQuitGame}>Вихід</Button>
                </div>
            </Modal>
        </div>
    );
};

export default GamePage;