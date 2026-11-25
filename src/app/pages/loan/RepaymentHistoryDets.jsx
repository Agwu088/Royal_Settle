import { Text, View } from 'react-native'
import React from 'react'

const RepaymentHistoryDets = () => {
    return (
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
    )
}

export default RepaymentHistoryDets;