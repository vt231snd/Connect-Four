import Button from '../components/Button/Button';

const StartPage = ({ onStart }) => {
    return (
        <div className="page-container">
            <h1>Connect Four</h1>
            <p>Класична гра для двох гравців</p>
            <Button onClick={onStart}>Почати Гру</Button>
        </div>
    );
};

export default StartPage;