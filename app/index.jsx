import { View, Text, Image } from 'react-native';
import OnboardingSlide from '../components/OnboardingSlide';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../components/Header';

export default function Onboarding() {

    return (
        <SafeAreaView className="flex-1 bg-[#240046]">
            <Header />
            <OnboardingSlide />
        </SafeAreaView>
    );
}
