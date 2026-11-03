import { Text, View } from 'react-native';
import Header from '@/components/Header';
import { SafeAreaView } from "react-native-safe-area-context";
import CommonForm from '@/components/Form';
import { loginFormControls } from '@/config';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/slices/authSlice';
import Toast from 'react-native-toast-message';
import * as SecureStore from 'expo-secure-store';

const initialState = {
    username: "",
    password: "",
};

export default function Login() {
    const privacyPolicy = "By signing in to this app you agree with our Terms of Use and Privacy Policy.";
    const [formData, setFormData] = useState(initialState);
    const isLoading = useSelector((state) => state.auth.isLoading);
    const dispatch = useDispatch();

    const onSubmit = () => {
        router.replace("/dashboard")
        // const { username, password } = formData;

        // if (!username) {
        //     Toast.show({
        //         type: 'error',
        //         text1: 'Email is required',
        //     });
        //     return;
        // }

        // if (!password) {
        //     Toast.show({
        //         type: 'error',
        //         text1: 'Password is required',
        //     });
        //     return;
        // }

        // dispatch(login(formData))
        //     .then((res) => {
        //         if (res?.payload?.requestSuccessful === true) {
        //             SecureStore.setItemAsync('accessToken', res?.payload?.responseBody.accessToken);
        //             SecureStore.setItemAsync('refreshToken', res?.payload?.responseBody.refreshToken);
        //             router.replace("/dashboard")
        //         } else if (res?.meta?.requestStatus === 'rejected') {
        //             throw new Error(res?.payload?.responseMessage || "Login failed");
        //         } else {
        //             throw new Error("Login failed");
        //         };
        //     }).catch((err) => {
        //         Toast.show({
        //             type: 'error',
        //             text1: err.message,
        //         });
        //     })
    }

    return (
        <SafeAreaView className="flex-1 bg-[#240046]">
            <Header />
            <View className="flex-1 px-[4%] pb-6">
                <View className="flex-1">
                    <Text className="text-white text-[40px] font-medium leading-tight mt-4">Welcome</Text>
                    <Text className="text-white text-[14px] font-inter mt-4">Your community is your greatest financial asset Royalsettle helps you unlock it..</Text>
                    <Text className="text-[#B199CE] font-[600] absolute top-[43%] right-[2%]">Forgot Password?</Text>
                    <Text className="text-white text-[14px] font-inter mt-4 absolute top-[88%]">Don't have an account?{" "}
                        <Link href="/(auth)">
                            <Text className="text-[#fea01c] font-[600]">
                                Sign Up
                            </Text>
                        </Link>
                    </Text>

                    <View className="mt-8 h-full">
                        <CommonForm
                            formControls={loginFormControls}
                            buttonText={"Login"}
                            formData={formData}
                            setFormData={setFormData}
                            isLoading={isLoading}
                            onSubmit={onSubmit}
                        />
                    </View>
                </View>
                <Text className="text-white text-center text-[14px] font-[400] font-inter leading-5 relative -bottom-[3%]">
                    {privacyPolicy}
                </Text>
            </View>
        </SafeAreaView>
    );
}