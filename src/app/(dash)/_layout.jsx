import { Ionicons, Feather, Fontisto, Foundation, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, View, Text } from 'react-native';
import Home from "@/assets/images/tab/home.svg";
import Profile from "@/assets/images/tab/profile.svg";
import Graph from "@/assets/images/tab/graph.svg";
import Wallet from "@/assets/images/tab/wallet.svg";
import Setting from "@/assets/images/tab/setting.svg";


const DashLayout = () => {
    return (
        <>
            {/* {Platform.OS === "ios" ? (
                <View style={{ height: "5%", backgroundColor: "#ffffff" }}>
                    <StatusBar style="dark" />
                </View>
            ) : (
                <View style={{ height: "5%", backgroundColor: "#ffffff" }}>
                    <StatusBar style="dark" />
                </View>
            )} */}
            <StatusBar style="dark" />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        paddingTop: "5%",
                        paddingHorizontal: "5%",
                        borderRadius: 50,
                        backgroundColor: "#ffffff",
                        position: "absolute",
                        bottom: 30,
                        width: "90%",
                        marginHorizontal: "5%",
                        // iOS shadow
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 8 },
                        shadowOpacity: 0.15,
                        shadowRadius: 12,

                        // Android shadow
                        elevation: 10,
                    },
                }}
            >
                <Tabs.Screen
                    name="dashboard"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                className={`flex-row items-center w-[80px] justify-center h-10 px-4 rounded-full
                                ${focused ? "bg-[#2B0A52]" : "bg-transparent"}`}
                            >
                                <Home width={25} height={25} />

                                {focused && (
                                    <Text className="text-white font-semibold text-sm ml-2">
                                        Home
                                    </Text>
                                )}
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="ajo"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                className={`flex-row items-center w-[80px] justify-center h-10 px-4 rounded-full
                                ${focused ? "bg-[#2B0A52]" : "bg-transparent"}`}
                            >
                                <Profile width={25} height={25} />

                                {focused && (
                                    <Text className="text-white font-semibold text-sm ml-2">
                                        Ajo
                                    </Text>
                                )}
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="thrift"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                className={`flex-row items-center w-[80px] justify-center h-10 px-4 rounded-full
                                ${focused ? "bg-[#2B0A52]" : "bg-transparent"}`}
                            >
                                <Graph width={25} height={25} />

                                {focused && (
                                    <Text className="text-white font-semibold text-sm ml-2">
                                        Thrift
                                    </Text>
                                )}
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="wallet"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                className={`flex-row items-center w-[80px] justify-center h-10 px-4 rounded-full
                                ${focused ? "bg-[#2B0A52]" : "bg-transparent"}`}
                            >
                                <Wallet width={25} height={25} />

                                {focused && (
                                    <Text className="text-white font-semibold text-sm ml-2">
                                        Wallet
                                    </Text>
                                )}
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                className={`flex-row items-center w-[80px] justify-center h-10 rounded-full
                                ${focused ? "bg-[#2B0A52]" : "bg-transparent"}`}
                            >
                                <Setting width={32} height={32} />

                                {focused && (
                                    <Text className="text-white font-semibold text-sm">
                                        Settings
                                    </Text>
                                )}
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="createThrift"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="createAjo"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="pages/statistics"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="kycLevel"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="kycVerification"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="ninVerification"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="addressVerification"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="kycSuccess"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

            </Tabs>
        </>
    )
}

export default DashLayout;