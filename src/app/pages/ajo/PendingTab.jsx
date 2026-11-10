import { View, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { useEffect, useState } from 'react';
import NotActive from '@/components/NotActive';
import Gift from "@/assets/images/gift.svg";
import Add from "@/assets/images/add-circle.svg";
import Search from "@/assets/images/search.svg";
import Ajos from '@/components/Ajos';
import { InvitationCard } from '@/components/invitationCard';

export const PendingTab = ({ invitationData }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTime = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(loadTime);
    }, [])

    const createAjo = () => {
        router.push("/createAjo");
    }

    const cards = invitationData.filter(item => item.status === 'pending');

    const renderItem = ({ item }) => {
        return (
            <View className="px-[5%] mb-4">
                <InvitationCard
                    name={item.name}
                    title={item.title}
                    amount={item.amount}
                    goal={item.goal}
                    cycles={item.cycles}
                    time={item.time}
                    slots={item.slots}
                    status={item.status}
                />
            </View>
        );
    };

    return (
        <View>
            <View className="px-[5%] flex-row items-center justify-between mb-10">
                <View>
                    <Text className="text-[16px] font-familjen-semibold">Manage your invitations</Text>
                    <Text className="font-inter-medium text-[11px] mt-1 text-[#636A67]">Accept or decline Ajo requests.</Text>
                </View>
                <TouchableOpacity className="flex-row items-center bg-[#F2F3FF] px-5 py-2 rounded-[24px] gap-2">
                    <Search width={30} height={30} />
                    <Text className="text-[#240046] text-[12px] font-poppins-semibold">Search</Text>
                </TouchableOpacity>
            </View>

            {loading ? <ActivityIndicator color="#000000" />
                : cards.length !== 0
                    ?
                    <Ajos
                        data={cards}
                        item={renderItem}
                    />
                    :
                    <NotActive
                        create={createAjo}
                        status={"No pending Ajo invitation yet."}
                        msg={"All new ajo invitation yet to be accepted appear here."}
                        btnTitle={"Create Ajo"}
                        icon={Gift}
                        icon0={Add}
                    />
            }
        </View>
    );
};
