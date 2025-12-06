import { createSlice } from '@reduxjs/toolkit';

const loadFromStorage = () => {
    try {
        const saved = localStorage.getItem('gameSettings');
        const parsed = saved ? JSON.parse(saved) : {};

        return {
            player1Name: 'Player 1',
            player2Name: 'Player 2',
            winCondition: 4,
            theme: 'light',
            ...parsed
        };
    } catch (e) {
        return {
            player1Name: 'Player 1',
            player2Name: 'Player 2',
            winCondition: 4,
            theme: 'light'
        };
    }
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState: loadFromStorage(),
    reducers: {
        updateSettings: (state, action) => {
            state.player1Name = action.payload.player1Name;
            state.player2Name = action.payload.player2Name;
            state.winCondition = parseInt(action.payload.winCondition, 10);

            localStorage.setItem('gameSettings', JSON.stringify(state));
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('gameSettings', JSON.stringify(state));
        }
    }
});

export const { updateSettings, toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;