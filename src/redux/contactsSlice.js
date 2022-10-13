import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact} from './requestServer';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.isLoading = 'true';
      state.error = 'null';
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = 'false';
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [removeContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [removeContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [removeContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default contactsSlice.reducer;
export const { createContacts, deleteContacts } = contactsSlice.actions;
