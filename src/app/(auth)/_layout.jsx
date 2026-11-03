import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
    return (
        <>
            <StatusBar style="light" />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="verify" options={{ headerShown: false }} />
                <Stack.Screen name="phonNo" options={{ headerShown: false }} />
                <Stack.Screen name="verifyPhoneNo" options={{ headerShown: false }} />
                <Stack.Screen name="signup" options={{ headerShown: false }} />
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="welcomeBck" options={{ headerShown: false }} />
                <Stack.Screen name="setPin" options={{ headerShown: false }} />
                <Stack.Screen name="plan" options={{ headerShown: false }} />
            </Stack>
        </>
    );
}
