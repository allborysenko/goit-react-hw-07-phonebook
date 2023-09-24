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
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContact.pending, handlePending)
      .addCase(getContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(createContact.pending, handlePending)
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(createContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedItems = state.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.items = updatedItems;
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
