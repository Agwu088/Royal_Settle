import { Text, View } from 'react-native';
import Header from '../../components/Header';
import { SafeAreaView } from "react-native-safe-area-context";
import CommonForm from '../../components/Form';
import { signupFormControls } from '../../config';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../store/slices/authSlice';
import Toast from 'react-native-toast-message';
import * as SecureStore from 'expo-secure-store';

const initialState = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    referralCode: "REF-001"
};

export default function SignUp() {
    const [formData, setFormData] = useState(initialState);
    const isLoading = useSelector((state) => state.auth.isLoading);
    const dispatch = useDispatch();

    const privacyPolicy = "By signing in to this app you agree with our Terms of Use and Privacy Policy."

    const onSubmit = () => {
        const { password, confirmPassword } = formData;

        if (!password) {
            Toast.show({
                type: 'error',
                text1: 'Password is required',
            });
            return;
        }

        if (!confirmPassword) {
            Toast.show({
                type: 'error',
                text1: 'Please confirm your password',
            });
            return;
        }

        if (password !== confirmPassword) {
            Toast.show({
                type: 'error',
                text1: 'Passwords do not match',
            });
            return;
        }

        delete formData.confirmPassword;

        dispatch(signup(formData))
            .then((res) => {
                if (res?.payload?.requestSuccessful === true) {
                    SecureStore.setItemAsync('accessToken', res?.payload?.responseBody.accessToken);
                    SecureStore.setItemAsync('refreshToken', res?.payload?.responseBody.refreshToken);
                    router.push("/setPin")
                } else if (res?.meta?.requestStatus === 'rejected') {
                    throw new Error(res?.payload?.responseMessage || "Registration failed");
                } else {
                    throw new Error("Registration failed");
                };
            }).catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: err.message,
                });
            })
    }

    return (
        <SafeAreaView className="flex-1 bg-[#240046]">
            <Header />
            <View className="flex-1 px-[4%] pb-6">
                <View className="flex-1">
                    <Text className="text-white text-[40px] font-medium leading-tight mt-4">Sign up</Text>
                    <Text className="text-white text-[14px] font-inter mt-4">Provide details on all all required filed. We will set your account up in a giffy.</Text>
                    <Text className="text-white text-[14px] font-inter mt-4 absolute bottom-[11%]">Already have an account?{" "}
                        <Link href="/login">
                            <Text className="text-[#fea01c] font-[600]">
                                Log in
                            </Text>
                        </Link>
                    </Text>

                    <View className="mt-8 h-full">
                        <CommonForm
                            formControls={signupFormControls}
                            buttonText={"Sign Up"}
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
    )
}