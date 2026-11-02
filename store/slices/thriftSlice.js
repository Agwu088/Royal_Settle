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

export const createThrift = createAsyncThunk("/thrift/create",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/thrift/create`, formData);
            return response.data;
        } catch (err) {
            const message = err.response?.data || "Something went wrong during thrift creation";
            return rejectWithValue(message);
        }
    }
);

export const sendThrift = createAsyncThunk("/thrift/send",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/thrift/send`, formData, {
                withCredentials: true
            });
            return response.data
        } catch (err) {
            const message = err.response?.data || "Something went wrong while sending thrift";
            return rejectWithValue(message);
        }
    }
);

export const reconcileThrift = createAsyncThunk("/thrift/reconcile",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/thrift/reconcile`, formData, {
                withCredentials: true
            });
            return response.data
        } catch (err) {
            const message = err.response?.data || "Something went wrong while reconciling thrift";
            return rejectWithValue(message);
        }
    }
);

export const getPlan = createAsyncThunk("/thrift/getPlan/planId",
    async ({ rejectWithValue }) => {
        const planId = 1
        try {
            const token = await SecureStore.getItemAsync('accessToken');

            if (!token) {
                return rejectWithValue("Authentication token not found.");
            }
            const response = await axios.get(`${BASE_URL}/thrift/getPlan/${planId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data
        } catch (err) {
            const message = err.response?.data || "Something went wrong while trying to retrieve thrift plan";
            return rejectWithValue(message);
        }
    }
);

export const getAllPlan = createAsyncThunk("/thrift/getAllPlan",
    async ({ rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/thrift/getAllPlan`, {
                withCredentials: true
            });
            return response.data;
        } catch (err) {
            const message = err.response?.data || "Something went wrong while retrieving all thrift plan";
            return rejectWithValue(message);
        }
    }
);

const thriftSlice = createSlice({
    name: "thrift",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createThrift.pending, (state) => {
            state.isLoading = true;
        }).addCase(createThrift.fulfilled, (state) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(createThrift.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(sendThrift.pending, (state) => {
            state.isLoading = true;
        }).addCase(sendThrift.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(sendThrift.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(reconcileThrift.pending, (state) => {
            state.isLoading = true;
        }).addCase(reconcileThrift.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(reconcileThrift.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(getPlan.pending, (state) => {
            state.isLoading = true;
        }).addCase(getPlan.fulfilled, (state) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(getPlan.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(getAllPlan.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllPlan.fulfilled, (state) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(getAllPlan.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export const { restoreSession } = thriftSlice.actions;
export default thriftSlice.reducer;
