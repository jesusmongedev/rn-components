import React from 'react';
import {Alert, View, Button, Text} from 'react-native';
import prompt from 'react-native-prompt-android';
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
      {cancelable: false},
    );
  };

  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      {
          type: 'secure-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder'
      }
  );
  };

  return (
    <View style={styles.globalContainer}>
      <ScreenHeader title="Alerts" />
      <Button title="2-Button Alert" onPress={createTwoButtonAlert} />
      <Text></Text>
      <Button title="3-Button Alert" onPress={createThreeButtonAlert} />
      <Text></Text>
      <Button title="Show Prompt" onPress={showPrompt} />
    </View>
  );
};
