import {
  View,
  KeyboardAvoidingView,
  Text,
  Pressable,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import logo from '../../assets/landing.png';
import styles from './styles';
import CustomInput from './CustomInput';

function SignUp() {
  const navigation = useNavigation();
  const [inputError, setError] = useState(false);
  const [user, setUser] = useState({
    email: '',
    fName: '',
    lName: '',
    password: '',
  });
  const handleSignUp = (text, type) => {
    setUser(prev => ({ ...prev, [type]: text }));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image source={logo} style={{ marginTop: -35, marginBottom: 10 }} />
          <CustomInput
            label="First Name"
            value={user.fName}
            callback={text => handleSignUp(text, 'fName')}
          />
          <CustomInput
            label="Last Name"
            value={user.lName}
            callback={text => handleSignUp(text, 'lName')}
          />
          <CustomInput
            label="Email"
            value={user.email}
            callback={text => handleSignUp(text, 'email')}
          />
          <CustomInput
            label="Password"
            value={user.password}
            callback={text => handleSignUp(text, 'password')}
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
                if (
                  user.email !== '' &&
                  user.fName !== '' &&
                  user.password !== '' &&
                  user.lName !== ''
                ) {
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
            <Text style={{ color: 'white', textAlign: 'center' }}>Sign Up</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
export default SignUp;