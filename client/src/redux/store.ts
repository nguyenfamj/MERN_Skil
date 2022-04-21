import { configureStore } from '@reduxjs/toolkit';

// Import reducer
import { authApi } from './services/authApi';
import { skillApi } from './services/skillApi';
import { persistedRootReducer } from './combinedReducers';

export const store = configureStore({
  reducer: persistedRootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(authApi.middleware)
      .concat(skillApi.middleware),
});

// Export the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
