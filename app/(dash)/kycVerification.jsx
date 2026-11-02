import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const KYCVerification = () => {
    const router = useRouter();
    const [bvn, setBvn] = useState('');

    return (
        <SafeAreaView className="flex-1 bg-[#F8F9FA]">
            {/* Header */}
            <View className="flex-row items-center px-[5%] py-[3%] relative">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-10 h-10 rounded-full border border-gray-200 items-center justify-center bg-white z-10"
                >
                    <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View className="absolute inset-x-0 items-center justify-center">
                    <Text className="text-[24px] font-bold text-black leading-tight">KYC Verification</Text>
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: '5%', paddingTop: 20 }}>
                    {/* Bank Icon */}
                    <View className="w-[60px] h-[60px] rounded-full bg-[#240046] items-center justify-center mb-6">
                        <MaterialCommunityIcons name="bank" size={30} color="white" />
                    </View>

                    {/* Title and Description */}
                    <Text className="text-[18px] font-bold text-[#240046] mb-2 font-poppins-medium">
                        Enter your Bank{'\n'}Verification Number
                    </Text>
                    <Text className="text-[14px] font-inter text-[#7A6B9B] mb-8 font-poppins-regular">
                        Enter the correct Bank Verification Number to{'\n'}enable us confirm your identity.
                    </Text>

                    {/* Input Field */}
                    <View className="mb-6">
                        <Text className="text-[14px] font-[500] font-poppins-regular text-[#4A4A4A] mb-2">
                            Enter your bank verification number
                        </Text>
                        <TextInput
                            value={bvn}
                            onChangeText={setBvn}
                            placeholder="Enter your BVN"
                            placeholderTextColor="#A0A0A0"
                            keyboardType="number-pad"
                            className="bg-white border border-[#E0E0E0] rounded-full h-[55px] px-[5%] text-[12px] font-inter text-black"
                        />
                    </View>

                    <View className="flex-1" />

                    {/* Bottom Button */}
                    <TouchableOpacity
                        disabled={bvn.length < 10}
                        onPress={() => router.push('/ninVerification')}
                        className={`mb-[8%] h-14 rounded-full items-center justify-center ${bvn.length >= 10 ? 'bg-[#240046]' : 'bg-[#E5E5E5]'
                            }`}
                    >
                        <Text className={`text-[16px] font-bold font-inter ${bvn.length >= 10 ? 'text-white' : 'text-[#A0A0A0]'
                            }`}>
                            Verify
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default KYCVerification;
