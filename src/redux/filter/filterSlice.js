import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterValue: '',
};

const contactsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
