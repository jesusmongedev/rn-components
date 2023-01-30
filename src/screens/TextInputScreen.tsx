import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {ScreenHeader} from '../components/ScreenHeader';

interface formState {
  name: string;
  email: string;
  phone: string;
}

export const TextInputScreen = () => {
  const [form, setForm] = useState<formState>({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (value: string, field: keyof formState) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
      <ScrollView>
        <View style={styles.globalContainer}>
          <ScreenHeader title="TextInputs" />
          <TextInput
            value={form.name}
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoComplete="name"
            onChangeText={value => handleChange(value, 'name')}
          />
          <TextInput
            value={form.email}
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su correo"
            autoComplete="email"
            autoCapitalize="none"
            onChangeText={value => handleChange(value, 'email')}
          />
          <ScreenHeader title={JSON.stringify(form, null, 3)} />
          <ScreenHeader title={JSON.stringify(form, null, 3)} />
          <TextInput
            keyboardType="numeric"
            value={form.phone}
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su número celular"
            onChangeText={value => handleChange(value, 'phone')}
          />
        </View>
        <View style={{height: 20}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    marginVertical: 10,
  },
});
