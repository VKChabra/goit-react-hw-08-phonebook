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
import { usersApiSlice } from 'redux/auth/usersApi';
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
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    auth: persistReducer(persistConfig, auth),
    [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
    filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }).concat(contactsApiSlice.middleware, usersApiSlice.middleware),
});

export let persistor = persistStore(store);
