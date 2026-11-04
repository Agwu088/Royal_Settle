import { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import NotActive from '@/components/NotActive';
import People from "@/assets/images/ajoImg.svg";
import Add from "@/assets/images/add-circle.svg";


export const ActiveTab = () => {

    const [isLoading, setIsLoading] = useState(false);


    const createAjo = () => {
        router.push("/createAjo");
    }

    return (
        <View>
            {

            }
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
        </View>
    );
};
