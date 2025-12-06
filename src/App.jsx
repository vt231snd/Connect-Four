import { useState } from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('start');

    const navigateTo = (page) => setCurrentPage(page);

    return (
        <div className="app">
            {currentPage === 'start' && (
                <StartPage
                    onStart={() => navigateTo('game')}
                    onSettings={() => navigateTo('settings')}
                />
            )}

            {currentPage === 'game' && (
                <GamePage
                    onQuitGame={() => navigateTo('start')}
                />
            )}

            {currentPage === 'settings' && (
                <SettingsPage
                    onBack={() => navigateTo('start')}
                />
            )}
        </div>
    );
}

export default App;