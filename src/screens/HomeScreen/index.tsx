import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {styles} from '../../theme/appTheme';
import { MenuItemInterface } from '../../types/app.types';
import { FlatListMenuItem } from '../../components/FlatListMenuItem';
import { RootStackParams } from '../Navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';


const menuItems: MenuItemInterface[] = [
  {
    name: 'Animation101',
    icon: 'view-in-ar',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation102',
    icon: 'animation',
    component: 'Animation102Screen',
  },
];

interface StackProps extends StackScreenProps<RootStackParams, any>{}

export const HomeScreen = ( { navigation }: StackProps ) => {

  const renderListHeader = () => {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.title}>Menu Options</Text>
      </View>
    );
  };

  const itemSeparator = () => (
    <View
      style={{
        marginVertical: 6,
        borderBottomWidth: 1,
        opacity: 0.45,
      }}
    />
  );

  return (
    <View style={{flex: 1, ...styles.globalContainer}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} navigation={navigation} /> }
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
