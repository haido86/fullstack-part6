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
      console.log('action', action);
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

export const setNotification = (content, duration) => {
  return async (dispatch) => {
    await dispatch(showNotification({ content }));
    setTimeout(() => {
      dispatch(clearNotification());
    }, duration);
  };
};

export default notificationSlice.reducer;
