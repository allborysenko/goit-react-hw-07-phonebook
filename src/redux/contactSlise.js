import { createSlice } from '@reduxjs/toolkit';
import { getContact, createContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [getContact.pending]: handlePending,
    [getContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [createContact.pending]: handlePending,
    [createContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [createContact.rejected]: handleRejected,
  },
  [deleteContact.pending]: handlePending,
  [deleteContact.fulfilled](state, action) {
  
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(
      contact => contact.id === action.payload.id
    );
    state.items.splice(index, 1);
  },
  [deleteContact.rejected]: handleRejected,
});

export const contactReducer = contactSlice.reducer;
