import React from 'react';
import {StyleSheet, View, Animated, Button, Text} from 'react-native';

import {colors} from '../constants/colors';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.box,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />

      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(-200, 600);
        }}
      />

      <Text />

      <Button title="FadeOut" onPress={fadeOut} />
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
    marginBottom: 20,
    width: 150,
    aspectRatio: 1,
    backgroundColor: colors.primary,
  },
});
