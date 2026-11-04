import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function NotActive({ btnAction, title, subTitle, status, msg, btnTitle, icon, icon0 }) {
    const Icon1 = icon;
    const Icon2 = icon0;

    return (
        <View className="bg-white mx-[5%] rounded-[24px] px-6 pt-6 pb-16 mt-4 flex-1 min-h-[500px] relative shadow-sm">
            {/* Header Section */}
            {title && subTitle &&
                <View className="mb-12">
                    <Text className="text-[16px] font-familjen-semibold text-[#000] mb-1">{title}</Text>
                    <Text className="text-[11px] text-[#666] font-inter-medium">{subTitle}</Text>
                </View>
            }

            {/* Empty State */}
            <View className="items-center justify-center flex-1 mt-10">
                <Icon1 width={120} height={120} />
                <Text className="text-[16px] font-familjen-semibold text-[#000] mt-[10%] mb-2">{status}</Text>
                <Text className="text-[12px] text-[#666] font-inter-medium">{msg}</Text>
            </View>

            {/* Floating Action Button */}
            <View className="flex-row justify-end">
                <View className="w-[50%]">
                    <TouchableOpacity
                        className="flex-row items-center bg-[#F2F3FF] px-5 py-3 rounded-[24px] shadow-sm gap-2 border-2 border-white"
                        onPress={btnAction}
                    >
                        <Icon2 width={30} height={30} />
                        <Text className="text-[#240046] text-[14px] font-poppins-semibold">{btnTitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}