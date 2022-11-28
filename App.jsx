import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Landing from './Pages/LandingPage';
import Products from './Pages/Products';
import Favorite from './Pages/Favorite';
import Cart from './Pages/Cart';

function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#886aad" />
      <Tab.Navigator>
        <Tab.Screen name="Landing" component={Landing} />
        <Tab.Screen name="SignIn" component={SignIn} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="Product" component={Products} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
