import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {ScreenHeader} from '../components/ScreenHeader';
import {useForm} from '../hooks/useForm';
import {CustomSwith} from '../components/CustomSwith';

const initState = {
  name: '',
  email: '',
  phone: '',
  isSuscribed: false,
};

export const TextInputScreen = () => {
  const {formState, onChange, email, isSuscribed, name, phone} =
    useForm(initState);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      // style={stylesScreen.container}
    >
      <ScrollView>
        <View style={styles.globalContainer}>
          <ScreenHeader title="TextInputs" />
          <TextInput
            value={name}
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoComplete="name"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            value={email}
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su correo"
            autoComplete="email"
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
          />
          {/* isActive */}
          <View style={styles.switchRow}>
            <Text style={styles.switchText}>Subscribe</Text>
            <CustomSwith
              isOn={isSuscribed}
              onChange={value => onChange(value, 'isSuscribed')}
            />
          </View>
          <ScreenHeader title={JSON.stringify(formState, null, 3)} />
          <ScreenHeader title={JSON.stringify(formState, null, 3)} />
          <TextInput
            keyboardType="numeric"
            value={phone}
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su número celular"
            onChangeText={value => onChange(value, 'phone')}
          />
          <View style={stylesScreen.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
        <View style={{height: 20}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    marginVertical: 10,
  },
  btnContainer: {
    marginTop: 12,
  },
});
