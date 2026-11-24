import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import DetsArr from "@/assets/images/detsArrow";


const LoanCards = ({ data, tab }) => {
    return (
        <View className="flex-1 px-[3%] py-[5%] bg-white mt-[5%]">
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                contentContainerStyle={{ paddingBottom: 60 }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View className="w-[100%] border border-[#ECECEC] bg-white px-4 py-[5%] rounded-[20px] mb-5">
                            <View className="flex-row w-full items-center justify-between">
                                <Text className="text-[12px] font-familjen text-[#636A67]">{tab === "Loan History" ? "Due Amount" : "Repayment Amount"}</Text>
                                <View className="flex-row items-center gap-2">
                                    <Text className="font-familjen-semibold text-[14px]">Details</Text>
                                    <DetsArr width={8} height={8} />
                                </View>
                            </View>
                            <Text className="font-familjen-bold text-[16px] my-3">N{item.amt}</Text>
                            <View className="flex-row items-end justify-between">
                                <Text className="text-[#636A67] text-[12px]">{tab === "Loan History" ? "Due Date: " : "Repayment Date: "} <Text></Text>{item.date}</Text>
                                {
                                    tab === "Loan History" ? (
                                        <TouchableOpacity className="bg-[#240046] px-[25px] py-3 rounded-full">
                                            <Text className="text-[7.65px] text-white font-familjen-bold">Repay</Text>
                                        </TouchableOpacity>
                                    ) :
                                        (<View></View>)
                                }
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    )
};

export default LoanCards;