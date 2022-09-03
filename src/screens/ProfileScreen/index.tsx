import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { RootStackParams } from '../Navigator/StackNavigator';

interface StackProps extends StackScreenProps<RootStackParams, 'ProfileScreen'>{}

export const ProfileScreen = ({ route: { params }, navigation: { setOptions } }: StackProps) => {

    const { name } = params

    useEffect(() => {
      setOptions({
        title: name
      })
    }, [])
    

    return (
        <View>
            <Text>ProfileScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});