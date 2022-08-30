import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PERSIST,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filter from 'redux/filter/filterSlice';
import { contactsApiSlice } from 'redux/contactsApi';
import { authApiSlice } from 'redux/auth/authApi';
import auth from 'redux/auth/authSlice';

export const PERSISTED_AUTH = 'auth';

const persistConfig = {
  key: PERSISTED_AUTH,
  version: 1,
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    auth: persistReducer(persistConfig, auth),
    [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
    filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }).concat(authApiSlice.middleware, contactsApiSlice.middleware),
});

export let persistor = persistStore(store);
