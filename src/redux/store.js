import { configureStore } from '@reduxjs/toolkit';
import filter from 'redux/filter/filterSlice';
import { contactsApiSlice } from 'redux/contactsApi';
import { usersApiSlice } from 'redux/auth/usersApi';

export const store = configureStore({
  reducer: {
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
    filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      contactsApiSlice.middleware,
      usersApiSlice.middleware
    ),
});

export default store;
