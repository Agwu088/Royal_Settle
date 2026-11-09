import { Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import Unread from '@/components/notification/Unread';
import All from '@/components/notification/All';
import { useRouter } from 'expo-router';


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
        },
        {
            id: '2',
            section: 'Yesterday',
            title: 'KYC Application Denied',
            message: "We couldn't verify your NIN because the document was blurry. Please try again for a faster verification...",
            time: '10:02 AM',
            isUnread: false,
        },
        {
            id: '3',
            section: 'Yesterday',
            title: 'KYC Application Pending Review',
            message: 'We are currently reviewing your documents to ensure everything is in order. This typically takes...',
            time: '07:55 am',
            isUnread: false,
        },
    ];

    return (
        <SafeAreaView className="flex-1 bg-[#F5F5F5]" edges={['top']}>
            <View className="px-[5%]">
                <View className="flex-row items-center mt-4 mb-6 gap-[25%]">
                    <TouchableOpacity
                        className="w-12 h-12 rounded-full border border-gray-200 items-center justify-center"
                        onPress={() => router.back()}
                    >
                        <Entypo name="chevron-small-left" size={24} color="#141414" />
                    </TouchableOpacity>

                    <Text className="text-[24px] font-familjen-semibold text-center text-[#000] leading-tight">Notification</Text>
                </View>

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
                {activeTab === "Unread" ?
                    (<Unread notifications={notifications} />)
                    :
                    (<All notifications={notifications} />)
                }
            </View>
        </SafeAreaView>
    )
}

export default Notification;