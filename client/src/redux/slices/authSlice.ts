import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userResponseModel } from '../../interfaces/apiResponse';
import { LOCAL_STORAGE_TOKEN_NAME } from '../constants/apiConstants';

interface authState {
  user: userResponseModel | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}

const initialState: authState = { user: null, accessToken: null, isAuthenticated: false };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { accessToken } }: PayloadAction<{ accessToken: string }>
    ) => {
      state.accessToken = accessToken;
      state.isAuthenticated = true;
      localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, accessToken);
    },
    setUser: (state, { payload: { user } }: PayloadAction<{ user: userResponseModel }>) => {
      state.isAuthenticated = true;
      state.user = user;
      state.accessToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
    },
  },
});

export const { setCredentials, setUser } = authSlice.actions;
export default authSlice.reducer;
