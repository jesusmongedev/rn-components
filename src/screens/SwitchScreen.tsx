import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {CustomSwith} from '../components/CustomSwith';
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
  });

  const {isActive, isHungry, isHappy} = state;

  const onChange = (value: boolean, field: keyof SwitchState) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={styles.globalContainer}>
      <ScreenHeader title="Switches" />

      {/* isActive */}
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwith
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      {/* isHungry */}
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwith
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      {/* isHappy */}
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwith
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <View style={styles.spacing}>
        <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
      </View>
    </View>
  );
};
