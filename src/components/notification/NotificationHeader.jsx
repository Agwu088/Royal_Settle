import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const NotificationHeader = () => {
    const router = useRouter();
    return (
        <View className="flex-row items-center mt-4 mb-6 gap-[25%]">
            <TouchableOpacity
                className="w-12 h-12 rounded-full border border-gray-200 items-center justify-center"
                onPress={() => router.back()}
            >
                <Entypo name="chevron-small-left" size={24} color="#141414" />
            </TouchableOpacity>

            <Text className="text-[24px] font-familjen-semibold text-center text-[#000] leading-tight">Notification</Text>
        </View>
    )
}

export default NotificationHeader

const styles = StyleSheet.create({})