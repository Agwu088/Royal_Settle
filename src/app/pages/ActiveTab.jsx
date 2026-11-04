import { useEffect, useState } from 'react';
import { ActivityIndicator, View, TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';
import NotActive from '@/components/NotActive';
import People from "@/assets/images/ajoImg.svg";
import Add from "@/assets/images/add-circle.svg";
import Invite from "@/assets/images/invite.svg";
import Ajos from '@/components/Ajos';
import { CommunityCard } from '@/components/communityCard';


export const ActiveTab = ({ sections }) => {

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

    const cards = sections.filter(item => item.type === 'card');
    const card = []


    const renderItem = ({ item }) => {
        return (
            <View className="px-[5%] mb-4">
                <CommunityCard
                    title={item.title}
                    amount={item.amount}
                    goal={item.goal}
                    cycles={item.cycles}
                    frequency={item.frequency}
                    slots={item.slots}
                    filled={item.filled}
                    total={item.total}
                    id={item.id}
                />
            </View>
        );
    };

    return (
        <View>
            <View className="px-[5%] flex-row items-center justify-between mb-10">
                <View>
                    <Text className="text-[16px] font-familjen-semibold">Invite friends to join your Ajo</Text>
                    <Text className="font-inter-medium text-[11px] mt-1 text-[#636A67]">Invite friends and grow together.</Text>
                </View>
                <TouchableOpacity
                    className="flex-row items-center bg-[#F2F3FF] px-5 py-2 rounded-[24px] gap-2"
                >
                    <Invite width={30} height={30} />
                    <Text className="text-[#240046] text-[12px] font-poppins-semibold">Invite</Text>
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
                        title={"Create an Ajo"}
                        subTitle={"Become an admin and invite your friends."}
                        status={"No active Ajo yet."}
                        msg={"All your active ajo will appear here"}
                        btnTitle={"Create Ajo"}
                        icon={People}
                        icon0={Add}
                    />
            }
        </View>
    );
};
