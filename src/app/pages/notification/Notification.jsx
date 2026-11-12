import { Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Unread from '@/app/pages/notification/Unread';
import { useRouter } from 'expo-router';
import NotificationHeader from '@/components/notification/NotificationHeader';


const Notification = () => {
    const [activeTab, setActiveTab] = useState('Unread');
    const tabs = ['Unread', 'All'];
    const router = useRouter();

    const notifications = [
        {
            id: '1',
            section: 'Today',
            title: 'KYC Application Approval',
            message: 'Your KYC status has been upgraded to tier 4 successfully. You can now proceed to create and...',
            time: '12:10 PM',
            isUnread: true,
            status: "approved"
        },
        {
            id: '2',
            section: 'Yesterday',
            title: 'KYC Application Denied',
            message: "We couldn't verify your NIN because the document was blurry. Please try again for a faster verification...",
            time: '10:02 AM',
            isUnread: false,
            status: "denied"
        },
        {
            id: '3',
            section: 'Yesterday',
            title: 'KYC Application Pending Review',
            message: 'We are currently reviewing your documents to ensure everything is in order. This typically takes...',
            time: '07:55 am',
            isUnread: false,
            status: "pending"
        },
    ];

    return (
        <SafeAreaView className="flex-1 bg-[#F5F5F5]" edges={['top']}>
            <View className="px-[5%]">
                <NotificationHeader />

                <View className="flex-row items-center bg-[#E8E8E8] p-1.5 rounded-full w-full m-auto">
                    {/* Unread Tab */}
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            className={`flex-1 py-3 rounded-full items-center justify-center ${activeTab === tab ? 'bg-[#F2F3FF] border-2 border-white' : 'bg-transparent'}`}
                        >
                            <Text className={`font-familjen-semibold text-base ${activeTab === tab ? 'text-[#240046]' : 'text-gray-500'}`}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View className="bg-white flex-1 mt-[6%] px-[3%] py-[5%]">
                <Unread
                    tab={activeTab}
                    notifications={notifications}
                />
            </View>
        </SafeAreaView>
    )
}

export default Notification;