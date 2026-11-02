import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ajoReducer from './slices/ajoSlice';
import thriftReducer from './slices/thriftSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        ajo: ajoReducer,
        thrift: thriftReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
