import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const initialState = {
    data: null,
    isLoading: false,
    error: null,
};

if (!BASE_URL) {
    console.warn('[loginSlice] EXPO_PUBLIC_BASE_URL is not defined. Check your .env file.');
}

export const createAjo = createAsyncThunk("/ajo/create",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/ajo/create`, formData);
            return response.data;
        } catch (err) {
            const message = err.response?.data || "Something went wrong during registration";
            return rejectWithValue(message);
        }
    }
);

export const joinAjo = createAsyncThunk("/ajo/join",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/ajo/join`, formData, {
                withCredentials: true
            });
            return response.data
        } catch (err) {
            const message = err.response?.data || "Something went wrong while joining contribution";
            return rejectWithValue(message);
        }
    }
);

export const getAjo = createAsyncThunk("/ajo/ajoId",
    async ({ rejectWithValue }) => {
        const ajoId = 1
        try {
            const token = await SecureStore.getItemAsync('accessToken');

            if (!token) {
                return rejectWithValue("Authentication token not found.");
            }
            const response = await axios.get(`${BASE_URL}/ajo/${ajoId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data
        } catch (err) {
            const message = err.response?.data || "Something went wrong during registration";
            return rejectWithValue(message);
        }
    }
);

export const getAllAjo = createAsyncThunk("/ajo/getAllMyAjos",
    async ({ rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/ajo/getAllMyAjos`, {
                withCredentials: true
            });
            return response.data;
        } catch (err) {
            const message = err.response?.data || "Something went wrong while retrieving contributions";
            return rejectWithValue(message);
        }
    }
);

const ajoSlice = createSlice({
    name: "ajo",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createAjo.pending, (state) => {
            state.isLoading = true;
        }).addCase(createAjo.fulfilled, (state) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(createAjo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(joinAjo.pending, (state) => {
            state.isLoading = true;
        }).addCase(joinAjo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(joinAjo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(getAjo.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAjo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(getAjo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(getAllAjo.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllAjo.fulfilled, (state) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(getAllAjo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export const { restoreSession } = ajoSlice.actions;
export default ajoSlice.reducer;
