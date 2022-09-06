import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../HomeScreen/index';
import {Animation101Screen} from '../Animation101Screen';
import {Animation102Screen} from '../Animation102Screen';
import {SwitchesScreen} from '../SwitchesScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchesScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchesScreen" component={SwitchesScreen} />
    </Stack.Navigator>
  );
};
