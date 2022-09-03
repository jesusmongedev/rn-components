import React from 'react';
import {StyleSheet, View} from 'react-native';
import { colors } from '../constants/colors';

export const Animation102Screen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.box }/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 175,
        aspectRatio: 1,
        backgroundColor: colors.secondary
    }
});