import React, {useRef} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

import {colors} from '../constants/colors';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.5)).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.box,
          opacity,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 175,
    aspectRatio: 1,
    backgroundColor: colors.primary,
  },
});
