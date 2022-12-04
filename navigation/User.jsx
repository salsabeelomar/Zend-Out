import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lottie from 'lottie-react-native';
import productLoader from '../assets/productLoader.json';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Profile from '../Pages/Profile';

function UserStack() {
  const [user, setUser] = useState();
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    const getUser = async () => {
      setUser(JSON.parse(await AsyncStorage.getItem('user')));
    };
    getUser();
  }, []);
  return user === undefined ? (
    <Lottie source={productLoader} autoPlay loop />
  ) : (
    <Stack.Navigator
      initialRouteName={user ? 'Profile' : 'SignUp'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen
        name="Profile"
        options={{ headerShown: true }}
        component={Profile}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
export default UserStack;
