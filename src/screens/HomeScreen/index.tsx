import React from 'react';
import {FlatList, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {styles} from '../../theme/appTheme';
import {FlatListMenuItem} from '../../components/FlatListMenuItem';
import {RootStackParams} from '../Navigator/StackNavigator';
import {menuItems} from '../../data/menuItems';
import {ScreenHeader} from '../../components/ScreenHeader';
import { ItemSeparator } from '../../components/ItemSeparator';

interface StackProps extends StackScreenProps<RootStackParams, any> {}

export const HomeScreen = ({navigation}: StackProps) => {

  return (
    <View style={{flex: 1, ...styles.globalContainer}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => (
          <FlatListMenuItem menuItem={item} navigation={navigation} />
        )}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <ScreenHeader title="Menu Options" />}
        ItemSeparatorComponent={() => <ItemSeparator/>}
      />
    </View>
  );
};
