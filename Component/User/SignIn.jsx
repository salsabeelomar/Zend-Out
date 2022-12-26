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
    email: '',
    password: '',
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
            value={user.email}
            callback={text => setUser(prev => ({ ...prev, email: text }))}
          />
          <CustomInput
            label="Password"
            value={user.password}
            callback={text => setUser(prev => ({ ...prev, password: text }))}
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
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            style={{ flexDirection: 'row', marginTop: 20 }}
          >
            <Text style={{ color: 'gray' }}>You don&#39;t an Account? </Text>
            <Text style={{ color: '#886aad', textDecorationColor: '#886aad' }}>
              Sign Up
            </Text>
          </Pressable>
          <Pressable
            style={styles.Buttons}
            onPress={async () => {
              try {
                if (user.email !== '' && user.password !== '') {
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
