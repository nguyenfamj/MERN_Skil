import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authState {
  user?: null;
  accessToken: string | null;
}

const initialState: authState = { accessToken: null };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { accessToken } }: PayloadAction<{ accessToken: string }>
    ) => {
      state.accessToken = accessToken;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
