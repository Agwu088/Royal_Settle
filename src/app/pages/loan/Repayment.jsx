import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationHeader from '@/components/NavigationHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Edit from "@/assets/images/edit.svg";
import Caution from "@/assets/images/caution.svg";
import LoanCards from '@/components/loan/LoanCards';
import { useLocalSearchParams } from 'expo-router';

const Repayment = () => {
    const [loanAmount, setLoanAmount] = useState('100,000');
    const [isKeypadVisible, setIsKeypadVisible] = useState(false);

    const params = useLocalSearchParams();
    const tab = params.tab

    const loanData = [
        { id: 1, amt: "100,000", date: "10 Dec 2026" },
        { id: 2, amt: "300,000", date: "10 Oct 2026" },
        { id: 3, amt: "150,000", date: "04 Sept 2026" },
        { id: 4, amt: "500,000", date: "18 July 2026" },
        { id: 5, amt: "720,000", date: "14 May 2026" },
    ]

    return (
        <SafeAreaView className="flex-1" edges={['top']}>
            <View className="px-[3%]">
                <NavigationHeader title={"Repayment"} gap={100} />
            </View>
            <View className="px-[3%] pt-[5%] pb-[10%] bg-white flex-1">
                <Text className="font-familjen-semibold text-[16px]">Loan Amount (<MaterialCommunityIcons name="currency-ngn" size={15} color="black" />)</Text>
                <View className="flex-row items-end gap-2">
                    <TextInput
                        className="font-familjen-semibold text-[#141414] placeholder:text-[44px]"
                        value={loanAmount}
                        onChangeText={setLoanAmount}
                        keyboardType="numeric"
                        placeholder="0"
                        onFocus={() => setIsKeypadVisible(true)}
                    />
                    <Edit height={30} width={30} />
                </View>
                <View className="flex-row justify-between items-end">
                    <Text className="font-familjen text-[10px] text-[#807C8D]">Next Due Amount ₦100,000</Text>
                    <TouchableOpacity className="bg-[#240046] px-[40px] py-[10px] rounded-full">
                        <Text className="text-white text-center font-familjen-bold text-[7.65px]">Full Repayment</Text>
                    </TouchableOpacity>
                </View>

                <View className="h-[3px] bg-gray-100 w-full my-3" />

                <View className="flex-row items-center bg-[#F9F9FF] px-4 py-2 gap-1 rounded-[12px]">
                    <Caution width={20} height={20} />
                    <Text className="text-[12px] font-familjen text-[#1E125C] w-[85%]">Note that the repayment amount will be repaid in order of the due date.</Text>
                </View>

                <LoanCards data={loanData} tab={tab} />
            </View>
        </SafeAreaView>
    )
}

export default Repayment;