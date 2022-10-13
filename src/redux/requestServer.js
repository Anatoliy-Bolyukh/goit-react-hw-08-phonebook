import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://633f31c70dbc3309f3c69521.mockapi.io'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function () {
    const response = await axios.get('/contacts');

    const data = response.data;
    
    return data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (text, thunkAPI) => {
    try {
      const r = await axios.post('/contacts', { ...text });
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkAPI) => {
    try {
      const r = await axios.delete(`/contacts/${id}`);
      return r.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);