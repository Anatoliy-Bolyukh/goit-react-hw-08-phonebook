import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};


const register = createAsyncThunk('auth/register',
    async (credentials, { rejectWithValue })  => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token); 
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    });

const logIn = createAsyncThunk('auth/login',
    async (credentials, { rejectWithValue })  => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;            
        } catch (error) {
            return rejectWithValue(error);
        }
    });

const logOut = createAsyncThunk('/users/logout',
    async () => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            
        }
    });

const fetchCurrentUser = createAsyncThunk('auth/refresh',
    async (_, { getState, rejectWithValue }) => {
        const state = getState();
        const persistedToken = state.auth.token;
        
        if (persistedToken === null) {
            return rejectWithValue();
        };
        
        token.set(persistedToken);
        try {
            const {data} = await axios.get('/users/current');
            return data;
        } catch (error) {
            
        };
    });



const authOperations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
};

export default authOperations;


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    error: null,
    isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [register.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoggedIn = false;
        },
        [logIn.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoggedIn = false;
        },
        [logOut.fulfilled]: (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [fetchCurrentUser.pending]: (state) => {
            state.isFetchingCurrentUser = true;
        },
        [fetchCurrentUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [fetchCurrentUser.rejected]: (state) => {
            state.isFetchingCurrentUser = false;
        },
        
    },
});
