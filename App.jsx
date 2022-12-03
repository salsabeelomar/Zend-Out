import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation';

function App() {
  return (
    <NavigationContainer initialRouteName="Landing">
      <StatusBar backgroundColor="#886aad" />
      <AppNavigation />
    </NavigationContainer>
  );
}
export default App;
