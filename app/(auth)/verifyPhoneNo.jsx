import { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import Header from '../../components/Header';
import { SafeAreaView } from "react-native-safe-area-context";
import CommonForm from '../../components/Form';
import { otpFormControls } from '../../config';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalSearchParams } from "expo-router";
import Toast from 'react-native-toast-message';
import { verifyOtp, sendOtp } from '../../store/slices/authSlice';

const initialState = {
    otp: ""
};

const VerifyPhoneNo = () => {
    const privacyPolicy = "By signing in to this app you agree with our Terms of Use and Privacy Policy."

    const [secondsLeft, setSecondsLeft] = useState(10 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [isDisable, setIsDisable] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const isLoading = useSelector((state) => state.auth.isLoading);
    const dispatch = useDispatch();
    const params = useLocalSearchParams();
    const { phoneNumber } = params;

    useEffect(() => {
        let interval;
        setIsRunning(true);
        setIsDisable(true);

        if (isRunning && secondsLeft > 0) {
            interval = setInterval(() => {
                setSecondsLeft(prev => prev - 1);
            }, 1000);
        }

        if (secondsLeft <= 480) {
            setIsDisable(false);
        }

        if (secondsLeft === 0) {
            setIsRunning(false);
        }

        return () => clearInterval(interval);
    }, [isRunning, secondsLeft]);

    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = secs % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;
    };

    const onSubmit = () => {
        if (!formData.otp) {
            Toast.show({
                type: 'error',
                text1: 'OTP is required',
            });
            return;
        }

        const otp = {
            notificationType: "SMS",
            phoneNumber: phoneNumber,
            otp: formData.otp,
        }

        dispatch(verifyOtp(otp))
            .then((res) => {
                if (res?.payload?.requestSuccessful === true) {
                    Toast.show({
                        type: 'success',
                        text1: res?.payload?.responseBody.message,
                    });
                    router.push("/signup");
                } else if (res?.payload?.requestSuccessful === false) {
                    throw new Error(res?.payload?.responseMessage || "Verification failed");
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

    const resendCode = () => {
        const data = {
            notificationType: "SMS",
            phoneNumber: phoneNumber,
        }

        dispatch(sendOtp(data))
            .then((res) => {
                if (res?.payload?.requestSuccessful === true) {
                    setSecondsLeft(10 * 60);
                    setIsRunning(true);
                    Toast.show({
                        type: 'success',
                        text1: res?.payload?.responseBody.message,
                    });
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
            <Header title="Verify your phone number" />
            <View className="flex-1 px-[4%] pb-6">
                <View className="flex-1">
                    <Text className="text-white text-[40px] font-medium leading-tight mt-4">Verify your phone number</Text>
                    <Text className="text-white text-[14px] font-inter mt-4">
                        Please enter your code within the next 5 minutes to avoid being logged out.
                    </Text>

                    <View className="mt-8 h-full">
                        <CommonForm
                            formControls={otpFormControls}
                            buttonText={"Verify Number"}
                            formData={formData}
                            setFormData={setFormData}
                            isLoading={isLoading}
                            onSubmit={onSubmit}
                            resendCode={resendCode}
                            formatTime={formatTime}
                            secondsLeft={secondsLeft}
                            isDisable={isDisable}
                        // formSpace={formSpace}
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

export default VerifyPhoneNo;