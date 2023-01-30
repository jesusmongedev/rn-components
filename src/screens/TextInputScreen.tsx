import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {ScreenHeader} from '../components/ScreenHeader';

interface formState {
  name: string;
  email: string;
  phone: string;
}

export const TextInputScreen = () => {
  const [form, setForm] = useState<formState>({
    name: 'asdasd',
    email: 'sadasd',
    phone: 'sadasd',
  });

  const handleChange = (value: string, field: keyof formState) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
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

      <TextInput
        keyboardType="numeric"
        value={form.phone}
        style={stylesScreen.inputStyle}
        placeholder="Ingrese su número celular"
        onChangeText={value => handleChange(value, 'phone')}
      />

      <Text>{JSON.stringify(form, null, 3)}</Text>
    </View>
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
