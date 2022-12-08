import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Landing from '../Pages/LandingPage';
import UserStack from './User';
import Products from '../Pages/Products';

function AppNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#886aad',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Products') iconName = 'spa';
          else if (route.name === 'User') iconName = 'user';
          else if (route.name === 'Shop') iconName = 'shopping-bag';
          return (
            <Icon
              name={iconName}
              size="20"
              color={focused ? '#886aad' : 'gray'}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Shop" component={Landing} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="User" component={UserStack} />
    </Tab.Navigator>
  );
}
export default AppNavigation;
