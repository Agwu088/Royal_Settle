import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const KYCLevel = () => {
    const router = useRouter();

    const verificationSteps = [
        {
            id: 1,
            title: "Full Name",
            subtitle: "Confirmed",
            status: "verified"
        },
        {
            id: 2,
            title: "BVN verification",
            subtitle: "Pending Confirmation",
            status: "in_progress"
        },
        {
            id: 3,
            title: "NIN verification",
            subtitle: "Rejected",
            status: "rejected"
        },
        {
            id: 4,
            title: "Address verification",
            subtitle: "Not Available",
            status: "not_available"
        }
    ];

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
                    <Text className="text-[24px] font-bold text-black leading-tight">KYC Level</Text>
                </View>
            </View>

            <ScrollView className="flex-1 px-[5%]">
                {/* Banner */}
                <View className="bg-[#240046] rounded-[20px] p-6 mt-4 flex-row justify-between items-center overflow-hidden">
                    <View>
                        <Text className="text-[11px] font-[500] font-inter text-[#A896D1] mb-1">Current Tier</Text>
                        <Text className="text-[16px] font-bold leading-tight text-white">Level 4 of 4</Text>
                    </View>
                    <View className="absolute -right-4 -top-2 opacity-90">
                        <MaterialCommunityIcons name="medal" size={100} color="#E8E2FA" />
                    </View>
                </View>

                {/* Verification List */}
                <View className="bg-white border border-[#ECECEC] rounded-[20px] p-[6%] mt-6">
                    {verificationSteps.map((item, index) => (
                        <View key={item.id} className="flex-row mb-1">
                            <View className="items-center mr-4 w-[24px]">
                                <MaterialCommunityIcons
                                    name={
                                        item.status === 'verified' ? 'check-decagram' :
                                            item.status === 'in_progress' ? 'dots-horizontal-circle' :
                                                item.status === 'rejected' ? 'minus-octagon' :
                                                    'decagram-outline'
                                    }
                                    size={24}
                                    color={
                                        item.status === 'verified' ? '#240046' :
                                            item.status === 'in_progress' ? '#D4AF37' :
                                                item.status === 'rejected' ? '#D32F2F' :
                                                    '#C4C4C4'
                                    }
                                />
                                {index < verificationSteps.length - 1 && (
                                    <View className="w-[1.5px] h-[50px] bg-[#E0E0E0] mt-1 mb-1" />
                                )}
                            </View>
                            <View className="pt-1">
                                <Text className={`text-[14px] font-bold font-poppins-medium ${item.status === 'verified' || item.status === 'in_progress' || item.status === 'rejected' ? 'text-black' : 'text-[#C4C4C4]'}`}>
                                    {item.title}
                                </Text>
                                <Text className={`text-[12px] font-poppins-medium mt-1 ${item.status === 'verified' ? 'text-gray-500' :
                                    item.status === 'in_progress' ? 'text-[#D4AF37] italic' :
                                        item.status === 'rejected' ? 'text-[#D32F2F]' :
                                            'text-[#E0E0E0]'
                                    }`}>
                                    {item.subtitle}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Bottom Button */}
            <View className="px-[5%] pb-[8%] pt-2 bg-[#F8F9FA]">
                <TouchableOpacity onPress={() => router.push('/kycVerification')} className="bg-[#240046] h-14 rounded-full items-center justify-center">
                    <Text className="text-[16px] font-bold leading-tight text-white">Try Again</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default KYCLevel;
