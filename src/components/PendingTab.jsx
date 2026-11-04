import { View } from 'react-native';
import NotActive from '@/components/NotActive';
import Gift from "@/assets/images/gift.svg";
import Add from "@/assets/images/add-circle.svg";

export const PendingTab = () => {
    const createAjo = () => {
        router.push("/createAjo");
    }
    return (
        <View>
            <NotActive
                create={createAjo}
                status={"No pending Ajo invitation yet."}
                msg={"All new ajo invitation yet to be accepted appear here."}
                btnTitle={"Create Ajo"}
                icon={Gift}
                icon0={Add}
            />
        </View>
    );
};
