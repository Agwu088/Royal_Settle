import { Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import logo from "../assets/images/logo.png"

export const CommunityCard = ({ title, amount, goal, cycles, frequency, slots, filled, total, id }) => {
    return (
        <View className="bg-white p-4 rounded-[30px] border border-[#ECECEC] shadow-sm">
            <View className="flex-row items-start justify-between mb-4">
                <View className="flex-row gap-3">
                    <View className="w-12 h-12 bg-[#F4F4FB] rounded-full items-center justify-center">
                        <MaterialCommunityIcons name="account-group" size={24} color="#240046" />
                    </View>
                    <View>
                        <View className="flex-row items-center gap-2 mb-1">
                            <Text className="text-[16px] font-[600] text-[#000] leading-tight">{title}</Text>
                            <Text className="text-[12px] text-[#666]">with 28 others</Text>
                        </View>
                        <View className="flex-row items-center gap-2 mb-2">
                            <Text className="text-[16px] font-bold text-[#000] font-poppins-medium">₦{amount}</Text>
                            <Entypo name="arrow-right" size={14} color="#666" />
                            <Text className="text-[16px] font-bold text-[#000] font-poppins-medium">₦{goal}</Text>
                        </View>
                        <View className="flex-row gap-2 flex-wrap">
                            <Text className="border border-[#ECECEC] rounded-[20px] px-3 py-1 text-[11px] text-[#666]">{cycles} Cycles</Text>
                            <Text className="border border-[#ECECEC] rounded-[20px] px-3 py-1 text-[11px] text-[#666]">{frequency}</Text>
                            <Text className="border border-[#ECECEC] rounded-[20px] px-3 py-1 text-[11px] text-[#666]">{slots} more slots</Text>
                        </View>
                    </View>
                </View>
                <View className="relative">
                    <View className="w-8 h-8 rounded-full bg-[#F4F4FB] items-center justify-center">
                        <Image source={logo} className="w-full h-full" />
                    </View>
                    <View className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00C853] rounded-full border border-white" />
                </View>
            </View>

            <View className="flex-row items-center justify-between mt-2">
                <View className="flex-row pl-2">
                    {[1, 2, 3, 4].map((_, index) => (
                        <View key={index} className={`w-8 h-8 rounded-full border-2 border-white ${index > 0 ? '-ml-3' : ''} bg-gray-200 overflow-hidden`}>
                            <Image
                                source={{ uri: `https://i.pravatar.cc/100?img=${id * 10 + index}` }}
                                className="w-full h-full"
                            />
                        </View>
                    ))}
                    <View className="w-8 h-8 rounded-full border-2 border-white -ml-3 bg-[#F4F4FB] items-center justify-center">
                        <Text className="text-[10px] text-[#240046] font-bold">+4</Text>
                    </View>
                </View>
                <View className="flex-row items-center gap-2">
                    <Text className="text-[12px] text-[#666]">{filled}/{total}</Text>
                    <TouchableOpacity className="bg-[#F4F4FB] px-4 py-1.5 rounded-[20px] flex-row items-center gap-1">
                        <Text className="text-[#240046] font-[600]">Join</Text>
                        <Feather name="arrow-up-right" size={14} color="#240046" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="h-2 bg-[#F4F4FB] rounded-full mt-4 overflow-hidden">
                <View className="h-full bg-[#240046] rounded-full" style={{ width: `${(filled / total) * 100}%` }} />
            </View>
        </View>
    )
}