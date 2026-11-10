import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

export const InvitationCard = ({ name, title, amount, goal, cycles, time, slots, status }) => {
    return (
        <View className="bg-white p-6 rounded-[20px] border border-[#ECECEC]">
            <View className="flex-row mb-4">
                <View className="flex-row gap-3">
                    <View className="w-12 h-12 bg-[#F4F4FB] rounded-full items-center justify-center">
                        <MaterialCommunityIcons name="account-group" size={24} color="#240046" />
                    </View>
                    <View>
                        <View className="flex-row items-start gap-8">
                            <View className="flex-row items-center gap-2 mb-4">
                                <Text className="text-[14px] font-familjen-semibold text-[#000] leading-tight">{name}</Text>
                                <Text className="text-[12px] font-familjen text-[#666] ">{title}</Text>
                            </View>
                            <View className={`px-4 py-1.5 rounded-[20px] border ${status === "pending" ? "border-[#ECECEC]" : "border-[#B2DCCB]"}`}>
                                <Text className={`text-[8.3px] ${status === "pending" ? "text-[#240046]" : "text-[#00BA71]"} font-inter-medium`}> {status === "pending" ? `${slots} Slots left` : "Completed"}</Text>
                            </View>
                        </View>
                        <View className="flex-row items-center gap-2">
                            <View className="flex-row items-center gap-2">
                                <Text className="text-[16px] text-[#141414] font-poppins-medium">₦{amount}</Text>
                                <Entypo name="arrow-right" size={12} color="#666" />
                                <Text className="text-[16px] text-[#141414] font-poppins-medium">₦{goal}</Text>
                            </View>
                            <View className="flex-row gap-7">
                                <Text className="border border-[#ECECEC] font-familjen rounded-[20px] px-2 py-1 text-[8.3px] text-[#666]">{cycles} Cycles</Text>
                                <Text className="font-familjen rounded-[20px] px-2 py-1 text-[8.3px] text-[#666]">{time}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View className="flex-row items-center justify-between mt-2 gap-4">
                <TouchableOpacity className="bg-[#240046] px-[16%] py-3 rounded-[20px]">
                    <Text className="text-white font-familjen-medium text-[14px]">Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#F2F3FF] px-[16%] py-3 rounded-[20px] border border-[#DADADA]">
                    <Text className="text-[#240046] font-familjen-medium text-[14px]">Declined</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}