import { Text, View } from 'react-native';
import Header from '../../components/Header';
import { SafeAreaView } from "react-native-safe-area-context";
import CommonForm from '../../components/Form';
import { welcomeBckFormControls } from '../../config';
import { useState } from 'react';
import { router } from 'expo-router';

export default function WelcomeBck() {
    const [formData, setFormData] = useState({ email: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [focused, setFocused] = useState(false);

    const privacyPolicy = "By signing in to this app you agree with our Terms of Use and Privacy Policy."

    const onSubmit = () => {
        router.push("/setPin");
        // setIsLoading(true);
        // setTimeout(() => {
        //     setIsLoading(false);
        // }, 2000);
    }

    return (
        <SafeAreaView className="flex-1 bg-[#240046]">
            <Header />
            <View className="flex-1 px-[4%] pb-6">
                <View className="flex-1">
                    <Text className="text-white text-[40px] font-medium leading-tight mt-4">Welcome back,</Text>
                    <Text className="text-white text-[40px] font-medium leading-tight">Henry</Text>
                    <Text className="text-white text-[14px] font-inter mt-4">Glad to see you again</Text>
                    <Text className="text-[#B199CE] font-[600] absolute top-[37%] right-[2%]">Forgot Password?</Text>
                    <Text className="text-white text-[14px] font-inter mt-4 absolute top-[88%]">Don't have an account?{" "}
                        <Text className="text-[#fea01c] font-[600]">
                            Sign Up
                        </Text>
                    </Text>

                    <View className="mt-8 h-full">
                        <CommonForm
                            formControls={welcomeBckFormControls}
                            buttonText={"WellBack"}
                            formData={formData}
                            setFormData={setFormData}
                            isLoading={isLoading}
                            onSubmit={onSubmit}
                            focused={focused}
                            setFocused={setFocused}
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