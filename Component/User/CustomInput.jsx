import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

function CustomInput({ label, value, callback }) {
  return (
    <View width="70%">
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        value={value}
        secureTextEntry={label === 'Password'}
        keyboardType={label === 'Email' && 'email-address'}
        placeholder={label}
        onChangeText={text => callback(text)}
      />
    </View>
  );
}
export default CustomInput;
