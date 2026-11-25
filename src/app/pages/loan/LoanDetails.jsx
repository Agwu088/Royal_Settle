import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import NavigationHeader from '@/components/NavigationHeader';

const LoanDetails = () => {
    const params = useLocalSearchParams();
    const item = params.itemData ? JSON.parse(params.itemData) : null;
    return (
        <SafeAreaView edges={['top']} className={`flex-1`}>
            <View className="px-[3%]">
                <NavigationHeader title={"Repayment History"} gap={50} />
            </View>
            <View className="bg-white flex-1 p-5">
                <Text className="font-familjen-semibold text-[16px]">Repayment Details</Text>

                <View className="mt-5 border border-[#ECECEC] p-6 rounded-[24px] gap-5">
                    <View className="flex-row items-center justify-between">
                        <Text className="font-familjen text-[#807C8D] text-[13px]">Loan ID</Text>
                        <Text className="font-familjen text-[#807C8D] text-[13px]">2564849</Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <Text className="font-familjen text-[#807C8D] text-[13px]">Repaid Amount</Text>
                        <Text className="font-familjen text-[#807C8D] text-[13px]">₦100,000</Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <Text className="font-familjen text-[#807C8D] text-[13px]">Discount</Text>
                        <Text className="font-familjen text-[#807C8D] text-[13px]">₦0</Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <Text className="font-familjen text-[#807C8D] text-[13px]">Repayment Date</Text>
                        <Text className="font-familjen-medium text-[#403E47] text-[13px]">10 Nov 2026, 10:45:09</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoanDetails;