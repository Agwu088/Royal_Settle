import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Octicons, Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';
import logo from "../../assets/images/logo.png";
import { getAllAjo } from '../../store/slices/ajoSlice';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
    const router = useRouter();
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // let firstName;
    // if (user) firstName = user?.responseBody?.userDetails.fullName.split(" ")[0];

    const getAll = () => {
        dispatch(getAllAjo)
            .then((res) => {
                if (res?.payload?.requestSuccessful === true) {
                    SecureStore.setItemAsync('accessToken', res?.payload?.responseBody.accessToken);
                    SecureStore.setItemAsync('refreshToken', res?.payload?.responseBody.refreshToken);
                    router.replace("/dashboard")
                } else if (res?.meta?.requestStatus === 'rejected') {
                    throw new Error(res?.payload?.responseMessage || "Login failed");
                } else {
                    throw new Error("Login failed");
                };
            }).catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: err.message,
                });
            })
    }

    const transaction = [
        {
            id: 1,
            title: "Buy Groceries",
            description: "Money Out",
            amount: "-₦203",
            time: "11/12/26 08:32",
            icon: "amazon",
            color: "#FF9900"
        },
        {
            id: 2,
            title: "Receive Transfer",
            description: "Money In",
            amount: "+₦1,434",
            time: "11/12/26 08:30",
            icon: "amazon",
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
        }
    ]

    console.log("USER: ", user)
    const renderHeader = () => (
        <View>
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center justify-between">
                    <View className="bg-[#F4F4FB] border-2 border-[#ECECEC] p-[3%] rounded-[50px]">
                        <Ionicons name="person-sharp" size={40} color="black" />
                    </View>
                    <Text className="text-[20px] font-[500] font-inter text-[#000]">Hi, { }</Text>
                </View>
                <View className="bg-[#F4F4FB] border-2 border-[#ECECEC] p-[3%] rounded-[50px]">
                    <View className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 right-0">
                        <Text className="text-[10px] text-white font-[500] font-inter">6</Text>
                    </View>
                    <Octicons name="bell-fill" size={25} color="#240046" />
                </View>
            </View>
            <View className="flex-row justify-between items-center mt-[8%] bg-[#240046] p-5 rounded-[20px]">
                <View className="flex-row items-center gap-3">
                    <View className="bg-[#FFF] p-2 rounded-[50px]">
                        <MaterialCommunityIcons name="medal" size={24} color="#240046" />
                    </View>
                    <View className="">
                        <Text className="text-[15px] font-[500] font-inter text-[#FFF]">Upgrade to KYC tier 2</Text>
                        <Text className="text-[11px] font-[500] font-inter text-[#FFF]">Complete to unlock more features</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => router.push('/kycLevel')} className="flex-row justify-center items-center gap-3 bg-[#DFE2FF] px-[5%] h-10 rounded-[50px]">
                    <Text className="text-[12px] font-[500] font-inter text-[#240046]">Upgrade</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-between items-center mt-[8%]">
                <View className="flex-row justify-center items-center gap-2 bg-[#FFF] border-2 border-[#ECECEC] px-[3%] h-10 rounded-[50px]">
                    <Ionicons name="wallet" size={20} color="#240046" />
                    <Text className="text-[15px] font-[500] font-inter">Wallet Balance</Text>
                </View>
                <View className="flex-row justify-center items-center gap-3 bg-[#FFF] border-2 border-[#ECECEC] px-[3%] h-10 rounded-[50px]">
                    <Entypo name="eye" size={20} color="#240046" />
                    <MaterialIcons name="lock" size={20} color="#240046" />
                    <Ionicons name="copy" size={20} color="#240046" />
                </View>
            </View>
            <View className="mt-[10%] flex-row items-top">
                <MaterialCommunityIcons name="currency-ngn" size={40} color="black" />
                <Text className="text-[44px] font-[600] leading-tight text-[#000] mr-2">120,432.05</Text>
                <Text className="bg-[#DCFCE7] text-[#016630] h-9 text-center w-[15%] rounded-[50] text-[12px] py-2 font-[500] font-inter text-[#000]">Active</Text>
            </View>
            <View className="flex-row justify-between items-center mt-[10%]">
                <View className="flex-row justify-center items-center gap-2 border-2 border-[#ECECEC] w-[48%] p-[3%] rounded-[50px]">
                    <Ionicons name="add-circle" size={30} color="#F2F3FF" />
                    <Text className="text-[14px] font-poppins-medium">Fund wallet</Text>
                </View>
                <View className="flex-row justify-center items-center gap-2 border-2 border-[#ECECEC] w-[48%] p-[3%] rounded-[50px]">
                    <Entypo name="circle-with-minus" size={30} color="#CFD8DC" />
                    <Text className="text-[14px] font-poppins-medium">Withdraw</Text>
                </View>
            </View>
            <View className="mt-[10%]">
                <View className="flex-row justify-between items-center">
                    <View className="flex-row gap-2">
                        <FontAwesome name="group" size={24} color="black" />
                        <Text className="text-[16px] leading-tight font-[600]">Community Ajo(s)</Text>
                    </View>
                    <View className="bg-[#FFF] border-2 border-[#ECECEC] p-[3%] rounded-[50px]">
                        <Feather name="arrow-up-right" size={24} color="black" />
                    </View>
                </View>
                <View className="mt-4">
                    <FlatList
                        data={[
                            { id: 1, amount: '165,000', goal: '500,000', cycles: 10, frequency: 'Monthly', slotsLeft: 4, progress: 0.6 },
                            { id: 2, amount: '50,000', goal: '500,000', cycles: 10, frequency: 'Monthly', slotsLeft: 2, progress: 0.4 },
                        ]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 16, paddingRight: 20 }}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View className="border-2 border-[#ECECEC] rounded-[30px] p-4 w-[280px]">
                                <View className="flex-row items-center justify-between mb-4">
                                    <View>
                                        <View className="flex-row items-center gap-2 mb-2">
                                            <Text className="text-[14px] font-bold text-[#000] font-poppins-medium">₦{item.amount}</Text>
                                            <Entypo name="arrow-right" size={16} color="#000" />
                                            <Text className="text-[14px] font-bold text-[#000] font-poppins-medium">₦{item.goal}</Text>
                                        </View>
                                        <View className="flex-row gap-2">
                                            <Text className="border border-[#ECECEC] rounded-[20px] px-3 py-1 text-[12px] text-[#666] font-inter">{item.cycles} Cycles</Text>
                                            <Text className="border border-[#ECECEC] rounded-[20px] px-3 py-1 text-[12px] text-[#666] font-inter">{item.frequency}</Text>
                                        </View>
                                    </View>
                                    <View className="relative">
                                        <View className="w-10 h-10 bg-[#F4F4FB] rounded-full items-center justify-center">
                                            <Image source={logo} className="w-full h-full" />
                                        </View>
                                        <View className="absolute bottom-0 right-0 w-3 h-3 bg-[#00C853] rounded-full border-2 border-white" />
                                    </View>
                                </View>

                                <View className="flex-row items-center justify-between mt-2">
                                    <View className="flex-row pl-2">
                                        {[1, 2, 3, 4].map((_, index) => (
                                            <View key={index} className={`w-8 h-8 rounded-full border-2 border-white ${index > 0 ? '-ml-3' : ''} bg-gray-200 overflow-hidden`}>
                                                <Image
                                                    source={{ uri: `https://i.pravatar.cc/100?img=${item.id * 10 + index}` }}
                                                    className="w-full h-full"
                                                />
                                            </View>
                                        ))}
                                        <View className="w-8 h-8 rounded-full border-2 border-white -ml-3 bg-[#F4F4FB] items-center justify-center">
                                            <Text className="text-[10px] text-[#240046] font-bold">+4</Text>
                                        </View>
                                    </View>

                                    <View className="items-end">
                                        <Text className="text-[11px] text-[#666] mb-1 font-inter">{item.slotsLeft} more slots</Text>
                                        <TouchableOpacity className="bg-[#F4F4FB] px-4 py-1.5 rounded-[20px] flex-row items-center gap-1">
                                            <Text className="text-[#240046] font-[600]">Join</Text>
                                            <Feather name="arrow-up-right" size={14} color="#240046" />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View className="h-2 bg-[#F4F4FB] rounded-full mt-4 overflow-hidden">
                                    <View className="h-full bg-[#240046] rounded-full" style={{ width: `${item.progress * 100}%` }} />
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View className="mt-[10%] gap-6">
                    {/* Private Ajo Section */}
                    <View className="border-2 border-[#ECECEC] rounded-[30px] p-[5%]">
                        <Text className="text-[16px] font-[600] font-poppins-medium mb-4">Private Ajo(s)</Text>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-3">
                                <View className="w-12 h-12 bg-[#F4F4FB] rounded-full items-center justify-center border border-[#ECECEC]">
                                    <FontAwesome name="group" size={20} color="#240046" />
                                </View>
                                <View>
                                    <Text className="text-[14px] font-[600] text-[#000] font-poppins-medium">Create or join an Ajo</Text>
                                    <Text className="text-[12px] text-[#666] font-inter">Start or join an Ajo group.</Text>
                                </View>
                            </View>
                            <TouchableOpacity className="bg-[#F4F4FB] px-4 py-2 rounded-[20px] flex-row items-center gap-1">
                                <Text className="text-[#240046] font-[600] text-[12px]">Let's go</Text>
                                <Feather name="arrow-up-right" size={14} color="#240046" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Planned Saving Section */}
                    <View className="border-2 border-[#ECECEC] rounded-[30px] p-[5%]">
                        <Text className="text-[16px] font-[600] font-poppins-medium mb-4">Planned saving(s)</Text>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-3">
                                <View className="w-12 h-12 bg-[#F4F4FB] rounded-full items-center justify-center border border-[#ECECEC]">
                                    <MaterialCommunityIcons name="chart-pie" size={20} color="#240046" />
                                </View>
                                <View>
                                    <Text className="text-[14px] font-[600] text-[#000] font-poppins-medium">Create a thrift plan</Text>
                                    <Text className="text-[12px] text-[#666] font-inter">Save with a goal at your pace.</Text>
                                </View>
                            </View>
                            <TouchableOpacity className="bg-[#F4F4FB] px-4 py-2 rounded-[20px] flex-row items-center gap-1">
                                <Text className="text-[#240046] font-[600] text-[12px]">Let's go</Text>
                                <Feather name="arrow-up-right" size={14} color="#240046" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View className="mt-[10%] mb-6">
                    <View className="flex-row justify-between items-center">
                        <View>
                            <Text className="text-[18px] font-[600] text-[#000]">Today Transaction</Text>
                            <Text className="text-[12px] text-[#666] font-inter">{transaction.length} transaction today</Text>
                        </View>
                        <View className="bg-[#FFF] border-2 border-[#ECECEC] p-[3%] rounded-[50px]">
                            <Feather name="arrow-up-right" size={24} color="black" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-white p-[20%]">
            <FlatList
                ListHeaderComponent={renderHeader}
                showsVerticalScrollIndicator={false}
                data={transaction}
                contentContainerStyle={{ gap: 16, paddingBottom: 40 }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View className="flex-row items-center w-[100%] justify-between border-2 border-[#ECECEC] bg-white px-4 py-[5%] rounded-[30px]">
                        <View className="flex-row items-center gap-4">
                            <View className="w-12 h-12 rounded-full items-center justify-center" style={{ backgroundColor: item.color }}>
                                <FontAwesome name={item.icon} size={24} color="white" />
                            </View>
                            <View>
                                <Text className="text-[14px] font-[600] text-[#000]">{item.title}</Text>
                                <Text className={`text-[11px] font-[500] font-inter ${item.description === "Money In" ? "text-[#00C853]" : "text-[#FF0000]"}`}>{item.description}</Text>
                            </View>
                        </View>
                        <View className="items-end flex-row gap-2 w-[50%] justify-between">
                            <Text className="text-[11px] text-[#666] mb-1 font-inter">{item.time}</Text>
                            <Text className="text-[20px] font-[600] text-[#000] leading-tight">{item.amount}</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default Dashboard;