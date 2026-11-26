import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationHeader from '@/components/NavigationHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Union from "@/assets/images/union";
import Access from "@/assets/images/access";
import Kuda from "@/assets/images/kuda";
import Paga from "@/assets/images/paga";
import Copy from "@/assets/images/copy";
import Wema from "@/assets/images/wema";
import Uba from "@/assets/images/uba";
import Sterling from "@/assets/images/sterling";
import Alat from "@/assets/images/alat";
import Gold from "@/assets/images/gold";
import Vim from "@/assets/images/vim";
import Zenith from "@/assets/images/zenith";
import Gt from "@/assets/images/gt";
import Fcmb from "@/assets/images/fcmb";

const RepaymentComplete = () => {
    return (
        <SafeAreaView className="flex-1" edges={['top']}>
            <View className="px-[3%]">
                <NavigationHeader title={"Repayment"} gap={100} />
            </View>
            <View className="px-[3%] pt-[5%] pb-[6%] bg-[#ffffff] flex-1">
                <Text className="font-familjen-semibold text-[16px]">Repayment Amount (<MaterialCommunityIcons name="currency-ngn" size={15} color="black" />)</Text>
                <View className="flex-row items-end gap-2">
                    <Text className="font-familjen-semibold text-[#141414] placeholder:text-[44px]">100,000</Text>
                </View>

                <View className="bg-[#ECEEFF] px-5 py-4 gap-1 rounded-[12px] mt-5 gap-4">
                    <View>
                        <Text className="text-[12px] font-familjen text-[#706A9D]">Bank Name</Text>
                        <Text className="text-[14px] font-familjen-medium text-[#1E125C]">Kuda Bank</Text>
                    </View>

                    <View className="flex-row items-center justify-between">
                        <View>
                            <Text className="text-[12px] font-familjen text-[#706A9D]">Personal Loan Repayment Transfer Number</Text>
                            <Text className="text-[14px] font-familjen-medium text-[#1E125C]">24541256525</Text>
                        </View>
                        <Copy width={25} height={25} />
                    </View>
                    <View>
                        <Text className="text-[12px] font-familjen text-[#706A9D]">Beneficiary Name</Text>
                        <Text className="text-[14px] font-familjen-medium text-[#1E125C]">(Royal Settle) Tosin Atere</Text>
                    </View>
                </View>
                <View className="mt-5">
                    <Text className="text-[10px] font-familjen">You can repay your loan to
                        <Text className="text-[#1E125C]">(Royal Settle) Kuda MFB</Text> by transferring
                        <Text className="text-[#1E125C]">via mobile bank app</Text>
                        money to the transfer number above. It is recommended to use any bank listed below.</Text>
                </View>
                <View className="flex-row mt-7 justify-between">
                    <Union width={60} height={60} />
                    <Access width={60} height={60} />
                    <Kuda width={60} height={60} />
                    <Paga width={60} height={60} />
                    <Uba width={60} height={60} />
                </View>
                <View className="flex-row mt-3 items-center justify-between">
                    <Sterling width={60} height={60} />
                    <Wema width={60} height={60} />
                    <Gold width={60} height={60} />
                    <Vim width={60} height={60} />

                </View>
                <View className="flex-row mt-7 items-center justify-between">
                    <Gt width={60} height={60} />
                    <Alat width={60} height={60} />
                    <Zenith width={60} height={60} />
                    <Fcmb width={60} height={60} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RepaymentComplete;