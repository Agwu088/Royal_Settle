import { useEffect } from 'react';
import { Stack, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from 'react-redux';
import { restoreSession } from '@/store/slices/authSlice';
import * as SecureStore from 'expo-secure-store';
import { Link, router } from 'expo-router';

export default function Layout() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     const checkAuth = async () => {
    //         const token = SecureStore.getItemAsync('accessToken');

    //         if (token) {
    //             dispatch(
    //                 restoreSession({
    //                     accessToken: token,
    //                 })
    //             );
    //         }
    //     };

    //     checkAuth();
    // }, []);

    // const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

    // console.log("IS USER AUTHENTICATED: ", isAuthenticated)

    // if (!isLoading) {
    //     return null;
    // }

    // if (isAuthenticated) {
    //     router.replace("/(dash)/dashboard")
    // }

    // if (isAuthenticated) {
    //     return <Redirect href="/(dash)/dashboard" />;
    // }

    return (
        <>
            <StatusBar style="light" />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(dash)" options={{ headerShown: false }} />
            </Stack>
        </>
    );
}
