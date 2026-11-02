import { Text, View } from 'react-native';
import Header from '../../components/Header';
import { SafeAreaView } from "react-native-safe-area-context";
import CommonForm from '../../components/Form';
import { useState } from 'react';
import { otpFormControls } from '../../config';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { setPin } from '../../store/slices/authSlice';
import { Feather } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

const initialState = {
    otp: ""
}

const SetPin = () => {
    const privacyPolicy = "By signing in to this app you agree with our Terms of Use and Privacy Policy."

    const [formData, setFormData] = useState(initialState);
    const isLoading = useSelector((state) => state.auth.isLoading);
    const dispatch = useDispatch();

    const onSubmit = () => {
        if (!formData.otp) {
            Toast.show({
                type: 'error',
                text1: 'Pin is required',
            });
            return;
        }

        const pin = {
            pin: formData.otp
        }

        dispatch(setPin(pin))
            .then((res) => {
                if (res?.payload?.requestSuccessful === true) {
                    Toast.show({
                        type: 'success',
                        text1: res?.payload?.responseBody.message,
                    });
                    router.push("/plan");
                } else if (res?.meta?.requestStatus === 'rejected') {
                    throw new Error(res?.payload?.message || "Verification failed");
                } else {
                    throw new Error("Verification failed");
                };
            })
            .catch((err) => {
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
                    <View className="flex-row justify-between items-center">
                        <Text className="text-white text-[40px] font-medium leading-tight mt-4 w-[80%]">Set up Transaction pin</Text>
                        <View className="bg-[#240046] border border-[#fea01c] rounded-full p-2">
                            <Feather name="info" size={24} color="white" />
                        </View>
                    </View>
                    <Text className="text-white text-[14px] font-inter mt-4">Choose a four digit transaction pin. </Text>

                    <View className="mt-8 h-full">
                        <CommonForm
                            formControls={otpFormControls}
                            buttonText={"Set Pin"}
                            formData={formData}
                            setFormData={setFormData}
                            isLoading={isLoading}
                            onSubmit={onSubmit}
                        />
                    </View>
                </View>
                <Text className="text-white text-center text-[14px] font-inter leading-5 relative -bottom-[3%]">
                    {privacyPolicy}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SetPin;