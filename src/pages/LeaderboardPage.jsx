import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearHistory } from '../store/leaderboardSlice';
import Button from '../components/Button/Button';
import styles from './LeaderboardPage.module.css';

const LeaderboardPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const history = useSelector((state) => state.leaderboard.history);

    return (
        <div className="page-container">
            <h2>Таблиця результатів</h2>

            {history.length === 0 ? (
                <p>Історія ігор порожня. Зіграйте першу гру!</p>
            ) : (
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Гравець 1</th>
                        <th>Гравець 2</th>
                        <th>Переможець</th>
                    </tr>
                    </thead>
                    <tbody>
                    {history.map((game) => (
                        <tr key={game.id}>
                            <td>{new Date(game.date).toLocaleString()}</td>
                            <td>{game.player1}</td>
                            <td>{game.player2}</td>
                            <td className={game.winner === 'draw' ? styles.draw : styles.winner}>
                                {game.winnerName}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <Button onClick={() => navigate('/')}>На головну</Button>
                {history.length > 0 && (
                    <Button variant="secondary" onClick={() => dispatch(clearHistory())}>
                        Очистити історію
                    </Button>
                )}
            </div>
        </div>
    );
};

export default LeaderboardPage;