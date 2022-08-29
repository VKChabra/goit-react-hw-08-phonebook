import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApiSlice = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    signup: builder.mutation({
      query: credentials => ({
        url: 'signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: credentials => ({
        url: 'logout',
        method: 'POST',
        header: credentials,
      }),
    }),
    userInfo: builder.query({
      query: token => ({
        url: 'current',
        method: 'GET',
        header: token,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useUserInfoQuery,
} = usersApiSlice;
