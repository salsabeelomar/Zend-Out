import React, { useState } from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/landing.png';
import CustomInput from './CustomInput';
import styles from './styles';

function SignIn() {
  const navigation = useNavigation();
  const [inputError, setError] = useState(false);
  const [user, setUser] = useState({
    Email: '',
    Password: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image source={logo} style={{ marginTop: -35, marginBottom: 10 }} />
          <CustomInput
            label="Email"
            value={user.Email}
            callback={text => setUser(prev => ({ ...prev, Email: text }))}
          />
          <CustomInput
            label="Password"
            value={user.Password}
            callback={text => setUser(prev => ({ ...prev, Password: text }))}
          />
          {inputError && (
            <Text
              style={{
                color: 'red',
                fontSize: 15,
                marginTop: 15,
                textAlign: 'center',
              }}
            >
              You have Empty field
            </Text>
          )}
          <Pressable
            style={styles.Buttons}
            onPress={async () => {
              try {
                if (user.Email !== '' && user.Password !== '') {
                  await AsyncStorage.setItem('user', JSON.stringify(user));
                  navigation.navigate('Profile', { user });
                } else {
                  setError(true);
                }
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Sign in</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SignIn;
