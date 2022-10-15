import {Switch} from 'react-native';
import React, { useState } from 'react';
import {colors} from '../constants/colors';

interface Props {
    isOn: boolean;
    onChange?: (value: boolean) => void;
}

export const CustomSwith = ({ isOn, onChange }: Props) => {

  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
    onChange && onChange(!isOn);
};

  return (
    <Switch
      trackColor={{false: '#999999', true: colors.switch}}
      thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
