import React from 'react';
import {Alert, View, Button} from 'react-native';
import {ScreenHeader} from '../components/ScreenHeader';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Title',
      'My Alert Msg ...',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'), // Android only
      },
    );

  const createThreeButtonAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.globalContainer}>
      <ScreenHeader title="Alerts" />
      <Button title="2-Button Alert" onPress={createTwoButtonAlert} />
      <View style={{marginVertical: 8}} />
      <Button title="3-Button Alert" onPress={createThreeButtonAlert} />
    </View>
  );
};
