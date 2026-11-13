import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationHeader from '@/components/NavigationHeader';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const Loan = () => {
    return (
        <SafeAreaView className="flex-1" edges={['top']}>
            <View className="px-[3%]">
                <NavigationHeader title={"Get Loan"} />
            </View>

            <View className="px-[3%] py-[5%] bg-white flex-1">
                <Text className="font-familjen-semibold text-[16px]">Loan Amount (<MaterialCommunityIcons name="currency-ngn" size={15} color="black" />)</Text>
                <Text className="font-familjen-semibold text-[44px]">50,000</Text>
                <View className="mt-[5%] flex-row justify-between items-center">
                    <Text className="font-familjen text-[10px] text-[#807C8D]">Max loan amount 100,000</Text>
                    <TouchableOpacity className="bg-[#240046] px-[40px] py-[10px] rounded-full">
                        <Text className="text-white text-center font-familjen-bold text-[7.65px]">Take All</Text>
                    </TouchableOpacity>
                </View>

                <View className="h-[3px] bg-gray-100 w-full my-3" />

                <View className="w-full bg-white rounded-3xl border border-gray-100 p-6 mt-[3%]">
                    {/* Row 1: Loan Tenure */}
                    <View className="flex-row justify-between items-start py-3 border-b border-gray-50">
                        <Text className="text-[#636A67] text-[10px] font-familjen">Loan Tenure</Text>
                        <TouchableOpacity className="items-end">
                            <View className="flex-row items-center">
                                <Text className="text-[#141414] font-familjen-semibold text-[14px] mr-1">
                                    120 Days (4 months)
                                </Text>
                                <Text className="text-purple-900 font-bold">›</Text>
                            </View>
                            <Text className="text-[#636A67] font-familjen text-[12px] mt-0.5">
                                Monthly Interest 20.4%
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Row 2: Interest */}
                    <View className="flex-row justify-between items-center py-4 border-b border-gray-50">
                        <Text className="text-[#636A67] text-[10px] font-familjen">Interest</Text>
                        <Text className="text-[#141414] font-familjen-semibold text-[14px]">₦9,780</Text>
                    </View>

                    {/* Row 3: Repayment Plan */}
                    <View className="flex-row justify-between items-start py-4 border-b border-gray-50">
                        <Text className="text-[#636A67] text-[10px] font-familjen">Repayment Plan</Text>
                        <TouchableOpacity className="items-end">
                            <View className="flex-row items-center">
                                <Text className="text-[#141414] font-familjen-semibold text-[14px] mr-1">
                                    Total ₦59,780
                                </Text>
                                <Text className="text-purple-900 font-bold">›</Text>
                            </View>
                            <Text className="text-[#636A67] font-familjen text-[12px] mt-0.5">
                                1st Repay Date <Text className="text-blue-900">10 Nov 2026</Text>, Amount 5,445
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Row 4: Disbursement Account */}
                    <View className="flex-row justify-between items-center pt-4">
                        <Text className="text-[#636A67] text-[10px] font-familjen">Disbursement Account</Text>
                        <TouchableOpacity className="flex-row items-center">
                            <Text className="text-[#141414] font-familjen-semibold text-[14px]">*****</Text>
                            <Text className="text-[#141414] font-familjen-semibold text-[14px] mr-1">2621</Text>
                            <Text className="text-purple-900 font-bold">›</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="gap-6 mt-[5%]">
                    <Text className="font-familjen text-[10px] text-[#636A67]">This loan will be used for <Text className="text-blue-900">Daily consumption</Text></Text>
                    <Text className="font-familjen text-[10px] text-[#636A67]">It is important that you must repay your loan as at when due to maintain a good credit report and avoid rollover fee of 1% daily. <Text className="text-blue-900">Click to know more</Text></Text>
                    <Text className="font-familjen text-[10px] text-[#636A67]">This loan will be used for Daily consumption</Text>
                </View>
                <TouchableOpacity className={`bg-[#240046] py-[18px] rounded-full relative top-[23%]`}>
                    <Text className="text-white text-[16px] font-familjen-bold text-center">
                        Apply Now
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Loan;
