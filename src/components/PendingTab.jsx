import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const PendingTab = () => {
    return (
        <View className="bg-white mx-[5%] rounded-[24px] p-6 mt-4 flex-1 min-h-[500px] relative shadow-sm">
            {/* Empty State */}
            <View className="items-center justify-center flex-1 mt-10">
                <View className="w-24 h-24 rounded-full bg-[#FAF5FF] items-center justify-center mb-6">
                    <Ionicons name="gift" size={48} color="#4A2771" />
                </View>
                <Text className="text-[16px] font-[600] text-[#000] mb-2 text-center">No pending Ajo invitation yet.</Text>
                <Text className="text-[12px] text-[#666] text-center">All new ajo invitation yet to be accepted appear here.</Text>
            </View>

            {/* Floating Action Button */}
            <View className="absolute bottom-6 right-6">
                <TouchableOpacity
                    className="flex-row items-center bg-[#F4EFFB] px-5 py-3 rounded-[24px] shadow-sm gap-2"
                >
                    <Ionicons name="add" size={18} color="#240046" />
                    <Text className="text-[#240046] text-[14px] font-[600]">Create Ajo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
