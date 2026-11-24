import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationHeader from '@/components/NavigationHeader';
import Add from "@/assets/images/add-circle.svg";
import Cash from "@/assets/images/cash.svg";
import { useRouter } from 'expo-router';
import LoanCards from '@/components/LoanCards';

const Loan = () => {
    const [activeTab, setActiveTab] = useState('Loan History');
    const [loading, setLoading] = useState(true);
    const tabs = ['Loan History', 'Repayment History'];
    const router = useRouter();

    useEffect(() => {
        const loadTime = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(loadTime);
    }, [])

    const loanData = [
        {
            id: 1,
            amt: "100,000",
            date: "10 Dec 2026"
        },
        {
            id: 2,
            amt: "300,000",
            date: "10 Oct 2026"
        },
        {
            id: 3,
            amt: "150,000",
            date: "04 Sept 2026"
        },
        {
            id: 4,
            amt: "500,000",
            date: "18 July 2026"
        },
        {
            id: 5,
            amt: "720,000",
            date: "14 May 2026"
        },
    ]



    return (
        <SafeAreaView edges={loanData.length === 0 ? ['top', 'bottom'] : ['top']} className={`flex-1 ${loanData.length === 0 ? "px-[10%]" : "px-[0%]"}`}>
            <View className="px-[3%]">
                <NavigationHeader title={"Loan"} gap={"gap"} />
            </View>
            <View className={`flex-row items-center bg-[#E8E8E8] p-1.5 rounded-full ${loanData.length === 0 ? " w-[95%] m-auto " : " w-[90%] m-auto"}`}>
                {/* Unread Tab */}
                {tabs.map((tab) => (
                    <TouchableOpacity
                        activeOpacity={0.9}
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        className={`flex-1 py-3 rounded-full items-center justify-center ${activeTab === tab ? 'bg-[#F2F3FF] border-2 border-white' : 'bg-transparent'}`}
                    >
                        <Text className={`font - familjen - semibold text - base ${activeTab === tab ? 'text-[#240046]' : 'text-gray-500'} `}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {loading ?
                <View className="flex-1 px-[3%] py-[5%] bg-white mt-[5%] rounded-[24px]">
                    <ActivityIndicator color="black" />
                </View>
                : loanData.length !== 0
                    ?
                    <LoanCards data={loanData} />
                    :
                    <View className="flex-1 px-[3%] py-[5%] bg-white mt-[5%] rounded-[24px]">
                        <View className="mb-12">
                            <Text className="text-[16px] font-familjen-semibold text-[#000] mb-1">Apply for a loan</Text>
                            <Text className="text-[11px] text-[#666] font-inter-medium">Get loan as swiftly as possible</Text>
                        </View>

                        <View className="items-center justify-center mt-20">
                            <Cash width={120} height={120} />
                            <Text className="text-[16px] font-familjen-semibold text-[#000] mt-[8%] mb-2">No active loan</Text>
                            <Text className="text-[12px] text-[#666] font-inter-medium">All your active loans will appear here</Text>
                        </View>
                    </View>
            }

            {/* Floating Action Button */}
            {
                loading ? ("") :
                    <TouchableOpacity
                        className={`flex-row items-center bg-[#F2F3FF] px-5 py-3 rounded-[24px] shadow-sm gap-2 border-2 border-white absolute right-5 ${loanData.length !== 0 ? "bottom-10" : "bottom-20"}`}
                        onPress={() => router.push("pages/loan/GetLoan")}
                    >
                        <Add width={30} height={30} />
                        <Text className="text-[#240046] text-[14px] font-poppins-semibold">Get Loan</Text>
                    </TouchableOpacity>

            }
        </SafeAreaView>
    )
}

export default Loan;