import React, {useState} from 'react';
import {View, Switch} from 'react-native';
import {ScreenHeader} from '../components/ScreenHeader';
import {colors} from '../constants/colors';
import {styles} from '../theme/appTheme';

export const SwitchesScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.globalContainer}>
      <ScreenHeader title="Switches" />

      <Switch
        trackColor={{false: '#999999', true: colors.switch}}
        thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
