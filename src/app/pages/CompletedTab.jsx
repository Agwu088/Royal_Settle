import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import NotActive from '@/components/NotActive';
import folder from "@/assets/images/folder.svg";
import Add from "@/assets/images/add-circle.svg";

export const CompletedTab = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTime = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(loadTime);
    }, [])

    const findAjo = () => {
        router.push("/createAjo");
    }
    return (
        <View>
            {loading ? <ActivityIndicator color="#000000" /> :
                <NotActive
                    btnAction={findAjo}
                    status={"No completed Ajo yet."}
                    msg={"All completed ajo will appear here."}
                    btnTitle={"Find an Ajo"}
                    icon={folder}
                    icon0={Add}
                />
            }
        </View>
    );
};
