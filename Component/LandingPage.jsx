import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import logo from '../assets/landing.png';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  label: {
    color: '#886aad',
    margin: 10,
  },
  inputStyle: {
    padding: 15,
    borderRadius: 5,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
  Buttons: {
    width: '50%',
    marginTop: 50,
    backgroundColor: '#886aad',
    borderRadius: 5,
    padding: 5,
  },
});
function Landing() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView width="100%">
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={logo} style={{ marginTop: -35, marginBottom: 10 }} />
        <View width="70%">
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputStyle}
            defaultValue={email}
            placeholder="Email"
            onChangeText={setEmail}
          />
        </View>
        <View width="70%">
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputStyle}
            defaultValue={password}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
        <Pressable style={styles.Buttons}>
          <Text style={{ color: 'white', textAlign: 'center' }}> Sign in</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Landing;
