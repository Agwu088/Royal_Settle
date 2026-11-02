import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Svg, { Rect, Circle, Polygon, G, Mask } from 'react-native-svg';

const KycSuccess = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-white relative overflow-hidden">
            {/* Background Graphic */}
            <View className="absolute right-[-140px] top-[15%] w-[420px] h-[420px] opacity-[0.05]">
                <Svg width="100%" height="100%" viewBox="-50 -50 300 300">
                    <Mask id="hole">
                        <Rect x="-50" y="-50" width="300" height="300" fill="white" />
                        <Circle cx="100" cy="100" r="50" fill="black" />
                    </Mask>
                    
                    <G mask="url(#hole)">
                        <Polygon points="30,30 90,-20 120,10 60,70" fill="#240046" stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round" />
                        <Polygon points="20,10 -20,50 60,110 90,60" fill="#240046" stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round" />
                        
                        <Circle cx="100" cy="100" r="80" fill="#FFFFFF" />

                        <Rect x="20" y="20" width="160" height="160" rx="35" fill="#240046" />
                        <Rect x="20" y="20" width="160" height="160" rx="35" fill="#240046" transform="rotate(30 100 100)" />
                        <Rect x="20" y="20" width="160" height="160" rx="35" fill="#240046" transform="rotate(60 100 100)" />
                    </G>
                </Svg>
            </View>

            <View className="flex-1 justify-center items-center px-[5%]">
                <View className="w-[150px] h-[150px] rounded-full bg-[#1e0a3c] items-center justify-center mb-8">
                    <MaterialCommunityIcons name="thumb-up" size={70} color="#EAE8FF" />
                </View>

                <Text className="text-[18px] font-bold font-poppins-bold text-[#1e0a3c] text-center mb-1">
                    Thank you!
                </Text>

                <Text className="text-[18px] font-bold font-poppins-medium text-[#1e0a3c] text-center mb-4 px-4 leading-tight">
                    We are reviewing your document submission
                </Text>

                <Text className="text-[13px] font-poppins-regular text-[#7A6B9B] text-center px-[10%]">
                    This should take about 2 - 3 business days.{'\n'}You will be notified of the outcome.
                </Text>
            </View>

            {/* Bottom Button */}
            <TouchableOpacity
                onPress={() => router.replace('/dashboard')}
                className="mb-[8%] h-14 rounded-full bg-[#1e0a3c] items-center justify-center mx-[5%]"
            >
                <Text className="text-[16px] font-bold font-inter text-white">
                    Okay
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default KycSuccess;
