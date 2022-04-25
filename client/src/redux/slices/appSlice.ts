import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface appState {
  notification: { title: string; message: string };
}

const initialState: appState = { notification: { title: '', message: '' } };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNotification: (
      state,
      { payload: { title, message } }: PayloadAction<{ title: string; message: string }>
    ) => {
      state.notification.title = title;
      state.notification.message = message;
    },
  },
});

export const { setNotification } = appSlice.actions;
export default appSlice.reducer;
