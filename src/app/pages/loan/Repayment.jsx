import { Text, View, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationHeader from '@/components/NavigationHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Edit from "@/assets/images/edit.svg";
import Caution from "@/assets/images/caution.svg";
import { useLocalSearchParams } from 'expo-router';
import DetsArr from "@/assets/images/detsArrow";
import { useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

const Repayment = () => {
    const [loanAmount, setLoanAmount] = useState('100,000');
    const [isKeypadVisible, setIsKeypadVisible] = useState(false);
    const [repayNow, setRepayNow] = useState(false);

    const router = useRouter();
    const params = useLocalSearchParams();
    const tab = params.tab

    const loanData = [
        { id: 1, amt: "100,000", date: "10 Dec 2026" },
        { id: 2, amt: "300,000", date: "10 Oct 2026" },
        { id: 3, amt: "150,000", date: "04 Sept 2026" },
        { id: 4, amt: "500,000", date: "18 July 2026" },
        { id: 5, amt: "720,000", date: "14 May 2026" },
    ]

    const tenures = [
        { id: '180', label: 'Pay via Bank Transfer' },
        { id: '150', label: 'Pay via Bank Card' },
        { id: '120', label: 'Pay via USSD' },
    ];

    const [selectedTenure, setSelectedTenure] = useState(tenures[2]);

    const back = () => {
        if (repayNow === true) {
            setRepayNow(false);
            return;
        }
        router.back()
    }

    const pay = () => {
        if (repayNow === false) {
            setRepayNow(true);
            return;
        }
        router.push("pages/loan/RepaymentComplete")
    }

    return (
        <SafeAreaView className="flex-1" edges={['top']}>
            <View className="px-[3%]">
                <View className={`flex-row items-center mt-4 mb-6 gap-[100px]`}>
                    <TouchableOpacity
                        className="w-12 h-12 rounded-full border border-gray-200 items-center justify-center"
                        onPress={() => back()}
                    >
                        <Entypo name="chevron-small-left" size={24} color="#141414" />
                    </TouchableOpacity>
                    <Text className="text-[24px] font-familjen-semibold text-center text-[#000]">Repayment</Text>
                </View>
            </View>
            <View className="px-[3%] pt-[5%] pb-[6%] bg-[#ffffff] flex-1">
                <Text className="font-familjen-semibold text-[16px]">Repayment Amount (<MaterialCommunityIcons name="currency-ngn" size={15} color="black" />)</Text>
                <View className="flex-row items-end gap-2">
                    <TextInput
                        className="font-familjen-semibold text-[#141414] placeholder:text-[44px]"
                        value={loanAmount}
                        onChangeText={setLoanAmount}
                        keyboardType="numeric"
                        placeholder="0"
                        onFocus={() => setIsKeypadVisible(true)}
                    />
                    {
                        !repayNow ? (<Edit height={30} width={30} />) : (<Text></Text>)
                    }

                </View>
                {
                    !repayNow ? (
                        <View className="flex-row justify-between items-end">
                            <Text className="font-familjen text-[10px] text-[#807C8D]">Next Due Amount ₦100,000</Text>
                            <TouchableOpacity className="bg-[#240046] px-[40px] py-[10px] rounded-full">
                                <Text className="text-white text-center font-familjen-bold text-[7.65px]">Full Repayment</Text>
                            </TouchableOpacity>
                        </View>
                    ) :
                        (<Text></Text>)
                }


                {
                    !repayNow ? (<View className="h-[3px] bg-gray-100 w-full my-3" />) : (<Text></Text>)
                }


                <View className="flex-row items-center bg-[#F9F9FF] px-4 py-2 gap-1 rounded-[12px]">
                    <Caution width={20} height={20} />
                    <Text className="text-[12px] font-familjen text-[#1E125C] w-[85%]">Note that the repayment amount will be repaid in order of the due date.</Text>
                </View>

                {
                    !repayNow ? (
                        <View className="flex-1 px-[3%] bg-white mt-[5%]">
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={loanData}
                                contentContainerStyle={{ paddingBottom: 5 }}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => {
                                    return (
                                        <View className="w-[100%] border border-[#ECECEC] bg-white px-4 py-[5%] rounded-[20px] mb-5 gap-4">
                                            <View className="flex-row w-full items-center justify-between">
                                                <Text className="text-[12px] font-familjen text-[#636A67]">Royal Settle Loan</Text>
                                                <Pressable onPress={() => viewDetails(item)} className="flex-row items-center gap-2">
                                                    <Text className="font-familjen-semibold text-[14px]">Details</Text>
                                                    <DetsArr width={8} height={8} />
                                                </Pressable>
                                            </View>

                                            <View className="flex-row items-center justify-between">
                                                <Text className="font-familjen-bold text-[16px]">N{item.amt}</Text>
                                                <Text className="text-[#141414] text-[14px] font-familjen-semibold">{item.date}</Text>
                                            </View>
                                        </View>
                                    );
                                }}
                            />
                        </View>
                    ) : (
                        <View className="flex-1">
                            <View className="mt-7 border border-[#ECECEC] rounded-[24px] px-5 py-8">
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-[14px] font-familjen-semibold text-[#141414]">How to Repay?</Text>
                                    <View className="flex-row items-center gap-2">
                                        <Text className="text-[13px] font-familjen text-[#807C8D]">Repayment Instructions</Text>
                                        <DetsArr width={7} height={7} />
                                    </View>
                                </View>
                                {tenures.map((item) => {
                                    const isSelected = item.id === selectedTenure.id;

                                    return (
                                        <Pressable
                                            key={item.id}
                                            onPress={() => setSelectedTenure(item)}
                                            className={`flex-row items-center justify-between mt-8`}>
                                            <View className="flex-row items-center flex-wrap flex-1 pr-2">
                                                <Text className="text-[13px] font-familjen text-[#807C8D]">
                                                    {item.label}
                                                </Text>
                                            </View>

                                            {/* Radio Indicator */}
                                            <View className={`w-5 h-5 rounded-full border items-center justify-center ${isSelected ? 'border-emerald-500' : 'border-gray-300'}`}>
                                                {isSelected && (
                                                    <View className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                                                )}
                                            </View>
                                        </Pressable>
                                    );
                                })}
                            </View>
                        </View>
                    )}



                <Pressable
                    onPress={() => pay()}
                    className="w-full h-14 rounded-full bg-[#240046] items-center justify-center relative bottom-0"
                >
                    <Text className="text-[16px] font-familjen-bold text-[#FFFFFF]">
                        {repayNow ? "Make Payment" : "Repay Now"}
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Repayment;