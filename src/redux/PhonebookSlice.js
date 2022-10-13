import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../service/contactsApi';



export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async (_, {rejectWithValue}) => {
        try {
             const contacts = await contactsApi.fetchContacts();
             return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
  });
    
  export const removeContact = createAsyncThunk('contacts/removeContact',
    async (contactId, { rejectWithValue, dispatch }) => {
        try {
            const contact = await contactsApi.fetchContactByIdRem(contactId);
            console.log(contact);            

            dispatch(deleteItem(contactId));
            
        } catch (error) {
            return rejectWithValue(error);
        }
    });

    export const addContact = createAsyncThunk('contacts/addContact',
      async (contact, { rejectWithValue, dispatch }) => {
        try {
            const newContact = await contactsApi.fetchContactAdd(contact);
           
            dispatch(addItem(newContact));
            
        } catch (error) {
            return rejectWithValue(error);
        }
    });



export const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,

   },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },    
  },

  extraReducers: {
     [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;      
     },
    [fetchContacts.pending]: state => {
      state.isLoading = true;       
    },
      [fetchContacts.rejected]: (state, action) => {
         state.error = action.payload;
         state.isLoading = false;           
    },
      [removeContact.rejected]: (state, action) => {
         state.error = action.payload;
         state.isLoading = false;           
    },
    
    },
   
});

export const { addItem, deleteItem, updateFilter } = phonebookSlice.actions;