import { View, Text, Image } from 'react-native';
import OnboardingSlide from '@/components/OnboardingSlide';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '@/components/Header';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Onboarding() {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView className="flex-1 bg-[#240046]">
                <Header />
                <OnboardingSlide />
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}
