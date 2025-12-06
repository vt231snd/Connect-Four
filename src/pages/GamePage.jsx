import { useSelector, useDispatch } from 'react-redux';
import { addGameResult } from '../store/leaderboardSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard/GameBoard';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import { useConnectFour } from '../hooks/useConnectFour';
import styles from './GamePage.module.css';

const GamePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const settings = useSelector((state) => state.settings);
    const { board, currentPlayer, winner, dropChip, resetGame } = useConnectFour(settings);

    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (winner) {
            setModalOpen(true);
            const winnerName = winner === 'draw' ? 'Нічия' :
                (winner === 'red' ? settings.player1Name : settings.player2Name);

            dispatch(addGameResult({
                id: Date.now(),
                date: new Date().toISOString(),
                player1: settings.player1Name,
                player2: settings.player2Name,
                winner: winner,
                winnerName: winnerName
            }));
        }
    }, [winner]);

    const handleRestart = () => {
        resetGame();
        setModalOpen(false);
    };

    const handleQuit = () => {
        navigate('/');
    };

    const currentPlayerName = currentPlayer === 'red' ? settings.player1Name : settings.player2Name;
    const winnerName = winner === 'red' ? settings.player1Name : settings.player2Name;

    return (
        <div className={styles.container}>
            {/*  */}
            <div className={styles.sessionId}>
                Session ID: {id}
            </div>

            <header className={styles.header}>
                <div className={styles.playerInfo}>
                    Хід: <span className={`${styles.badge} ${styles[currentPlayer]}`}>{currentPlayerName}</span>
                </div>
                <Button variant="secondary" onClick={handleQuit}>Меню</Button>
            </header>

            <main className={styles.main}>
                <GameBoard board={board} onColumnClick={dropChip} />
            </main>

            <Modal isOpen={isModalOpen} onClose={() => {}}>
                <h2 className={styles.modalTitle}>Гра завершена!</h2>
                {winner === 'draw' ? (
                    <p className={styles.modalText}>Нічия!</p>
                ) : (
                    <p className={styles.modalText}>
                        Переміг <span className={`${styles.winnerName} ${styles[winner]}`}>{winnerName}</span>! 🎉
                    </p>
                )}

                <div className={styles.modalActions}>
                    <Button onClick={handleRestart}>Ще раз</Button>
                    <Button variant="secondary" onClick={handleQuit}>Вихід</Button>
                </div>
            </Modal>
        </div>
    );
};

export default GamePage;