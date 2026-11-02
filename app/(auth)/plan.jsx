import { FlatList, Pressable, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { savingsOption } from '../../config';
import { FontAwesome6, Feather } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { plan } from '../../store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Plan = () => {
    const [checked, setChecked] = useState("Ajo");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onSubmit = () => {
        router.replace("/dashboard")
        // router.push("/(dash)");
        // setIsLoading(true);
        // setTimeout(() => {
        //     setIsLoading(false);
        // }, 2000);
    }

    return (
        <SafeAreaView edges={['top']} className="flex-1 bg-[#240046] ">
            <View className="flex-1 bg-[#FDFBFB] rounded-t-3xl p-[5%]">
                <Text className="text-[16px] font-[600] leading-tight">Which do you prefer</Text>
                <Text className="text-[11px] font-inter mt-2 font-[500] w-[60%]">Which of these words would you like to use for group savings and contributions?</Text>

                <View className="bg-[#FDFBFB] rounded-t-3xl mt-5">
                    <FlatList
                        data={savingsOption}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => setChecked(item.name)} className="flex-row items-center justify-between bg-white px-4 py-[4%] rounded-[15px] mb-4">
                                <View className="flex-row items-center">
                                    <View className="bg-gray-200 p-2 rounded-full mr-4 ">
                                        <FontAwesome6 name="user-group" size={24} color="black" />
                                    </View>
                                    <Text className="text-[14px] font-[600] font-inter">{item.name}</Text>
                                </View>
                                <RadioButton
                                    value={item.name}
                                    status={checked === item.name ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked(item.name)}
                                />
                            </Pressable>
                        )}
                    />
                </View>
                <TouchableOpacity
                    onPress={onSubmit}
                    className="py-4 mt-[20%] w-full bg-[#240046] rounded-full"
                >
                    {isLoading
                        ? <ActivityIndicator size="small" color="#ffffff" />
                        : <Text className="self-center text-[#FFF] text-[16px] font-[700]">Submit</Text>
                    }
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default Plan;