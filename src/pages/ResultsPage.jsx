import Button from '../components/Button/Button';

const ResultsPage = ({ onRestart }) => {
    return (
        <div className="page-container">
            <h1>Гра завершена!</h1>
            <p>Переміг: Плейсхолдер Імені</p>
            <Button onClick={onRestart}>Грати знову</Button>
        </div>
    );
};

export default ResultsPage;