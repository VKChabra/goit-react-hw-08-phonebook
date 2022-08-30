import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: {
          data: { user, token },
        },
      }
    ) => {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    clearCredentials: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    refetchUser: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export const { setCredentials, clearCredentials, refetchUser } =
  authSlice.actions;
export default authSlice.reducer;
