import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/slices/authSlice';
import ajoReducer from '@/store/slices/ajoSlice';
import thriftReducer from '@/store/slices/thriftSlice';

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
