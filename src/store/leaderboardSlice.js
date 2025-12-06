import { createSlice } from '@reduxjs/toolkit';

const loadHistory = () => {
    const saved = localStorage.getItem('gameHistory');
    return saved ? JSON.parse(saved) : [];
};

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState: {
        history: loadHistory()
    },
    reducers: {
        addGameResult: (state, action) => {
            state.history.unshift(action.payload);

            localStorage.setItem('gameHistory', JSON.stringify(state.history));
        },
        clearHistory: (state) => {
            state.history = [];
            localStorage.removeItem('gameHistory');
        }
    }
});

export const { addGameResult, clearHistory } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;