import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlise';
import { filterSlice } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
  filter: filterSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
