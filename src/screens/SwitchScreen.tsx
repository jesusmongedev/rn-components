import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CustomSwith } from '../components/CustomSwith';
import {ScreenHeader} from '../components/ScreenHeader';
import {styles} from '../theme/appTheme';

interface SwitchState {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}

export const SwitchScreen = () => {

  const [state, setState] = useState<SwitchState>({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })

  const {isActive, isHungry, isHappy} = state;

  const onChange = (value: boolean, field: keyof SwitchState) => {
    setState({
      ...state,
      [field]: value,
    })
  }

  return (
    <View style={styles.globalContainer}>
      <ScreenHeader title="Switches" />

      {/* isActive */}
      <View style={switchStyles.switchRow}>
        <Text style={switchStyles.switchText} >isActive</Text>
        <CustomSwith isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>

      {/* isHungry */}
      <View style={switchStyles.switchRow}>
        <Text style={switchStyles.switchText} >isHungry</Text>
        <CustomSwith isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
      </View>

      {/* isHappy */}
      <View style={switchStyles.switchRow}>
        <Text style={switchStyles.switchText} >isHappy</Text>
        <CustomSwith isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
      </View>

        <View style={switchStyles.spacing} >
          <Text style={switchStyles.switchText}>
            {JSON.stringify(state, null, 5)}
          </Text>
        </View>
    </View>
  );
};

const switchStyles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  spacing: {
    marginTop: 12,
  },
})

