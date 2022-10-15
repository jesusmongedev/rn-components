import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParams} from '../screens/Navigator/StackNavigator';

import {MenuItemInterface} from '../types/app.types';
import {colors} from '../constants/colors';

interface Props {
  menuItem: MenuItemInterface;
  navigation: StackNavigationProp<RootStackParams, any, undefined>;
}

type Routes = 'Animation101Screen' | 'Animation102Screen';

export const FlatListMenuItem = ({menuItem, navigation: {navigate}}: Props) => {
  const {icon, name, component} = menuItem;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(component as Routes)}>
      <View style={styles.container}>
        <Icon name={icon} size={20} color={colors.primary} />
        <Text style={styles.itemText}>{name}</Text>
        <Icon name="arrow-forward-ios" size={18} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: colors.black,
    marginLeft: 8,
    fontSize: 20,
    flex: 1,
  },
});
