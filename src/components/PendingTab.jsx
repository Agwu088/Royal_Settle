import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import NotActive from '@/components/NotActive';
import Gift from "@/assets/images/gift.svg";
import Add from "@/assets/images/add-circle.svg";

export const PendingTab = () => {
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
    return (
        <View>
            {loading ? <ActivityIndicator color="#000000" /> :
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
