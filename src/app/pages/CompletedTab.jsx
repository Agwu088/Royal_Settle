import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NotActive from '@/components/NotActive';
import folder from "@/assets/images/folder.svg";
import Add from "@/assets/images/add-circle.svg";

export const CompletedTab = () => {
    const findAjo = () => {
        router.push("/createAjo");
    }
    return (
        <View>
            <NotActive
                btnAction={findAjo}
                status={"No completed Ajo yet."}
                msg={"All completed ajo will appear here."}
                btnTitle={"Find an Ajo"}
                icon={folder}
                icon0={Add}
            />
        </View>
    );
};
