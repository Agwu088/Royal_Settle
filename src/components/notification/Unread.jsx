import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Logo from "@/assets/images/slogo.svg"

const Unread = ({ notifications }) => {

    const renderSection = (sectionTitle) => {
        const sectionItems = notifications.filter((item) => item.section === sectionTitle);
        if (sectionItems.length === 0) return null;

        return (
            <View key={sectionTitle} className="mb-6">
                <Text className="text-[14px] font-familjen-semibold text-[#141414] mb-3 px-1">{sectionTitle}</Text>
                {sectionItems.map((item) => (
                    <View
                        key={item.id}
                        className="bg-white rounded-3xl p-5 mb-4 border-2 border-gray-100"
                    >
                        {/* Top Row: Icon + Title */}
                        <View className="flex-row items-center mb-3">
                            <View className="relative">
                                <Logo width={35} height={35} />
                                {/* </View> */}
                                <View className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                            </View>
                            <Text className="ml-3 font-familjen-semibold text-[14px] text-[#141414]">{item.title}</Text>
                        </View>

                        {/* Message Body */}
                        <Text className="text-[#240046A6] text-[12px] leading-relaxed font-poppins mb-4 pr-[3%]">
                            {item.message}
                        </Text>

                        {/* Divider Line */}
                        <View className="h-[1px] bg-gray-100 w-full mb-3" />

                        {/* Bottom Row: Timestamp + View Button */}
                        <View className="flex-row items-center justify-between">
                            <Text className="text-[#636A67] text-[11px] font-inter">{item.time}</Text>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                className="bg-[#F2F3FF] px-4 py-1.5 rounded-full flex-row items-center border border-[#D9D9D9]"
                            >
                                <Text className="text-[#1E125C] font-poppins-medium text-[11.2px] mr-1">View</Text>
                                <Ionicons name="chevron-forward" size={12} color="#1e1b4b" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        );
    };

    return (
        <View className="flex-1">
            <ScrollView className="flex-1 px-2 pt-4" showsVerticalScrollIndicator={false}>
                {renderSection('Today')}
                {renderSection('Yesterday')}
            </ScrollView>
        </View>
    )
}

export default Unread;