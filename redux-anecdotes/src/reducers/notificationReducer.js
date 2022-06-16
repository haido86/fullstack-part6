import { createSlice } from '@reduxjs/toolkit';

// const getId = () => (100000 * Math.random()).toFixed(0);

const initialState = [
  {
    content: 'this is the first notification',
    // id: getId(),
  },
];

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  //   reducers: {},
});

// export const { addVote, newAnecdote } = notificationSlice.actions;
export default notificationSlice.reducer;
