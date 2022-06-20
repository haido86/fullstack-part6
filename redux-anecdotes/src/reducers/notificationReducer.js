import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
  isShow: false,
};
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.content = action.payload.content;
      state.isShow = true;
    },
    clearNotification(state, action) {
      state.isShow = false;
    },
  },
});

export const { showNotification, clearNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
