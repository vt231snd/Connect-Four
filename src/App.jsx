import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="app-layout">
                <Routes>
                    {/* головна сторінка */}
                    <Route path="/" element={<StartPage />} />

                    {/* сторінка налаштувань */}
                    <Route path="/settings" element={<SettingsPage />} />

                    {/* динамічний роут з ID сесії/користувача */}
                    <Route path="/game/:id" element={<GamePage />} />

                    {/* редірект, якщо сторінка не знайдена */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;