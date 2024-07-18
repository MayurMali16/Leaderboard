import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { username: 'Anjum', score: '00:56:23:000' },
  { username: 'Pragati Azad', score: '00:56:23:000' },
  { username: 'Pragati Azad', score: '00:56:23:000' },
  { username: 'Hannibal Hector', score: '00:56:23:000' },
  { username: 'Razzi', score: '00:56:23:000' },
  { username: 'McRamble', score: '00:56:23:000' },
  { username: 'Razzi', score: '00:56:23:000' },
  { username: 'McRamble', score: '00:56:23:000' },
  { username: 'Muhammed Anjum Kunnummal', score: '00:56:23:000' },
  { username: 'Muhammed Anjum Kunnummal', score: '00:56:23:000' },
  { username: 'Sahil Arora', score: '03:34:12:000' }
];

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.push(action.payload);
      state.sort((a, b) => a.score.localeCompare(b.score));
    }
  }
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
