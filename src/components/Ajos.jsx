import { View, FlatList } from 'react-native';
import React from 'react';

export default function Ajos({ data, item, listFooter, padBottom }) {

    return (
        <View>
            <FlatList
                data={data}
                renderItem={item}
                keyExtractor={(item, index) => item.id ? item.id.toString() : `header-${index}`}
                ListFooterComponent={listFooter}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: padBottom ?? 250 }}
            />
        </View>
    )
}