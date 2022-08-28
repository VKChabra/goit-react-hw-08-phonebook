import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApiSlice = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fcd44bb9e38585cd46d946.mockapi.io/',
  }),
  tagTypes: ['Post, Patch, Delete'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Post', 'Patch', 'Delete'],
    }),
    addContact: builder.mutation({
      query: prevContacts => ({
        url: 'contacts',
        method: 'POST',
        body: prevContacts,
      }),
      invalidatesTags: ['Post'],
    }),
    editContact: builder.mutation({
      query: (contactId, prevContacts) => ({
        url: `contacts/${contactId}`,
        method: 'PATCH',
        body: prevContacts,
      }),
      invalidatesTags: ['Patch'],
    }),
    deleteContact: builder.mutation({
      query: (contactId, prevContacts) => ({
        url: `contacts/${contactId}`,
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
