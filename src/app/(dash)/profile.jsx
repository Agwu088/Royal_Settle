import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import AccountSettings from '@/components/AccountSettings';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';

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
                <Text className="text-[24px] font-[600] font-poppins-medium text-[#000]">Settings</Text>
                <View className="w-10" />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
                {/* Profile Info */}
                <View className="items-center mt-9">
                    <View className="w-20 h-20 bg-[#F4F4FB] rounded-full items-center justify-center mb-3">
                        <Ionicons name="person" size={40} color="#240046" />
                    </View>
                    <Text className="text-[18px] font-[600] text-[#240046] font-poppins-medium">Henry Makanakii</Text>
                    <TouchableOpacity className="flex-row items-center gap-1 mt-1">
                        <MaterialIcons name="edit" size={14} color="#666" />
                        <Text className="text-[12px] text-[#666] font-inter">Edit profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Admin Request Banner */}
                <View className="mx-[5%] mt-8 bg-[#F2F3FF] p-4 rounded-full flex-row items-center justify-between">
                    <View className="flex-1 mr-4">
                        <Text className="text-[14px] font-[600] text-[#000] font-poppins-medium">Admin request form</Text>
                        <Text className="text-[11px] text-[#666] font-inter mt-1">To be an admin that earns. kindly fill this</Text>
                    </View>
                    <TouchableOpacity className="bg-[#240046] px-6 py-2 rounded-full">
                        <Text className="text-white text-[12px] font-[500] font-inter">Apply</Text>
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
                                <Ionicons name="person" size={22} color="#240046" />
                                <Text className="text-[15px] font-[500] text-[#240046] font-inter">Account Settings</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <MaterialCommunityIcons name="face-man-shimmer" size={22} color="#240046" />
                                <Text className="text-[15px] font-[500] text-[#240046] font-inter">KYC Status</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>
                    </View>

                    {/* Preferences */}
                    <Text className="text-[13px] text-[#666] font-inter mt-8 mb-4">Preferences</Text>
                    <View className="gap-6">
                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <Ionicons name="notifications" size={22} color="#9090A7" />
                                <Text className="text-[15px] font-[500] text-[#240046] font-inter">Notifications</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <MaterialCommunityIcons name="palette" size={22} color="#240046" />
                                <Text className="text-[15px] font-[500] text-[#240046] font-inter">Appearance</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>
                    </View>

                    {/* Resources */}
                    <Text className="text-[13px] text-[#666] font-inter mt-8 mb-4">Resources</Text>
                    <View className="gap-6">
                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <Ionicons name="paper-plane" size={22} color="#9090A7" />
                                <Text className="text-[15px] font-[500] text-[#240046] font-inter">Share App</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <MaterialIcons name="support-agent" size={22} color="#4A4A6A" />
                                <Text className="text-[15px] font-[500] text-[#240046] font-inter">Contact Support</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <Ionicons name="star" size={22} color="#240046" />
                                <Text className="text-[15px] font-[500] text-[#240046] font-inter">App Rating</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-5">
                            <View className="flex-row items-center gap-4">
                                <MaterialIcons name="logout" size={22} color="#4A4A6A" />
                                <Text className="text-[15px] font-[500] text-[#240046] font-inter">Sign Out</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Footer */}
                <View className="items-center mt-12 opacity-50">
                    <View className="w-10 h-10 bg-[#D1D1E9] rounded-tr-[20px] rounded-bl-[20px] mb-2" />
                    <Text className="text-[12px] text-[#D1D1E9] font-inter">RoyalsettleLtd</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;