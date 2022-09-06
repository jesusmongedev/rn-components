import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';

type Props = {
  title: string;
};

export const ScreenHeader = ({title}: Props) => {
  return (
    <View style={{marginBottom: 10}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
