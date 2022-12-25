import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/Products';
import { FavoriteProvider } from './Context/FavoriteContext';
import { TotalProvider } from './Context/CartContext';

function App() {
  return (
    <FavoriteProvider>
      <TotalProvider>
        <NavigationContainer initialRouteName="Landing">
          <StatusBar backgroundColor="#886aad" />
          <AppNavigation />
        </NavigationContainer>
      </TotalProvider>
    </FavoriteProvider>
  );
}
export default App;
