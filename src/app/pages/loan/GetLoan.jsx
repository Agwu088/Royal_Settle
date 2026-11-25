import { Text, TouchableOpacity, View, TextInput, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationHeader from '@/components/NavigationHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import KeyPad from '@/utils/keyPad';
import TenureBottomSheet, { DEFAULT_TENURES } from '@/utils/bottomSheet/TenureBottomSheet';
import RepaymentScheduleBottomSheet from '@/utils/bottomSheet/RepaymentScheduleBottomSheet';
import AccountSelectBottomSheet from '@/utils/bottomSheet/AccountSelectBottomSheet';

const GetLoan = () => {
    const [loanAmount, setLoanAmount] = useState('50,000');
    const [isKeypadVisible, setIsKeypadVisible] = useState(false);

    const MOCK_SCHEDULE = [
        { id: '1', date: '04 Nov 2026', label: '1st Installment', amount: '55,556' },
        { id: '2', date: '04 Dec 2026', label: '2nd Installment', amount: '55,556' },
        { id: '3', date: '04 Jan 2027', label: '3rd Installment', amount: '55,556' },
        { id: '4', date: '04 Feb 2027', label: '4th Installment', amount: '55,556' },
    ];

    const MOCK_ACCOUNTS = [
        { id: 'a1', bankName: 'OPay', maskedNumber: '******2421' },
        { id: 'a2', bankName: 'OPay', maskedNumber: '******2421' },
    ];

    const tenureSheetRef = useRef(null);
    const scheduleSheetRef = useRef(null);
    const accountSheetRef = useRef(null);

    const [selectedTenure, setSelectedTenure] = useState(DEFAULT_TENURES[2]);
    const [selectedAccount, setSelectedAccount] = useState(MOCK_ACCOUNTS[0]);

    return (
        <SafeAreaView className="flex-1" edges={['top']}>
            <View className="px-[3%]">
                <NavigationHeader title={"Get Loan"} gap={110} />
            </View>

            <View className="px-[3%] pt-[5%] pb-[10%] bg-white flex-1">
                <Text className="font-familjen-semibold text-[16px]">Loan Amount (<MaterialCommunityIcons name="currency-ngn" size={15} color="black" />)</Text>
                <TextInput
                    className="font-familjen-semibold text-[#141414] placeholder:text-[44px]"
                    value={loanAmount}
                    onChangeText={setLoanAmount}
                    keyboardType="numeric"
                    placeholder="0"
                    onFocus={() => setIsKeypadVisible(true)}
                />
                <View className="flex-row justify-between items-end">
                    {!isKeypadVisible ? <Text className="font-familjen text-[10px] text-[#807C8D]">Max loan amount 100,000</Text> : <Text></Text>}
                    <TouchableOpacity className="bg-[#240046] px-[40px] py-[10px] rounded-full">
                        <Text className="text-white text-center font-familjen-bold text-[7.65px]">Take All</Text>
                    </TouchableOpacity>
                </View>

                <View className="h-[3px] bg-gray-100 w-full my-3" />

                {isKeypadVisible ?
                    (
                        <View className="flex-1">
                            <Text className="font-familjen text-[12px] text-[#807C8D]">Your loan amount range is N2,000 to N100,000</Text>
                        </View>
                    ) :

                    (
                        <View>
                            <View className="w-full bg-white rounded-3xl border border-gray-100 p-6 mt-[3%]">
                                {/* Row 1: Loan Tenure */}

                                <View className="flex-row justify-between items-start py-3 border-b border-gray-50">
                                    <Text className="text-[#636A67] text-[10px] font-familjen">Loan Tenure</Text>
                                    <TouchableOpacity
                                        onPress={() => tenureSheetRef.current?.present()}
                                        className="items-end">
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
                                    <TouchableOpacity
                                        onPress={() => scheduleSheetRef.current?.present()}
                                        className="items-end">
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
                                    <TouchableOpacity
                                        onPress={() => accountSheetRef.current?.present()}
                                        className="flex-row items-center">
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
                        </View>

                    )}


                <TouchableOpacity className={`bg-[#240046] py-[18px] rounded-full ${isKeypadVisible ? "mb-5" : "relative top-[23%]"}`}>
                    <Text className="text-white text-[16px] font-familjen-bold text-center">
                        {isKeypadVisible ? "Confirm" : "Apply Now"}
                    </Text>
                </TouchableOpacity>
                <View>
                    {isKeypadVisible && (
                        <KeyPad onKeyPress={(val) => console.log(val)} />
                    )}
                </View>
            </View>
            {/* Bottom Sheets */}
            <TenureBottomSheet
                ref={tenureSheetRef}
                selectedId={selectedTenure.id}
                onSelect={setSelectedTenure}
                onClose={() => tenureSheetRef.current?.dismiss()}
            />

            <RepaymentScheduleBottomSheet
                ref={scheduleSheetRef}
                installmentsCount={4}
                repayPerPeriod="55,556"
                schedule={MOCK_SCHEDULE}
                onClose={() => scheduleSheetRef.current?.dismiss()}
            />

            <AccountSelectBottomSheet
                ref={accountSheetRef}
                accounts={MOCK_ACCOUNTS}
                selectedAccountId={selectedAccount.id}
                onSelectAccount={setSelectedAccount}
                onAddNewAccount={() => navigation?.navigate('AddAccount')}
                onClose={() => accountSheetRef.current?.dismiss()}
            />
        </SafeAreaView>
    )
}

export default GetLoan;
