import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import AccountSettings from '@/app/pages/AccountSettings';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';
import Edit from "@/assets/images/edit.svg";
import Profi from "@/assets/images/profile.svg";
import Profilee from "@/assets/images/profilee.svg";
import Logout from "@/assets/images/logout.svg";
import Ranking from "@/assets/images/ranking.svg";
import Msg from "@/assets/images/messages.svg";
import Swatch from "@/assets/images/swatch.svg";
import Notification from "@/assets/images/notification.svg";
import Note from "@/assets/images/note.svg";
import Send from "@/assets/images/send.svg";
import Logomark from "@/assets/images/logomark.svg";

const Profile = () => {
    const [showAccountSettings, setShowAccountSettings] = useState(false);

    if (showAccountSettings) {
        return <AccountSettings onBack={() => setShowAccountSettings(false)} />;
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-row items-center justify-between px-[5%] py-4">
                <TouchableOpacity className="w-10 h-10 bg-[#F4F4FB] rounded-full items-center justify-center border border-[#ECECEC]">
                    <Ionicons name="chevron-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text className="text-[24px] font-familjen-medium text-[#000]">Settings</Text>
                <View className="w-10" />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}>

                {/* Profile Info */}
                <View className="items-center mt-9">
                    <Profi width={60} height={60} />
                    <Text className="text-[18px] text-[#240046] font-familjen-medium mt-5">Henry Makanakii</Text>
                    <TouchableOpacity className="flex-row items-center gap-1 mt-1">
                        <Edit width={30} height={30} />
                        <Text className="text-[12px] text-[#666] text-[#484473] font-familjen">Edit profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Admin Request Banner */}
                <View className="mx-[5%] mt-8 bg-[#F2F3FF] p-6 rounded-full flex-row items-center justify-between">
                    <View className="flex-1 mr-4">
                        <Text className="text-[14px] text-[#000] font-familjen-semibold">Admin request form</Text>
                        <Text className="text-[11px] text-[#666] font-inter-medium mt-1">To be an admin that earns. kindly fill this</Text>
                    </View>
                    <TouchableOpacity className="bg-[#240046] px-6 py-2 rounded-full">
                        <Text className="text-white text-[12px] font-familjen-medium">Apply</Text>
                    </TouchableOpacity>
                </View>

                {/* Settings List */}
                <View className="mt-10 px-[5%]">
                    {/* General */}
                    <View className="gap-6 mt-5">
                        <TouchableOpacity
                            onPress={() => setShowAccountSettings(true)}
                            className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4"
                        >
                            <View className="flex-row items-center gap-4">
                                <Profilee width={30} height={30} />
                                <Text className="text-[16px] text-[#240046] font-familjen">Account Settings</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <Note width={30} height={30} />
                                <Text className="text-[16px] text-[#240046] font-familjen">KYC Status</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>
                    </View>

                    {/* Preferences */}
                    <Text className="text-[14px] text-[#666] font-familjen mt-8 mb-4">Preferences</Text>
                    <View className="gap-6">
                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <Notification width={30} height={30} />
                                <Text className="text-[16px] text-[#240046] font-familjen">Notifications</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <Swatch width={30} height={30} />
                                <Text className="text-[16px] text-[#240046] font-familjen">Appearance</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>
                    </View>

                    {/* Resources */}
                    <Text className="text-[14px] text-[#666] font-familjen mt-8 mb-4">Resources</Text>
                    <View className="gap-6">
                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <Send width={30} height={30} />
                                <Text className="text-[16px] text-[#240046] font-familjen">Share App</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <Msg width={30} height={30} />
                                <Text className="text-[16px] text-[#240046] font-familjen">Contact Support</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <Ranking width={30} height={30} />
                                <Text className="text-[16px] text-[#240046] font-familjen">App Rating</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <Logout width={30} height={30} />
                                <Text className="text-[16px] text-[#240046] font-familjen">Sign Out</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Footer */}
                <View className="items-center mt-12">
                    <Logomark width={200} height={200} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;