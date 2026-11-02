import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from 'react';
import { router } from 'expo-router';
import { Entypo, Foundation, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import SuccessDrawer from '../../components/SuccessDrawer';

const InputField = ({ label, placeholder, icon, rightIcon }) => {
    return (
        <View className="mb-1">
            {label && (
                <Text className="text-gray-600 text-base mb-2 font-medium">
                    {label}
                </Text>
            )}

            <View className="flex-row items-center bg-white rounded-full px-4 py-4 border border-gray-200">
                {icon && <View className="mr-3">{icon}</View>}

                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#9CA3AF"
                    className="flex-1 text-base text-gray-800"
                />

                {rightIcon && <View>{rightIcon}</View>}
            </View>
        </View>
    );
};

export default function CreateThrift() {
    const [formData, setFormData] = useState({ email: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const [isSuccessDrawerVisible, setIsSuccessDrawerVisible] = useState(false);

    const privacyPolicy = "By signing in to this app you agree with our Terms of Use and Privacy Policy."

    const onSubmit = () => {
        // router.push("/plan");
        setIsSuccessDrawerVisible(true);
    }

    return (
        <SafeAreaView className="flex-1 bg-[#FFFFFF]">
            <View className="flex-1 px-[4%] py-4">
                <View className="flex-row items-center gap-[24%]">
                    <View className="w-10 h-10 rounded-full items-center justify-center border border-[#141414]">
                        <Entypo name="chevron-small-left" size={24} color="#141414" />
                    </View>
                    <Text className="text-[#141414] text-[24px] font-[500] leading-tight">Create Thrift</Text>
                </View>
                <View className="mt-[10%] flex-row items-center justify-between">
                    <View>
                        <Text className="text-[#141414] text-[24px] font-[500] leading-tight">Set up your thrift plan</Text>
                        <Text className="text-[#141414] text-[12px] font-[500] leading-tight">Provide the details for your thrift plan.</Text>
                    </View>
                    <View className="w-10 h-10 bg-[#F4F4FB] rounded-full items-center justify-center">
                        <Foundation name="graph-pie" size={24} color="#240046" />
                    </View>
                </View>
                <View className="flex-1">
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ marginTop: 20, paddingBottom: 10 }}
                    >

                        {/* Thrift Name */}
                        <InputField
                            label="Thrift name"
                            placeholder="e.g Detty december"
                            icon={<Feather name="users" size={20} color="#6B7280" />}
                        />

                        {/* Savings Target */}
                        <InputField
                            label="How much do intend to save?"
                            placeholder="Enter amount"
                            icon={<Feather name="slash" size={20} color="#6B7280" />}
                        />

                        <Text className="text-[#24004680] text-sm mb-5">
                            This is your savings target.
                        </Text>

                        {/* Frequency */}
                        <InputField
                            label="How often will contributions be made to this thrift savings plan?"
                            placeholder="Select an item"
                            icon={<Feather name="refresh-ccw" size={20} color="#6B7280" />}
                            rightIcon={<Ionicons name="chevron-down" size={20} color="#6B7280" />}
                        />

                        <Text className="text-[#24004680] text-sm mb-5">
                            Choose if you will contribute weekly or monthly
                        </Text>

                        {/* Dates */}
                        <View className="flex-row justify-between mb-5">
                            <View className="w-[48%]">
                                <InputField
                                    label="Start date"
                                    placeholder="Pick a date"
                                    icon={
                                        <Feather name="calendar" size={20} color="#6B7280" />
                                    }
                                    rightIcon={
                                        <Ionicons name="chevron-down" size={18} color="#6B7280" />
                                    }
                                />
                                <Text className="text-[#24004680] text-xs">
                                    When First Payment cycle begins
                                </Text>
                            </View>

                            <View className="w-[48%]">
                                <InputField
                                    label="Maturity date"
                                    placeholder="Pick a date"
                                    icon={
                                        <Feather name="calendar" size={20} color="#6B7280" />
                                    }
                                    rightIcon={
                                        <Ionicons name="chevron-down" size={18} color="#6B7280" />
                                    }
                                />
                                <Text className="text-[#24004680] text-xs">
                                    When the withdrawal will happen
                                </Text>
                            </View>
                        </View>

                        {/* Emergency Split */}
                        <InputField
                            label="Emergency split"
                            placeholder="Select an item"
                            icon={
                                <MaterialCommunityIcons
                                    name="percent"
                                    size={20}
                                    color="#6B7280"
                                />
                            }
                            rightIcon={<Ionicons name="chevron-down" size={20} color="#6B7280" />}
                        />

                        <Text className="text-[#24004680] text-sm">
                            What percentage would you like to automatically set aside.
                        </Text>
                    </ScrollView>

                    {/* Bottom Button */}

                    <TouchableOpacity onPress={onSubmit} className="bg-[#240046] py-5 rounded-full items-center">
                        <Text className="text-white text-lg font-semibold">
                            Create Thrift
                        </Text>
                    </TouchableOpacity>
                </View>

                <SuccessDrawer
                    visible={isSuccessDrawerVisible}
                    onClose={() => {
                        setIsSuccessDrawerVisible(false);
                        router.push({ pathname: "/thrift", params: { newThrift: 'true' } });
                    }}
                    msg="Congratulations! your Thrift plan has been created"
                    msg1="You can now save and meet your savings target"
                />

            </View>
        </SafeAreaView >
    )
}



