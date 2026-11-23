import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationHeader from '@/components/NavigationHeader';
import Add from "@/assets/images/add-circle.svg";
import Cash from "@/assets/images/cash.svg";
import { useRouter } from 'expo-router';

const Loan = () => {
    const [activeTab, setActiveTab] = useState('Loan History');
    const tabs = ['Loan History', 'Repayment History'];
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 px-[10%]">
            <View className="px-[3%]">
                <NavigationHeader title={"Loan"} gap={"gap"} />
            </View>
            <View className="flex-row items-center bg-[#E8E8E8] p-1.5 rounded-full w-full m-auto">
                {/* Unread Tab */}
                {tabs.map((tab) => (
                    <TouchableOpacity
                        activeOpacity={0.9}
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        className={`flex-1 py-3 rounded-full items-center justify-center ${activeTab === tab ? 'bg-[#F2F3FF] border-2 border-white' : 'bg-transparent'}`}
                    >
                        <Text className={`font-familjen-semibold text-base ${activeTab === tab ? 'text-[#240046]' : 'text-gray-500'}`}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View className="px-[3%] py-[5%] bg-white flex-1 mt-[5%] rounded-[24px]">
                <View className="mb-12">
                    <Text className="text-[16px] font-familjen-semibold text-[#000] mb-1">Apply for a loan</Text>
                    <Text className="text-[11px] text-[#666] font-inter-medium">Get loan as swiftly as possible</Text>
                </View>

                <View className="items-center justify-center mt-20">
                    <Cash width={120} height={120} />
                    <Text className="text-[16px] font-familjen-semibold text-[#000] mt-[8%] mb-2">No active loan</Text>
                    <Text className="text-[12px] text-[#666] font-inter-medium">All your active loans will appear here</Text>
                </View>

                {/* Floating Action Button */}
                <View className="flex-row justify-end mt-[55%]">
                    <TouchableOpacity
                        className="flex-row items-center bg-[#F2F3FF] px-5 py-3 rounded-[24px] shadow-sm gap-2 border-2 border-white"
                        onPress={() => router.push("pages/loan/GetLoan")}
                    >
                        <Add width={30} height={30} />
                        <Text className="text-[#240046] text-[14px] font-poppins-semibold">Get Loan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Loan;