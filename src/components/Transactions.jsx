import { View, Image, Text, FlatList } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const Transactions = ({ transactions }) => {
    return (
        <View className="flex-1">
            <FlatList
                showsVerticalScrollIndicator={false}
                data={transactions}
                contentContainerStyle={{ paddingBottom: 65 }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    const prefix = item.amount.match(/^[^0-9]*/)?.[0];
                    const value = item.amount.replace(/^[^0-9]*/, '');

                    return (
                        <View className="flex-row items-center w-[100%] justify-between border border-[#ECECEC] bg-white px-4 py-[5%] rounded-[30px] mb-5">
                            <View className="flex-row items-center gap-4">
                                <View className="w-12 h-12 rounded-full items-center justify-center" style={{ backgroundColor: item.color }}>
                                    <FontAwesome name={item.icon} size={24} color="white" />
                                </View>
                                <View>
                                    <Text className="text-[14px] font-familjen-semibold text-[#000000]">{item.title}</Text>
                                    <Text className={`text-[11px] font-[500] font-inter ${item.description === "Money In" ? "text-[#00C853]" : "text-[#FF0000]"}`}>{item.description}</Text>
                                </View>
                            </View>
                            <View className="items-end flex-row gap-2 w-[50%] justify-between">
                                <Text className="text-[11px] text-[#636A67] mb-1 font-inter">{item.time}</Text>
                                <View className="flex-row items-start">
                                    {prefix ? (
                                        <Text className="text-[11px] font-familjen-medium text-[#000000] mt-[2px]">{prefix}</Text>
                                    ) : null}
                                    <Text className="text-[20px] font-familjen-medium text-[#000000] leading-tight">{value}</Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    )
}

export default Transactions;