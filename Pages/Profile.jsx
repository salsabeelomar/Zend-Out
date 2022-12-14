import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Favorite } from '../Context/FavoriteContext';
import { Cart } from '../Context/CartContext';

const styles = StyleSheet.create({
  Texts: {
    margin: 15,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: '#886aad10',
    fontSize: 18,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: '80%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 25,
  },
});
function Profile() {
  const [user, setUser] = useState();
  const navigation = useNavigation();
  const { setItems } = useContext(Favorite);
  const { setCart, setTotal } = useContext(Cart);

  useEffect(() => {
    const getUser = async () => {
      setUser(JSON.parse(await AsyncStorage.getItem('user')));
    };
    getUser();
  }, []);

  return user === undefined ? (
    <Text>Waiting ... </Text>
  ) : (
    <View
      style={{
        marginTop: 70,
      }}
    >
      <View style={{ position: 'relative' }}>
        <UserAvatar
          size={80}
          style={styles.avatar}
          bgColor="#886aad96"
          name={user.fName}
        />
        <Pressable
          style={{
            position: 'absolute',
            left: '60%',
            top: '50%',
            backgroundColor: 'white',
            width: 30,
            height: 30,
            borderRadius: '50%',
          }}
        >
          <Icon name="edit" size="25" color="#886aad" />
        </Pressable>
      </View>

      <Text style={styles.Texts}>
        <Icon name="user" size="25" color="#886aad" />
        {user.fName} {user.lName}
      </Text>

      <Text style={styles.Texts}>
        <Icon
          name="mail"
          size="20"
          color="#886aad"
          style={{ paddingTop: 10 }}
        />
        {user.email}
      </Text>
      <Pressable
        style={styles.Texts}
        onPress={async () => {
          try {
            await AsyncStorage.clear();
            navigation.navigate('SignUp');
            setTotal(0);
            setItems([]);
            setCart([]);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Icon
          style={{ textAlign: 'center' }}
          name="logout"
          size="25"
          color="#886aad"
        />
        <Text style={{ fontSize: 18 }}> Logout </Text>
      </Pressable>
    </View>
  );
}
export default Profile;
