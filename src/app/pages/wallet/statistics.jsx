import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

// Helper component for drawing precise CSS pie chart slices in React Native
const PieSlice = ({ color, startAngle, sweepAngle, size = 210 }) => {
    // If sweep > 180, we need two halves, but our slices are 65% (234deg), 20% (72deg), 15% (54deg)
    // We will just use the base circle for the 65% large slice so we only need to draw the <180 ones
    return (
        <View
            style={{
                position: 'absolute',
                width: size,
                height: size,
                borderRadius: size / 2,
                transform: [{ rotate: `${startAngle}deg` }],
            }}
        >
            <View
                style={{
                    width: size,
                    height: size / 2,
                    overflow: 'hidden',
                    position: 'absolute',
                    top: 0,
                }}
            >
                <View
                    style={{
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        backgroundColor: color,
                        transform: [{ rotate: `${sweepAngle}deg` }],
                        transformOrigin: '50% 50%',
                        top: 0,
                        // React native hack to pivot at the exact center bottom of the half-circle container
                        marginTop: 0,
                    }}
                />
            </View>
        </View>
    );
};

const Statistics = () => {
    // Basic paths for the 3-slice pie chart
    // A production app would likely use a chart library, but we can draw static paths
    // for this specific visual requirement since it's static in the design
    return (
        <SafeAreaView className="flex-1 bg-[#F5F5F5]">
            <View className="flex-1">
                {/* Header */}
                <View className="flex-row items-center justify-between px-[5%] mt-4 mb-6">
                    <TouchableOpacity
                        className="w-10 h-10 rounded-full border border-gray-200 items-center justify-center bg-white"
                        onPress={() => router.back()}
                    >
                        <Entypo name="chevron-small-left" size={24} color="#141414" />
                    </TouchableOpacity>

                    <Text className="text-[24px] font-[500] text-center text-[#000] leading-tight">Statistics</Text>

                    <TouchableOpacity className="w-10 h-10 items-center justify-center">
                        <Entypo name="dots-three-horizontal" size={20} color="#141414" />
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                    {/* Top Balance Section */}
                    <View className="items-center mb-6">
                        <View className="bg-white border border-gray-100 rounded-full px-4 py-1.5 mb-2 shadow-sm">
                            <Text className="text-[12px] font-[500] font-inter text-[#333]">Cashflow Activity</Text>
                        </View>

                        <View className="flex-row items-start justify-center">
                            <Text className="text-[20px] font-bold text-[#141414] mt-2 mr-1">₦</Text>
                            <Text className="text-[44px] font-semibold font-inter text-[#141414] tracking-tight">920,832.45</Text>
                            <View className="bg-[#DCFCE7] px-2 py-1 rounded-md ml-2 mt-4">
                                <Text className="text-[10px] text-[#00C853] font-bold">Active</Text>
                            </View>
                        </View>
                    </View>

                    {/* Custom Pie Chart Area */}
                    <View className="items-center justify-center my-6 relative h-[250px] w-full">

                        <View className="relative w-[210px] h-[210px] items-center justify-center">
                            {/* Base drop shadow */}
                            <View className="absolute w-[180px] h-[180px] bg-black/20 shadow-2xl rounded-full top-[20px]" style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 15 }, shadowOpacity: 0.3, shadowRadius: 20 }} />

                            {/* The Pie Chart Container */}
                            <View className="w-[210px] h-[210px] rounded-full relative">
                                {/* Base Background (Used for the 65% Slice) */}
                                {/* 65% Slice (Darkest Purple/Black) */}
                                <PieSlice color="#8d73cbff" startAngle={-110} sweepAngle={0} />

                                {/* 15% Slice (Light Purple/Grey) */}
                                {/* Sweeps 54 degrees (15% of 360). Start angle offset to match image */}
                                <PieSlice color="#675787" startAngle={16} sweepAngle={0} />

                                {/* 20% Slice (Medium Purple) */}
                                {/* Sweeps 72 degrees (20% of 360). Starts right after the 15% slice (16 + 54 = 70) */}
                                <PieSlice color="#45118A" startAngle={70} sweepAngle={0} />
                            </View>
                        </View>

                        {/* Labels positioned precisely around the chart */}
                        <View className="absolute left-[3%] top-[60%]">
                            <Text className="text-[24px] font-[500] text-[#141414] leading-tight">65%</Text>
                            <Text className="text-[14px] text-gray-500 w-[80px]">Daily essentials</Text>
                        </View>

                        <View className="absolute right-[0%] bottom-[10%] items-start">
                            <Text className="text-[24px] font-[500] text-[#141414] leading-tight">20%</Text>
                            <Text className="text-[14px] text-gray-500">Electricity</Text>
                        </View>

                        <View className="absolute right-[6%] top-[5%] items-start">
                            <Text className="text-[24px] font-[500] text-[#141414] leading-tight">15%</Text>
                            <Text className="text-[14px] text-gray-500">Others</Text>
                        </View>
                    </View>

                    {/* Congratulations Banner */}
                    <View className="mx-[5%] bg-white rounded-2xl px-4 py-6 flex-row items-center mb-6 border border-gray-100">
                        <View className="w-10 h-10 items-center justify-center mr-3">
                            {/* Award badge using vector icons stacked */}
                            <View className="items-center justify-center relative">
                                <MaterialCommunityIcons name="ribbon" size={24} color="#3D1273" className="absolute top-3" />
                                <MaterialCommunityIcons name="star-circle" size={24} color="#3D1273" className="z-10 bg-white rounded-full" />
                            </View>
                        </View>
                        <View className="flex-1 text-wrap pr-2">
                            <Text className="text-[16px] font-[600] text-[#141414] mb-1">Congratulations!</Text>
                            <Text className="text-[11px] text-[#636A67] leading-tight">You managed to save 1.2% on your expenses from last month</Text>
                        </View>
                    </View>

                    {/* Summary Cards Grid */}
                    <View className="px-[5%] flex-row flex-wrap justify-between">
                        {/* Total Income */}
                        <View className="w-[48%] bg-white rounded-3xl p-5 mb-4 border border-gray-100 h-[140px] justify-between">
                            <View className="flex-row justify-between items-start">
                                <Text className="text-[14px] font-[600] text-[#141414] w-[60%] leading-tight">Total{'\n'}Income</Text>
                                <View className="w-8 h-8 rounded-full border border-gray-200 items-center justify-center bg-transparent">
                                    <Feather name="arrow-up-right" size={16} color="#141414" />
                                </View>
                            </View>
                            <View className="flex-row justify-between items-end w-full">
                                <View className="flex-row items-start">
                                    <Text className="text-[12px] font-[500] text-[#141414] mt-1 mr-0.5">₦</Text>
                                    <Text className="text-[24px] font-[500] text-[#141414]">41,321</Text>
                                </View>
                                <View className="bg-[#00C853] px-2 py-1 rounded-full">
                                    <Text className="text-white text-[10px] font-[500]">+2%</Text>
                                </View>
                            </View>
                        </View>

                        {/* Total Expense */}
                        <View className="w-[48%] bg-white rounded-3xl p-5 mb-4 border border-gray-100 h-[140px] justify-between">
                            <View className="flex-row justify-between items-start">
                                <Text className="text-[14px] font-[600] text-[#141414] w-[60%] leading-tight">Total{'\n'}Expense</Text>
                                <View className="w-8 h-8 rounded-full border border-gray-200 items-center justify-center bg-transparent">
                                    <Feather name="arrow-up-right" size={16} color="#141414" />
                                </View>
                            </View>
                            <View className="flex-row justify-between items-end w-full">
                                <View className="flex-row items-start">
                                    <Text className="text-[12px] font-[500] text-[#141414] mt-1 mr-0.5">₦</Text>
                                    <Text className="text-[24px] font-[500] text-[#141414]">43,111</Text>
                                </View>
                                <View className="bg-[#FF3B30] px-2 py-1 rounded-full">
                                    <Text className="text-white text-[10px] font-[500]">-1.5%</Text>
                                </View>
                            </View>
                        </View>

                        {/* Thrift plan Status */}
                        <View className="w-[48%] bg-[#1A0B2E] rounded-3xl p-4 mb-4 h-[140px] justify-between">
                            <Text className="text-[14px] font-semibold text-white">Thrift plan Status</Text>
                            <View className="flex-row items-center w-full justify-between mt-2">
                                {/* Circular Progress */}
                                <View className="relative w-[56px] h-[56px] items-center justify-center rounded-full border-[9px] border-[#3D1273]">
                                    {/* Using border trick to simulate progress bar because native SVG requires a rebuild */}
                                    <View className="absolute w-[56px] h-[56px] rounded-full border-[9px] border-white border-b-transparent border-l-transparent -rotate-45" />
                                    <Text className="text-white text-[11px] font-[500] font-inter">85%</Text>
                                </View>
                                <View className="flex-1 ml-3">
                                    <Text className="text-[12px] text-white font-[500] font-inter mb-2">Great!</Text>
                                    <Text className="text-[11px] text-[#FFF] mt-0.5 font-inter">Your Thrift is on track</Text>
                                </View>
                            </View>
                        </View>

                        {/* Saved Beneficiaries */}
                        <View className="w-[48%] bg-white rounded-3xl p-5 mb-4 border border-gray-100 h-[140px] justify-between">
                            <View className="flex-row justify-between items-start">
                                <Text className="text-[13px] font-[600] text-[#141414] w-[60%] leading-tight">Saved{'\n'}Beneficiaries</Text>
                                <View className="w-8 h-8 rounded-full border border-gray-200 items-center justify-center bg-transparent mt-[-4px] mr-[-4px]">
                                    <Feather name="arrow-up-right" size={16} color="#141414" />
                                </View>
                            </View>

                            {/* Beneficiary Avatars Stack */}
                            <View className="flex-row justify-between mt-4">
                                <View className="w-12 h-12 rounded-full bg-pink-200 border-2 border-white items-center justify-center relative z-30">
                                    <Text className="text-[14px]">👩🏻</Text>
                                    <View className="absolute bottom-0 right-0 w-[14px] h-[14px] bg-[#1d59d1] rounded-full border border-white items-center justify-center">
                                        <Text className="text-white text-[8px] font-bold">P</Text>
                                    </View>
                                </View>
                                <View className="w-12 h-12 rounded-full bg-blue-200 border-2 border-white items-center justify-center relative -ml-3 z-20">
                                    <Text className="text-[14px]">🧑🏼‍🦱</Text>
                                    <View className="absolute bottom-0 right-0 w-[14px] h-[14px] bg-[#00C853] rounded-full border border-white items-center justify-center">
                                        <Text className="text-white text-[8px] font-bold">7</Text>
                                    </View>
                                </View>
                                <View className="w-12 h-12 rounded-full bg-purple-200 border-2 border-white items-center justify-center relative -ml-3 z-10">
                                    <Text className="text-[14px]">👩🏽‍🦰</Text>
                                    <View className="absolute bottom-0 right-0 w-[14px] h-[14px] bg-[#0096FF] rounded-full border border-white items-center justify-center">
                                        <Text className="text-white text-[8px] font-bold">P</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Statistics;
