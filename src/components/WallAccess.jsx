import { View, Text } from 'react-native';
import React from 'react';
import Wallet from "@/assets/images/wallet.svg";
import Eye from "@/assets/images/eye.svg";
import Lock from "@/assets/images/lock.svg";
import Copy from "@/assets/images/copy.svg";

export default function WallAccess() {
    return (
        <View className="flex-row justify-between items-center mt-[6%]">
            <View className="flex-row justify-center items-center gap-2 bg-[#FFF] border-2 border-[#ECECEC] px-[3%] py-[4px] rounded-[50px]">
                <Wallet width={30} height={30} />
                <Text className="text-[12px] font-inter-medium">Wallet Balance</Text>
            </View>
            <View className="flex-row justify-center items-center gap-3 bg-[#FFF] border-2 border-[#ECECEC] px-[3%] py-[4px] rounded-[50px]">
                <Eye width={30} height={30} />
                <Lock width={30} height={30} />
                <Copy width={30} height={30} />
            </View>
        </View>
    )
}