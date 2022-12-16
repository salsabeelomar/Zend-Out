import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/Products';
import { FavoriteProvider } from './Context/FavoriteContext';

function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer initialRouteName="Landing">
        <StatusBar backgroundColor="#886aad" />
        <AppNavigation />
      </NavigationContainer>
    </FavoriteProvider>
  );
}
export default App;
