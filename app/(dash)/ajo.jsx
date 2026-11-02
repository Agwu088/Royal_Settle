import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { CommunityCard } from '../../components/communityCard';
import { ActiveTab } from '../../components/ActiveTab';
import { PendingTab } from '../../components/PendingTab';
import { CompletedTab } from '../../components/CompletedTab';

const Ajo = () => {
    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Active', 'Pending', 'Completed'];

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

    const renderItem = ({ item }) => {
        if (item.type === 'header') {
            return (
                <View className="px-[5%] mb-4 mt-4">
                    <Text className="text-[12px] font-[500] text-[#000]">{item.title}</Text>
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

    const ListHeader = () => (
        <>
            <View className="px-[5%] mb-8">
                <View className="flex-row bg-[#EBEBF0] p-1 rounded-[20px]">
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            className={`flex-1 py-2 rounded-[16px] items-center justify-center ${activeTab === tab ? 'bg-white shadow-sm' : ''}`}
                        >
                            <Text className={`text-[14px] font-[500] ${activeTab === tab ? 'text-[#240046]' : 'text-[#8E8E93]'}`}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Search Section */}
            {activeTab === 'All' && (
                <View className="px-[5%] mb-4 flex-row items-center justify-between">
                    <View className="w-[65%]">
                        <Text className="text-[16px] font-[600] text-[#000] mb-1">Join any Ajo of your choice</Text>
                        <Text className="text-[11px] text-[#666]">Join and explore an already created ajo</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center bg-[#EBEBF0] px-4 py-2 rounded-[20px] gap-2">
                        <Ionicons name="search" size={18} color="#240046" />
                        <Text className="text-[#240046] text-[12px] font-poppins-bold font-[600]">Search</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    );

    const ListFooter = () => {
        if (activeTab === 'Active') {
            return <ActiveTab />;
        }
        if (activeTab === 'Pending') {
            return <PendingTab />;
        }
        if (activeTab === 'Completed') {
            return <CompletedTab />;
        }
        return null;
    };

    const dataToRender = activeTab === 'All' ? sections : [];

    return (
        <SafeAreaView className="flex-1 bg-[#F9F9F9]">
            <View className="flex-1">
                {/* Header */}
                <View className="px-[5%] pt-2 pb-6">
                    <Text className="text-[24px] font-[600] text-center text-[#000]">
                        {activeTab === 'All' ? 'Community Ajo(s)' : `${activeTab} Ajo(s)`}
                    </Text>
                </View>

                <FlatList
                    data={dataToRender}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.id ? item.id.toString() : `header-${index}`}
                    ListHeaderComponent={ListHeader}
                    ListFooterComponent={ListFooter}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Ajo;