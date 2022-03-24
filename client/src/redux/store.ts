import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({ reducer: {} });

// Export the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
