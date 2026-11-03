import { Text, View } from 'react-native';
import Header from '@/components/Header';
import { SafeAreaView } from "react-native-safe-area-context";
import CommonForm from '@/components/Form';
import { phoneFormControls } from '@/config';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp } from '@/store/slices/authSlice';
import Toast from 'react-native-toast-message';

export default function PhoneNo() {
    const [formData, setFormData] = useState({
        notificationType: "SMS",
        phoneNumber: "",
    });

    const isLoading = useSelector((state) => state.auth.isLoading);
    const dispatch = useDispatch();

    const privacyPolicy = "By signing in to this app you agree with our Terms of Use and Privacy Policy."

    const onSubmit = () => {
        const { phoneNumber } = formData;
        if (!phoneNumber) {
            Toast.show({
                type: 'error',
                text1: 'Phone number is required',
            });
            return;
        }

        dispatch(sendOtp(formData))
            .then((res) => {
                if (res?.payload?.requestSuccessful === true) {
                    console.log(res)
                    Toast.show({
                        type: 'success',
                        text1: res?.payload?.responseBody.message,
                    });
                    router.push({
                        pathname: "/verifyPhoneNo",
                        params: {
                            phoneNumber: res.meta.arg.phoneNumber,
                        }
                    })
                } else if (res?.meta?.requestStatus === 'rejected') {
                    throw new Error(res?.payload?.responseMessage || "Verification failed");
                } else {
                    throw new Error("Verification failed");
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
                    <Text className="text-white text-[40px] font-medium leading-tight mt-4">Let’s get you started</Text>
                    <Text className="text-white text-[14px] font-inter mt-4">Provide your phone number below. We will send a confirmation code there.</Text>
                    <Text className="text-white text-[14px] font-inter mt-4 absolute top-[29%]">Already have an account?{" "}
                        <Link href="/login">
                            <Text className="text-[#fea01c] font-[600]">
                                Log in
                            </Text>
                        </Link>
                    </Text>

                    <View className="mt-8 h-full">
                        <CommonForm
                            formControls={phoneFormControls}
                            buttonText={"Get Code"}
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