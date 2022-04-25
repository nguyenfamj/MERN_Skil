import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { combineReducers } from '@reduxjs/toolkit';

// Import reducers
import { authApi } from './services/authApi';
import authReducer from './slices/authSlice';
import { skillApi } from './services/skillApi';
import appReducer from './slices/appSlice';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [authApi.reducerPath, skillApi.reducerPath, 'app'],
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: persistReducer(authPersistConfig, authReducer),
  [skillApi.reducerPath]: skillApi.reducer,
  app: appReducer,
});

export const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);
