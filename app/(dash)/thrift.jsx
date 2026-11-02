import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Feather, Foundation } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

const { width } = Dimensions.get('window');

const Thrift = () => {

    const params = useLocalSearchParams();
    // Default to the empty state (false), unless we intentionally route here after
    // creating a new thrift plan (e.g. from Success Drawer passing newThrift: 'true')
    const [hasPlans, setHasPlans] = useState(params.newThrift === 'true');

    useEffect(() => {
        if (params.newThrift === 'true') {
            setHasPlans(true);
        }
    }, [params.newThrift]);

    const createThrift = () => {
        router.push("/createThrift");
    }

    if (!hasPlans) {
        return (
            <SafeAreaView className="flex-1 bg-[#F4F4F4]">
                <View className="flex-1">
                    {/* Simple Header for Empty State */}
                    <View className="items-center mt-[5%] mb-6">
                        <Text className="text-[24px] font-[600] text-center text-[#000] leading-tight">
                            Thrift plan(s)
                        </Text>
                    </View>

                    {/* Main Empty State Card */}
                    <View className="h-[78%] bg-white mx-[5%] mb-[8%] mt-[2%] rounded-[30px] p-6">
                        {/* Top Texts */}
                        <View>
                            <Text className="text-[16px] font-[600] text-[#000] mb-1 leading-tight">Create a thrift plan</Text>
                            <Text className="text-[11px] text-[#636A67] font-inter">Set up goals and save towards it.</Text>
                        </View>

                        {/* Centered Empty State Content */}
                        <View className="flex-1 items-center justify-center">
                            <View className="w-[100px] h-[100px] border border-[#f3ebfa] rounded-full items-center justify-center mb-6">
                                <Foundation name="graph-pie" size={75} color="#240046" />
                            </View>

                            <Text className="text-[16px] font-[600] text-[#000] mb-2 leading-tight">No active Thrift plan yet.</Text>
                            <Text className="text-[11px] text-[#888] text-center w-[75%] font-inter">All your active thrift plan will appear here.</Text>
                        </View>

                        {/* Bottom Right Floating Button - matching screenshot */}
                        <TouchableOpacity
                            className="absolute bottom-9 right-6 bg-[#F4F4FB] pl-3 pr-4 py-3 rounded-full flex-row items-center gap-1 shadow-sm"
                            onPress={createThrift}
                        >
                            <View className="w-5 h-5 rounded-full bg-[#A6A8AB] items-center justify-center mr-1">
                                <Entypo name="plus" size={14} color="#240046" />
                            </View>
                            <Text className="text-[#240046] font-bold text-[13px]">Create Thrift</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-[#F4F4F4]">
            <View className="flex-1">
                {/* Header */}
                <View className="flex-row items-center justify-between px-[5%] mt-4 mb-6">
                    <TouchableOpacity
                        className="w-10 h-10 rounded-full border border-gray-200 items-center justify-center bg-white"
                        onPress={() => router.back()}
                    >
                        <Entypo name="chevron-small-left" size={24} color="#141414" />
                    </TouchableOpacity>

                    <Text className="text-[20px] font-bold text-center text-[#000] leading-tight">Thrift plan(s)</Text>

                    <TouchableOpacity className="w-10 h-10 items-center justify-center">
                        <Entypo name="dots-three-horizontal" size={20} color="#141414" />
                    </TouchableOpacity>
                </View>

                {/* Dropdown Selector */}
                <View className="items-center mb-6">
                    <TouchableOpacity className="flex-row items-center bg-white px-4 py-2 rounded-full border border-gray-200">
                        <Feather name="pie-chart" size={16} color="#141414" className="mr-2" />
                        <Text className="text-[12px] font-[500] text-[#141414] mx-2 font-inter">House rent 2026</Text>
                        <Entypo name="chevron-small-down" size={20} color="#141414" />
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
                    {/* Main Card */}
                    <View className="mx-[5%] rounded-[24px] overflow-hidden shadow-md mb-10 bg-[#240046]">
                        <View className="p-6 relative">
                            {/* Card Header */}
                            <View className="flex-row items-center justify-between mb-8">
                                <View className="flex-row items-center">
                                    <View className="w-8 h-8 bg-white rounded-lg items-center justify-center mr-3">
                                        <Feather name="pie-chart" size={16} color="#240046" />
                                    </View>
                                    <Text className="text-white text-[16px] font-[600] leading-tight">House rent 2026</Text>
                                </View>

                                <View className="flex-row items-center">
                                    <View className="w-7 h-7 bg-white/20 rounded-full items-center justify-center mr-2">
                                        <Feather name="lock" size={14} color="white" />
                                    </View>
                                    <View className="bg-white px-3 py-1 rounded-full">
                                        <Text className="text-[#016630] text-[8.39px] font-bold font-inter">Active</Text>
                                    </View>
                                </View>
                            </View>

                            {/* Balances */}
                            <View className="flex-row justify-between mb-8">
                                <View>
                                    <Text className="text-white/60 text-[9.26px] uppercase font-[500]">Thrift Balance</Text>
                                    <Text className="text-white text-[23px] font-bold">₦20,432.05</Text>
                                </View>
                                <View className="items-end">
                                    <Text className="text-white/60 text-[9.26px] uppercase font-[500]">Desired Goal</Text>
                                    <Text className="text-white text-[23px] font-bold">₦200,432.05</Text>
                                </View>
                            </View>

                            {/* Footer/Details */}
                            <View className="flex-row justify-between items-end">
                                <View>
                                    <Text className="text-white/60 text-[9.26px] uppercase font-[500]">Frequency</Text>
                                    <Text className="text-white text-[12.83px] font-[500]">Monthly</Text>
                                </View>

                                {/* Progress Section */}
                                <View className="items-end w-1/2">
                                    <Text className="text-white/60 text-[9.26px] uppercase font-[500]">Maturity date</Text>
                                    <Text className="text-white text-[12.83px] font-[500] mb-5">04-09-2027</Text>

                                    <View className="flex-row items-center w-full justify-end">
                                        <View className="h-[6px] bg-white/30 rounded-full w-3/4 mr-2 overflow-hidden">
                                            <View className="h-full bg-white w-[80%] rounded-full" />
                                        </View>
                                        <Text className="text-white text-[10px] font-bold">80%</Text>
                                    </View>
                                </View>
                            </View>

                            {/* Background decoration */}
                            <View className="absolute bottom-0 right-1/2 translate-x-12 opacity-30">
                                {/* A simple abstract shape representing the logo/icon in background */}
                                <View className="w-24 h-24 bg-white/20 rounded-tl-[40px] rounded-br-[40px] rotate-45" />
                            </View>

                        </View>
                    </View>

                    {/* Actions Section */}
                    <View className="items-center mt-6 px-[5%]">
                        <TouchableOpacity
                            onPress={createThrift}
                            className="w-14 h-14 bg-[#ECECF0] rounded-full items-center justify-center mb-4"
                        >
                            <Entypo name="plus" size={28} color="#666" />
                        </TouchableOpacity>

                        <Text className="text-[16px] font-[500] text-[#292D32] leading-tight mb-2">Create new thrift plan</Text>
                        <Text className="text-[12px] text-[#636A67] mb-8 text-center px-6">
                            Create a new thrift & save towards your goal.
                        </Text>

                        {/* Action Buttons */}
                        <TouchableOpacity className="w-full bg-[#F2F3FF] py-4 rounded-full mb-4 items-center border border-gray-200">
                            <Text className="text-[#1E125C] font-[500] text-[14px]"> + Add to money to thrift</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={createThrift}
                            className="w-full bg-transparent py-4 rounded-full border border-gray-200 items-center"
                        >
                            <Text className="text-[#240046] font-[500] text-[14px]"> + Create new thrift plan</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Thrift;