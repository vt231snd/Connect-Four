import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import leaderboardReducer from './leaderboardSlice';

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        leaderboard: leaderboardReducer,
    },
});