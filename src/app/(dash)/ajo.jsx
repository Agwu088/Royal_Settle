import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { CommunityCard } from '@/components/communityCard';
import { ActiveTab } from '@/app/pages/ajo/ActiveTab';
import { PendingTab } from '@/app/pages/ajo/PendingTab';
import { CompletedTab } from '@/app/pages/ajo/CompletedTab';
import Ajos from '@/components/Ajos';

const Ajo = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [loading, setLoading] = useState(true);

    const tabs = ['All', 'Active', 'Pending', 'Completed'];

    useEffect(() => {
        const loadTime = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(loadTime);
    }, [])

    const sections = [
        { type: 'header', title: 'Weekly Community Ajo(s)' },
        {
            type: 'card',
            id: 1,
            title: "Community ajo",
            amount: "50,000",
            goal: "500,000",
            cycles: 10,
            frequency: "Weekly",
            slots: 4,
            filled: 8,
            total: 12
        },
        {
            type: 'card',
            id: 2,
            title: "Community ajo",
            amount: "50,000",
            goal: "500,000",
            cycles: 10,
            frequency: "Weekly",
            slots: 4,
            filled: 8,
            total: 12
        },
        { type: 'header', title: 'Monthly Community Ajo(s)' },
        {
            type: 'card',
            id: 3,
            title: "Community ajo",
            amount: "50,000",
            goal: "500,000",
            cycles: 10,
            frequency: "Monthly",
            slots: 4,
            filled: 8,
            total: 12
        },
        {
            type: 'card',
            id: 4,
            title: "Community ajo",
            amount: "50,000",
            goal: "500,000",
            cycles: 10,
            frequency: "Monthly",
            slots: 4,
            filled: 8,
            total: 12
        },
    ];

    const invitationData = [
        {
            id: 1,
            name: "Henny Sam",
            title: "sent you an Ajo invitation",
            slots: 4,
            amount: "50,000",
            goal: "500,000",
            cycles: 10,
            time: "1 min ago",
            status: "pending"
        },
        {
            id: 2,
            name: "Sam Larry",
            title: "sent you an Ajo invitation",
            slots: 7,
            amount: "20,000",
            goal: "100,000",
            cycles: 5,
            time: "5 min ago",
            status: "completed"
        },
        {
            id: 3,
            name: "Mike Abdul",
            title: "sent you an Ajo invitation",
            slots: 9,
            amount: "40,000",
            goal: "200,000",
            cycles: 4,
            time: "10 min ago",
            status: "pending"
        },
        {
            id: 4,
            name: "King Moses",
            title: "sent you an Ajo invitation",
            slots: 3,
            amount: "100,000",
            goal: "300,000",
            cycles: 16,
            time: "15 min ago",
            status: "completed"
        }

    ]

    const renderItem = ({ item }) => {
        if (item.type === 'header') {
            return (
                <View className="px-[5%] mb-4 mt-4">
                    <Text className="text-[12px] font-inter-medium text-[#000]">{item.title}</Text>
                </View>
            );
        }

        return (
            <View className="px-[5%] mb-4">
                <CommunityCard
                    title={item.title}
                    amount={item.amount}
                    goal={item.goal}
                    cycles={item.cycles}
                    frequency={item.frequency}
                    slots={item.slots}
                    filled={item.filled}
                    total={item.total}
                    id={item.id}
                />
            </View>
        );
    };

    const ListFooter = () => {
        if (activeTab === 'Active') {
            return <ActiveTab sections={sections} />;
        }
        if (activeTab === 'Pending') {
            return <PendingTab invitationData={invitationData} />;
        }
        if (activeTab === 'Completed') {
            return <CompletedTab invitationData={invitationData} />;
        }
        return null;
    };

    const dataToRender = activeTab === 'All' ? sections : [];
    const cards = invitationData.filter(item => item.status === 'pending');

    return (
        <SafeAreaView className="flex-1 bg-[#F9F9F9]">
            <View className="flex-1">
                {/* Header */}
                <View className="px-[5%] pt-2 pb-6">
                    <Text className="text-[24px] font-familjen-medium text-center text-[#000]">
                        {activeTab === 'All' ? 'Community Ajo(s)' : `${activeTab} Ajo(s)`}
                    </Text>
                </View>

                <View className="px-[5%] mb-8">
                    <View className="flex-row bg-[#EBEBF0] p-1 rounded-[20px]">
                        {tabs.map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                onPress={() => setActiveTab(tab)}
                                className={`flex-1 py-2 rounded-[16px] items-center justify-center ${activeTab === tab ? 'bg-[#F2F3FF] border-2 border-white' : ''}`}
                            >
                                <View>
                                    {tab === "Pending" && activeTab === "Pending" && cards.length > 0 && (
                                        <View className="bg-[#F0931B] rounded-full w-5 h-5 flex items-center justify-center absolute -top-5 -right-7">
                                            <Text className="text-[10px] text-white font-inter-medium">{cards.length}</Text>
                                        </View>
                                    )}
                                    <Text className={`text-[14px] font-familjen-semibold ${activeTab === tab ? 'text-[#240046]' : 'text-[#8E8E93]'}`}>
                                        {tab}
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        )
                        )}
                    </View>
                </View>

                {/* Search Section */}
                {activeTab === 'All' && (
                    <View className="px-[5%] mb-4 flex-row items-center justify-between">
                        <View className="w-[65%]">
                            <Text className="text-[16px] font-familjen-semibold text-[#000] mb-1">Join any Ajo of your choice</Text>
                            <Text className="text-[11px] text-[#666] font-inter-medium">Join and explore an already created ajo</Text>
                        </View>
                        <TouchableOpacity className="flex-row items-center bg-[#EBEBF0] px-4 py-2 rounded-[20px] gap-2">
                            <Ionicons name="search" size={18} color="#240046" />
                            <Text className="text-[#240046] text-[12px] font-poppins-bold">Search</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {loading ? <ActivityIndicator color="#000000" /> :

                    <Ajos
                        data={dataToRender}
                        item={renderItem}
                        listFooter={ListFooter}
                    />

                }
            </View>
        </SafeAreaView>
    )
}

export default Ajo;