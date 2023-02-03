import React from 'react';
import {View} from 'react-native';

export const ItemSeparator = () => {
    return (
        <View
            style={{
                marginVertical: 8,
                borderBottomWidth: 1,
                opacity: 0.45,
            }}
        />
    );
}
