import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
    // ...
  },
});

export const {
  createContact,
  deleteContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactSlice.actions;
// // Виконається в момент старту HTTP-запиту
// fetchingInProgress(state) {
//   state.isLoading = true;

// },
// // Виконається якщо HTTP-запит завершився успішно
// fetchingSuccess(state, action) {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// },
// // Виконається якщо HTTP-запит завершився з помилкою
// fetchingError(state, action) {
//   state.isLoading = false;
//   state.error = action.payload;
// },
