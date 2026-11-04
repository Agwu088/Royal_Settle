import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

export default function Ajos({ data, item, listHeader, listFooter }) {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={item}
                keyExtractor={(item, index) => item.id ? item.id.toString() : `header-${index}`}
                ListHeaderComponent={listHeader}
                ListFooterComponent={listFooter}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    )
}