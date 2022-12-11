import React from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo2 from '../assets/logo2.png';
import Favorite from '../Pages/Favorite';
import Cart from '../Pages/Cart';
import Tabs from './index';
import SinglePage from '../Component/Products/SingleProduct';

function headerBtn(navigation) {
  return (
    <>
      <Pressable
        style={{ marginRight: 20 }}
        onPress={() => {
          navigation.navigate({ name: 'Favorite' });
        }}
      >
        <IonIcons name="heart" size="25" color="#886aad" />
      </Pressable>
      <Pressable
        style={{ marginTop: -3 }}
        onPress={() => {
          navigation.navigate({ name: 'Cart' });
        }}
      >
        <Icon name="shopping-bag" size="22" color="#886aad" />
      </Pressable>
    </>
  );
}

function ProductStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      headerMode="float"
      screenOptions={({ navigation }) => ({
        title: '',
        headerTintColor: '#886aad',
        headerBackTitleVisible: false,
        headerRight: () => headerBtn(navigation),
        headerTitleStyle: {
          color: '#886aad',
        },
        headerLeft: () => (
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Image
              source={logo2}
              style={{ marginTop: -4, width: 40, height: 40 }}
            />
            <TextInput
              placeholder="Search"
              style={{
                width: 200,
                height: 35,
                backgroundColor: '#f0f0f0',
                paddingLeft: 10,
                marginLeft: 15,
                borderRadius: 5,
              }}
            />
          </View>
        ),
      })}
    >
      <Stack.Screen
        backButtonTextStyle="#886aad"
        name="SingleProduct"
        component={SinglePage}
      />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}
export default ProductStack;
