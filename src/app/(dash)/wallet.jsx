import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome, Entypo, MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Wallet = () => {
    const router = useRouter();

    const transaction = [
        {
            id: 1,
            title: "Buy Groceries",
            description: "Money Out",
            amount: "-₦203",
            time: "11/12/26 08:32",
            icon: "shopping-cart",
            color: "#FF9900"
        },
        {
            id: 2,
            title: "Receive Transfer",
            description: "Money In",
            amount: "+₦1,434",
            time: "11/12/26 08:30",
            icon: "money",
            color: "#ADD8E6"
        },
        {
            id: 3,
            title: "Netflix 1 Month",
            description: "Money Out",
            amount: "-₦203",
            time: "11/12/26 07:00",
            icon: "amazon",
            color: "#E50914"
        },
        {
            id: 4,
            title: "Buy Groceries",
            description: "Money Out",
            amount: "-₦203",
            time: "11/12/26 08:32",
            icon: "shopping-cart",
            color: "#FF9900"
        },
        {
            id: 5,
            title: "Receive Transfer",
            description: "Money In",
            amount: "+₦1,434",
            time: "11/12/26 08:30",
            icon: "money",
            color: "#ADD8E6"
        },
        {
            id: 6,
            title: "Music Box",
            description: "Money Out",
            amount: "-₦203",
            time: "11/12/26 07:00",
            icon: "soundcloud",
            color: "#E50914"
        },
        {
            id: 7,
            title: "XBOX One",
            description: "Money Out",
            amount: "-₦203",
            time: "11/12/26 07:00",
            icon: "gamepad",
            color: "#E50914"
        }
    ]

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 px-[5%] pt-2">
                {/* Header */}
                <View className="flex-row items-center justify-between mb-6">
                    <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 bg-[#F9F9F9] rounded-full items-center justify-center">
                        <Entypo name="chevron-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="text-[24px] font-familjen-medium text-[#000]">Wallet</Text>
                    <TouchableOpacity>
                        <Entypo name="dots-three-horizontal" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={transaction}
                    contentContainerStyle={{ gap: 16, paddingBottom: 100 }}
                    keyExtractor={item => item.id.toString()}
                    ListHeaderComponent={
                        <View>
                            {/* Balance Card */}
                            <View className="mb-8">
                                <View className="flex-row items-center justify-between mb-4">
                                    <View className="flex-row items-center gap-2 bg-[#F9F9F9] px-3 py-1.5 rounded-[20px]">
                                        <Ionicons name="wallet" size={16} color="#666" />
                                        <Text className="text-[12px] text-[#000] font-inter-medium">Wallet Balance</Text>
                                    </View>
                                    <View className="flex-row gap-4 bg-[#F9F9F9] px-3 py-2 rounded-[20px]">
                                        <Entypo name="eye" size={16} color="#666" />
                                        <MaterialIcons name="lock" size={16} color="#666" />
                                        <Ionicons name="copy" size={16} color="#666" />
                                    </View>
                                </View>

                                <View className="flex-row items-start gap-2">
                                    <View className="flex-row items-start">
                                        <MaterialCommunityIcons name="currency-ngn" size={30} color="black" style={{ marginTop: 8 }} />
                                        <Text className="text-[44px] font-familjen-semibold text-[#000] leading-tight">120,432.05</Text>
                                    </View>
                                    <View className="bg-[#DCFCE7] px-3 py-1 rounded-[20px] mt-2">
                                        <Text className="text-[12px] text-[#016630] font-inter-medium">Active</Text>
                                    </View>
                                </View>
                            </View>

                            {/* Action Buttons */}
                            <View className="flex-row justify-between mb-10">
                                <View className="items-center gap-2">
                                    <TouchableOpacity className="w-16 h-16 rounded-full bg-white border-2 border-[#F9F9F9] items-center justify-center">
                                        <Entypo name="plus" size={24} color="#292D32" />
                                    </TouchableOpacity>
                                    <Text className="text-[14px] text-[#000] font-inter-medium">Fund</Text>
                                </View>
                                <View className="items-center gap-2">
                                    <TouchableOpacity className="w-16 h-16 rounded-full bg-white border-2 border-[#F9F9F9] items-center justify-center">
                                        <Entypo name="minus" size={24} color="#292D32" />
                                    </TouchableOpacity>
                                    <Text className="text-[14px] text-[#000] font-inter-medium">Withdraw</Text>
                                </View>
                                <View className="items-center gap-2">
                                    <TouchableOpacity
                                        className="w-16 h-16 rounded-full bg-white border-2 border-[#F9F9F9] items-center justify-center"
                                        onPress={() => router.push("pages/statistics")}
                                    >
                                        <Ionicons name="bar-chart-outline" size={24} color="#292D32" />
                                    </TouchableOpacity>
                                    <Text className="text-[14px] text-[#000] font-inter-medium">Stats</Text>
                                </View>
                                <View className="items-center gap-2">
                                    <TouchableOpacity className="w-16 h-16 rounded-full bg-white border-2 border-[#F9F9F9] items-center justify-center">
                                        <Ionicons name="settings-outline" size={24} color="#292D32" />
                                    </TouchableOpacity>
                                    <Text className="text-[14px] text-[#000] font-inter-medium">Setting</Text>
                                </View>
                            </View>

                            {/* Today Transaction */}
                            <View className="flex-row justify-between items-center mb-6">
                                <View>
                                    <Text className="text-[16px] font-familjen-semibold text-[#000]">Today Transaction</Text>
                                    <Text className="text-[11px] text-[#666] font-inter-medium">13 transaction today</Text>
                                </View>
                                <View className="bg-[#FFF] border-2 border-[#ECECEC] p-[3%] rounded-[50px]">
                                    <Feather name="arrow-up-right" size={24} color="black" />
                                </View>
                            </View>
                        </View>
                    }
                    renderItem={({ item }) => {
                        const prefix = item.amount.match(/^[^0-9]*/)?.[0];
                        const value = item.amount.replace(/^[^0-9]*/, '');

                        return (
                            <View className="flex-row items-center w-[100%] justify-between border-2 border-[#ECECEC] bg-white px-4 py-[5%] rounded-[30px]">
                                <View className="flex-row items-center gap-4">
                                    <View className="w-12 h-12 rounded-full items-center justify-center" style={{ backgroundColor: item.color }}>
                                        <FontAwesome name={item.icon} size={24} color="white" />
                                    </View>
                                    <View>
                                        <Text className="text-[14px] font-familjen-semibold text-[#000000]">{item.title}</Text>
                                        <Text className={`text-[11px] font-[500] font-inter ${item.description === "Money In" ? "text-[#00C853]" : "text-[#FF0000]"}`}>{item.description}</Text>
                                    </View>
                                </View>
                                <View className="items-end flex-row gap-2 w-[50%] justify-between">
                                    <Text className="text-[11px] text-[#636A67] mb-1 font-inter">{item.time}</Text>
                                    <View className="flex-row items-start">
                                        {prefix ? (
                                            <Text className="text-[11px] font-familjen-medium text-[#000000] mt-[2px]">{prefix}</Text>
                                        ) : null}
                                        <Text className="text-[20px] font-familjen-medium text-[#000000] leading-tight">{value}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Wallet;