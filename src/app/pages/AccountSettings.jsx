import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Edit from "@/assets/images/edit.svg";
import Key from "@/assets/images/key.svg";
import Security from "@/assets/images/security.svg";

const AccountSettings = ({ onBack }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-row items-center justify-between px-[5%] py-4">
                <TouchableOpacity
                    onPress={onBack}
                    className="w-10 h-10 bg-[#F4F4FB] rounded-full items-center justify-center border border-[#ECECEC]"
                >
                    <Ionicons name="chevron-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text className="text-[24px] font-familjen-medium leading-tight text-[#000]">Account settings</Text>
                <View className="w-10" />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                <View className="mt-6 px-[5%]">
                    <Text className="text-[14px] text-[#484473] font-familjen mb-4">Profile Preference</Text>

                    <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4">
                        <View className="flex-row items-center gap-4">
                            <View className="w-8 h-8 rounded-lg bg-[#EBE9F5] items-center justify-center">
                                <Edit width={30} height={30} />
                            </View>
                            <Text className="text-[16px] font-familjen text-[#15104D]">Edit profile</Text>
                        </View>
                        <Feather name="chevron-right" size={20} color="#666" />
                    </TouchableOpacity>

                    <Text className="text-[14px] text-[#484473] font-familjen-medium mt-8 mb-4">Security & Password</Text>

                    <View className="gap-6">
                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4">
                            <View className="flex-row items-center gap-4">
                                <View className="w-8 h-8 rounded-lg bg-[#EBE9F5] items-center justify-center">
                                    <View>
                                        <Key width={30} height={30} />
                                    </View>
                                </View>
                                <Text className="text-[16px] font-familjen-medium text-[#15104D]">Password settings</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4">
                            <View className="flex-row items-center gap-4">
                                <View className="w-8 h-8 rounded-lg bg-[#EBE9F5] items-center justify-center">
                                    <Security width={30} height={30} />
                                </View>
                                <Text className="text-[16px] font-familjen-medium text-[#15104D]">Security settings</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AccountSettings;
