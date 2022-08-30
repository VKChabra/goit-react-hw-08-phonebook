import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApiSlice = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/contacts',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Post, Patch, Delete'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '',
      providesTags: ['Post', 'Patch', 'Delete'],
    }),
    addContact: builder.mutation({
      query: prevContacts => ({
        url: '',
        method: 'POST',
        body: prevContacts,
      }),
      invalidatesTags: ['Post'],
    }),
    editContact: builder.mutation({
      query: (contactId, prevContacts) => ({
        url: `/${contactId}`,
        method: 'PATCH',
        body: prevContacts,
      }),
      invalidatesTags: ['Patch'],
    }),
    deleteContact: builder.mutation({
      query: (contactId, prevContacts) => ({
        url: `/${contactId}`,
        method: 'DELETE',
        body: prevContacts,
      }),
      invalidatesTags: ['Delete'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useEditContactMutation,
  useDeleteContactMutation,
} = contactsApiSlice;
