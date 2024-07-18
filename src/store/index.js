import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './LeaderboardSlice';

const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer
  }
});

export default store;
