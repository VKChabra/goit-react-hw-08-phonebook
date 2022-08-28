import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  setCredentials: (state, { payload: { user, token } }) => {
    state.user = user;
    state.token = token;
  },
});

export const { setCredentials } = authSlice.actions;
