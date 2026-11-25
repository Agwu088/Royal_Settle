import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import NavigationHeader from '@/components/NavigationHeader';
import RepaymentHistoryDets from './RepaymentHistoryDets';
import LoanHistoryDets from './LoanHistoryDets';

const LoanDetails = () => {
    const { itemData, activeTab } = useLocalSearchParams();
    const item = itemData ? JSON.parse(itemData) : null;

    return (
        <SafeAreaView edges={['top']} className={`flex-1`}>
            <View className="px-[3%]">
                <NavigationHeader
                    title={activeTab === "Loan History" ? "Loan History" : "Repayment History"}
                    gap={activeTab === "Loan History" ? 92 : 50}
                />
            </View>
            <View className="bg-white flex-1 p-5">
                <Text className="font-familjen-semibold text-[16px]">{activeTab === "Loan History" ? "Loan Details" : "Repayment Details"}</Text>

                {
                    activeTab === "Loan History" ?
                        <LoanHistoryDets /> :
                        <RepaymentHistoryDets />
                }


            </View>
        </SafeAreaView>
    )
}

export default LoanDetails;