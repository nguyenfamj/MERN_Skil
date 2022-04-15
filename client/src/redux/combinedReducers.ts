import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { combineReducers } from '@reduxjs/toolkit';

// Import reducers
import { authApi } from './services/authApi';
import authReducer from './slices/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [authApi.reducerPath],
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);
