import { Text, View, Pressable } from 'react-native';
import React from 'react';
import Caution from "@/assets/images/caution.svg";
import { useRouter } from 'expo-router';

const LoanHistoryDets = ({ tab }) => {

    const router = useRouter();

    const makePayment = () => {
        router.push({
            pathname: "pages/loan/Repayment",
            params: tab
        })
    }

    return (
        <View>
            <View className="mt-2 border border-[#ECECEC] p-4 rounded-[24px] gap-2">
                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen text-[#807C8D] text-[13px]">Loan ID</Text>
                    <Text className="font-familjen text-[#807C8D] text-[13px]">2564849</Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen text-[#807C8D] text-[13px]">Loan Amount</Text>
                    <Text className="font-familjen text-[#807C8D] text-[13px]">₦100,000</Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen text-[#807C8D] text-[13px]">Interest</Text>
                    <Text className="font-familjen text-[#807C8D] text-[13px]">₦10,000</Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen text-[#807C8D] text-[13px]">Total Amount to be Repaid</Text>
                    <Text className="font-familjen text-[#807C8D] text-[13px]">₦110,000</Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen text-[#807C8D] text-[13px]">Disbursement Date</Text>
                    <Text className="font-familjen text-[#807C8D] text-[13px]">10 Oct 2026</Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen text-[#807C8D] text-[13px]">Bank Name</Text>
                    <Text className="font-familjen text-[#807C8D] text-[13px]">OPay</Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen text-[#807C8D] text-[13px]">Bank Account</Text>
                    <Text className="font-familjen text-[#807C8D] text-[13px]">*********261</Text>
                </View>

                <Text className="font-familjen-bold text-[#1E125C] text-[13px]">Installment Details</Text>

                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen text-[#807C8D] text-[13px]">Due Date</Text>
                    <Text className="font-familjen text-[#807C8D] text-[13px]">10 Nov 2026</Text>
                </View>

                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen text-[#807C8D] text-[13px]">Due Amount</Text>
                    <Text className="font-familjen text-[#807C8D] text-[13px]">₦5,500</Text>
                </View>

                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen text-[#807C8D] text-[13px]">Loan Status</Text>
                    <Text className="font-familjen-medium text-[#D2B102] text-[13px]">Outstanding</Text>
                </View>

                <Text className="font-familjen-bold text-[#1E125C] text-[13px]">Loan Contract</Text>

                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen text-[#807C8D] text-[13px]">Royal Settle Loan Contract</Text>
                    <Text className="font-familjen text-[#155EEF] text-[13px]">View</Text>
                </View>

                <View className="flex-row items-center justify-between">
                    <Text className="font-familjen-medium text-[#807C8D] text-[13px]">Repayment History</Text>
                    <Text className="font-familjen-medium text-[#155EEF] text-[13px]">View</Text>
                </View>
            </View>

            <Text className="font-familjen-semibold text-[#1E125C] text-[16px] mt-3">Important Notice</Text>
            <View className="mt-2 border border-[#ECECEC] bg-[#F2F3FF] p-6 rounded-[24px] gap-2">
                <View className="flex-row items-center gap-1">
                    <Caution width={30} height={30} />
                    <Text className="text-[12px] font-familjen-medium text-[#1E125C]">Please Read</Text>
                </View>

                <Text className="text-[12px] font-familjen"><Text className="font-familjen-bold">Early Repayment:</Text> Please note that when you repay your loan before the due date, you will still need to pay all the interest on the loan.</Text>
                <Text className="text-[12px] font-familjen"><Text className="font-familjen-bold">Prompt Repayment:</Text> It is important that you repay your loan as at when due to maintain a good credit report, enjoy a higher loan limit and lower interest.</Text>
                <Text className="text-[12px] font-familjen"><Text className="font-familjen-bold text-[red]">Late Repayment:</Text> This will attract a 1% rollover fee on overdue amounts everyday. You may be granted a 1 day grace period to repay your loan during which rollover fee will not be charged on you.</Text>
                <Text className="text-[12px] font-familjen">If you fail to repay your loan on time, you will be reported to the credit bureaus and this will affect your future loan applications or job employment.</Text>
            </View>
            <Pressable
                onPress={() => makePayment()}
                className="w-full h-14 rounded-full bg-[#240046] items-center justify-center active:opacity-85 mt-5"
            >
                <Text className="text-[16px] font-familjen-bold text-[#FFFFFF]">
                    Repay Now
                </Text>
            </Pressable>
        </View>
    )
}

export default LoanHistoryDets;