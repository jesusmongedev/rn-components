import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../HomeScreen/index';
import {Animation101Screen} from '../Animation101Screen';
import {Animation102Screen} from '../Animation102Screen';
import {SwitchScreen} from '../SwitchScreen';
import {AlertScreen} from '../AlertScrenn';
import {TextInputScreen} from '../TextInputScreen';
import {PullToRefreshScreen} from '../PullToRefreshScreen';
import {SectionListScreen} from '../SectionListScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
  TextInputScreen: undefined;
  PullToRefreshScreen: undefined;
  SectionListScreen: undefined;
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
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
    </Stack.Navigator>
  );
};
