import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';

const StartPage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        const sessionId = `session-${Date.now()}`;
        navigate(`/game/${sessionId}`);
    };

    const handleSettings = () => {
        navigate('/settings');
    };

    return (
        <div className="page-container">
            <h1 style={{ fontSize: '3rem', color: '#3742fa', marginBottom: '0' }}>Connect Four</h1>

            <div style={{ display: 'flex', gap: '15px' }}>
                <Button onClick={handleStart}>Почати гру</Button>
                <Button variant="secondary" onClick={handleSettings}>Налаштування</Button>
                <Button variant="secondary" onClick={() => navigate('/leaderboard')}>Таблиця лідерів</Button>
            </div>
        </div>
    );
};

export default StartPage;