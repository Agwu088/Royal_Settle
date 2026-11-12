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
import Glob from "@/assets/images/glob.svg";
import Check from "@/assets/images/check.svg";
import { useRouter } from 'expo-router';


const NotificationDetails = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const item = params.itemData ? JSON.parse(params.itemData) : null;

    const instructions = [
        {
            title: 'Ensure good natural lighting',
            description: 'Avoid using camera flash to prevent glare.',
            isActive: false,
        },
        {
            title: 'Keep within the frame',
            description: 'Make sure all the corners of the document are visible.',
            isActive: true,
        },
        {
            title: 'Use a dark background',
            description: 'Place your ID/document on a flat, contrasting surface.',
            isActive: false,
        },
    ];


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
                    item.status === "pending" || item.status === "denied" ?
                        (<View className="bg-[#DFE2FF99] p-5 rounded-[10px] mt-7">
                            <Text className="text-[#1E125C] font-poppins text-[12px]">{item.message}</Text>
                        </View>) : ""
                }

                {
                    item.status === "pending" &&
                    (<View>
                        <Text className="my-[7%]">What to expect</Text>
                        <View className="p-5 rounded-[20px] border border-[#EDE9F0] gap-10">
                            <View className="flex-row items-center gap-2">
                                <Bell width={25} height={25} />
                                <Text className="w-[90%] text-[#715987]">You will receive a push notification once your identity is verified.</Text>
                            </View>

                            <View className="flex-row items-center gap-2">
                                <Email width={25} height={25} />
                                <Text className="w-[90%] text-[#715987]">You will receive a push notification once your identity is verified.</Text>
                            </View>

                            <View className="flex-row items-center gap-2">
                                <Lock width={25} height={25} />
                                <Text className="w-[90%] text-[#715987]">You will receive a push notification once your identity is verified.</Text>
                            </View>
                        </View>
                    </View>)
                    ||
                    item.status === "approved" &&
                    (<View>
                        <View className="p-5 rounded-[20px] border border-[#EDE9F0] mt-[5%]">
                            <View className="gap-5">
                                <Text className="w-[90%] text-[#715987] font-poppins text-[14px]">Hello Henry,</Text>
                                <Text className="w-[90%] text-[#715987] font-poppins text-[14px]">Your KYC status has been upgraded to tier 4 successfully. You can now proceed to create and join an ajo group.</Text>
                                <Text className="w-[90%] text-[#715987] font-poppins text-[14px]">Please contact support if you have any concerns.</Text>
                                <Text className="w-[90%] text-[#715987] font-poppins text-[14px]">Thank you, Royalsettle.</Text>
                            </View>
                        </View>
                    </View>) ||
                    item.status === "denied" &&
                    (<View>
                        <View className="flex-row items-center gap-2">
                            <Glob width={20} height={20} />
                            <Text className="my-[5%] font-familjen-semibold">Tips for success</Text>
                        </View>
                        <View className="pt-4">
                            {instructions.map((item, index) => (
                                <View key={index} className={`flex-row items-start px-5 py-8 mb-4 rounded-3xl border bg-white border-[#EDE9F0] gap-3`}>
                                    {/* Icon Container */}
                                    <Check width={30} height={30} />

                                    {/* Text Container */}
                                    <View className="flex-1">
                                        <Text className="text-[#141414] font-familjen-semibold text-base mb-1">
                                            {item.title}
                                        </Text>
                                        <Text className="text-[#715987] text-[12px] leading-relaxed">
                                            {item.description}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>)
                }

                <TouchableOpacity onPress={() => router.back()} className={`bg-[#240046] py-[20px] rounded-full relative ${item.status === "pending" && "top-[23%]" || item.status === "approved" && "top-[40%]" || item.status === "denied" && "top-[4%]"}`}>
                    <Text className="text-white text-[16px] font-familjen-bold text-center">
                        {
                            item.status === "pending" && "Back" ||
                            item.status === "approved" && "Okey" ||
                            item.status === "denied" && "Re-upload Document"
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NotificationDetails;