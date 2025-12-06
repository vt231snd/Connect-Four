import Button from '../components/Button/Button';

const StartPage = ({ onStart, onSettings }) => {
    return (
        <div className="page-container">
            <h1 style={{ fontSize: '3rem', color: '#3742fa', marginBottom: '0' }}>Connect Four</h1>

            <div style={{ display: 'flex', gap: '15px' }}>
                <Button onClick={onStart}>Почати гру</Button>
                <Button variant="secondary" onClick={onSettings}>Налаштування</Button>
            </div>
        </div>
    );
};

export default StartPage;