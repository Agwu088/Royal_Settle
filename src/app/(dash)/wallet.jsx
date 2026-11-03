import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome, Entypo, MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Transactions from '@/components/Transactions';
import WallAccess from '@/components/WallAccess';

const Wallet = () => {
    const router = useRouter();

    const data = [
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
        },
        {
            id: 8,
            title: "Receive Transfer",
            description: "Money In",
            amount: "+₦1,434",
            time: "11/12/26 08:30",
            icon: "money",
            color: "#ADD8E6"
        },
        {
            id: 9,
            title: "Music Box",
            description: "Money Out",
            amount: "-₦203",
            time: "11/12/26 07:00",
            icon: "soundcloud",
            color: "#E50914"
        },
        {
            id: 10,
            title: "XBOX One",
            description: "Money Out",
            amount: "-₦203",
            time: "11/12/26 07:00",
            icon: "gamepad",
            color: "#E50914"
        }
    ]

    return (
        <SafeAreaView className="flex-1 pt-2" edges={['top']}>
            {/* Header */}
            <View className="px-[5%]">
                <View className="flex-row items-center justify-between">
                    <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 bg-[#F9F9F9] rounded-full items-center justify-center">
                        <Entypo name="chevron-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="text-[24px] font-familjen-medium text-[#000]">Wallet</Text>
                    <TouchableOpacity>
                        <Entypo name="dots-three-horizontal" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View>
                    {/* Balance Card */}
                    <View className="mb-8">
                        <WallAccess />

                        <View className="flex-row items-start gap-2 mt-5">
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
                    <View className="flex-row justify-between mb-7">
                        <View className="items-center gap-2">
                            <TouchableOpacity className="w-20 h-20 rounded-full bg-white items-center justify-center">
                                <Entypo name="plus" size={24} color="#292D32" />
                            </TouchableOpacity>
                            <Text className="text-[14px] text-[#000] font-inter-medium">Fund</Text>
                        </View>
                        <View className="items-center gap-2">
                            <TouchableOpacity className="w-20 h-20 rounded-full bg-white border-2 border-[#F9F9F9] items-center justify-center">
                                <Entypo name="minus" size={24} color="#292D32" />
                            </TouchableOpacity>
                            <Text className="text-[14px] text-[#000] font-inter-medium">Withdraw</Text>
                        </View>
                        <View className="items-center gap-2">
                            <TouchableOpacity
                                className="w-20 h-20 rounded-full bg-white border-2 border-[#F9F9F9] items-center justify-center"
                                onPress={() => router.push("pages/statistics")}
                            >
                                <Ionicons name="bar-chart-outline" size={24} color="#292D32" />
                            </TouchableOpacity>
                            <Text className="text-[14px] text-[#000] font-inter-medium">Stats</Text>
                        </View>
                        <View className="items-center gap-2">
                            <TouchableOpacity className="w-20 h-20 rounded-full bg-white border-2 border-[#F9F9F9] items-center justify-center">
                                <Ionicons name="settings-outline" size={24} color="#292D32" />
                            </TouchableOpacity>
                            <Text className="text-[14px] text-[#000] font-inter-medium">Setting</Text>
                        </View>
                    </View>

                </View>
            </View>

            {/* Today Transaction */}
            <View className="bg-[white] px-[5%] pt-[10px] rounded-t-[20px] flex-1">
                <View className="flex-row justify-between items-center mb-6">
                    <View>
                        <Text className="text-[16px] font-familjen-semibold text-[#000]">Today Transaction</Text>
                        <Text className="text-[11px] text-[#666] font-inter-medium">13 transaction today</Text>
                    </View>
                    <View className="bg-[#FFF] border-2 border-[#ECECEC] p-[3%] rounded-[50px]">
                        <Feather name="arrow-up-right" size={24} color="black" />
                    </View>
                </View>
                <Transactions transactions={data} />
            </View>
        </SafeAreaView>
    )
}

export default Wallet;