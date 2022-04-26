import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { userResponseModel } from '../../interfaces/authApiResponse';

interface authState {
  user: userResponseModel;
  accessToken: string | null;
  isAuthenticated: boolean;
}

const initialState: authState = {
  user: { __v: 0, _id: '', firstname: '', lastname: '', username: '', createdAt: new Date() },
  accessToken: null,
  isAuthenticated: false,
};

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
    },
    setUser: (state, { payload: { user } }: PayloadAction<{ user: userResponseModel }>) => {
      state.isAuthenticated = true;
      state.user = user;
    },
    logout: (state) => {
      state = initialState;
      storage.removeItem('persist:root');
      storage.removeItem('persist:auth');
    },
  },
});

export const { setCredentials, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
