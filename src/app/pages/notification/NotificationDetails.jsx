import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationHeader from '@/components/notification/NotificationHeader';
import Pending from "@/assets/images/pending.svg";
import Approved from "@/assets/images/approved.svg";
import Denied from "@/assets/images/denied.svg";
import Bell from "@/assets/images/bell.svg";
import Lock from "@/assets/images/lock.svg";
import Email from "@/assets/images/email.svg";
import { useRouter } from 'expo-router';

const NotificationDetails = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const item = params.itemData ? JSON.parse(params.itemData) : null;


    return (
        <SafeAreaView className="flex-1 bg-[#F5F5F5]" edges={['top']}>
            <View className="px-[5%]">
                <NotificationHeader />
            </View>
            <View className="flex-1 bg-white px-5 pt-10 mt-[5%]">
                <View className="items-center">
                    {
                        item.status === "pending" && <Pending width={70} height={70} /> ||
                        item.status === "approved" && <Approved width={70} height={70} /> ||
                        item.status === "denied" && <Denied width={70} height={70} />
                    }

                    <Text className="text-[#240046] font-poppins-semibold text-[18px] mt-3">
                        {
                            item.status === "pending" && "Pending Review" ||
                            item.status === "approved" && "KYC Verification Approved!" ||
                            item.status === "denied" && "Action Required"
                        }
                    </Text>
                </View>
                {
                    item.status === "pending" || item.status === "denied" ? (
                        <View className="bg-[#DFE2FF99] p-5 rounded-[10px] mt-7">
                            <Text className="text-[#1E125C] font-poppins">{item.message}</Text>
                        </View>) : ""
                }

                {
                    item.status === "pending" &&
                    (<View>
                        <Text className="my-[7%]">What to expect</Text>
                        <View className="p-5 rounded-[20px] border border-[#EDE9F0]">
                            <View className="flex-row items-center gap-2">
                                <Bell width={25} height={25} />
                                <Text className="w-[90%] text-[#A697B4]">You will receive a push notification once your identity is verified.</Text>
                            </View>

                            <View className="flex-row items-center gap-2 mt-[10%]">
                                <Email width={25} height={25} />
                                <Text className="w-[90%] text-[#A697B4]">You will receive a push notification once your identity is verified.</Text>
                            </View>

                            <View className="flex-row items-center gap-2 mt-[10%]">
                                <Lock width={25} height={25} />
                                <Text className="w-[90%] text-[#A697B4]">You will receive a push notification once your identity is verified.</Text>
                            </View>
                        </View>
                    </View>)
                    ||
                    item.status === "approved" && (<View>
                        <View className="p-5 rounded-[20px] border border-[#EDE9F0] mt-[5%]">
                            <View className="gap-5">
                                <Text className="w-[90%] text-[#A697B4] font-poppins text-[14px]">Hello Henry,</Text>
                                <Text className="w-[90%] text-[#A697B4] font-poppins text-[14px]">Your KYC status has been upgraded to tier 4 successfully. You can now proceed to create and join an ajo group.</Text>
                                <Text className="w-[90%] text-[#A697B4] font-poppins text-[14px]">Please contact support if you have any concerns.</Text>
                                <Text className="w-[90%] text-[#A697B4] font-poppins text-[14px]">Thank you, Royalsettle.</Text>
                            </View>
                        </View>
                    </View>) ||
                    item.status === "denied" && (<View>
                        <Text>Action Required</Text>
                    </View>)
                }

                <TouchableOpacity onPress={() => router.back()} className="bg-[#240046] py-[20px] rounded-full relative top-[25%]">
                    <Text className="text-white text-[16px] font-familjen-bold text-center">Back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NotificationDetails;