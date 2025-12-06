import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import SettingsPage from './pages/SettingsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import './App.css';

function App() {
    const theme = useSelector((state) => state.settings.theme);

    useEffect(() => {
        const currentTheme = theme || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [theme]);

    return (
        <BrowserRouter>
            <div className="app-layout">
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/leaderboard" element={<LeaderboardPage />} />
                    <Route path="/game/:id" element={<GamePage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;