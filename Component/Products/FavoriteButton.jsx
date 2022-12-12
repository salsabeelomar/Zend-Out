import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function FavoriteButton({ id, flag }) {
  const [fav, setFav] = useState(false);
  const [items, setItems] = useState([]);
  const favType = flag === 'home';

  useEffect(() => {
    const favItem = async () => {
      const itemsArray =
        JSON.parse(await AsyncStorage.getItem('favorite')) || [];
      setItems([...itemsArray]);
      const item = itemsArray.find(ele => ele.id === id);
      setFav(!(item === undefined) && item.id === id);
    };
    favItem();
  }, []);

  const styles = StyleSheet.create({
    floating: {
      position: 'absolute',
      zIndex: 1,
      right: 4,
      bottom: 4,
    },
    normal: {
      width: favType ? 30 : 40,
      height: favType ? 30 : 40,
      backgroundColor: '#886aad57',
      borderRadius: '50%',
    },
  });
  return (
    <Pressable
      style={StyleSheet.compose(styles.normal, styles.floating)}
      onPress={async () => {
        try {
          const local =
            JSON.parse(await AsyncStorage.getItem('favorite')) || [];
          if (local.filter(ele => ele.id === id).length > 0) {
            const newItems = local.filter(ele => ele.id !== id);
            await AsyncStorage.setItem('favorite', JSON.stringify(newItems));
            setItems(newItems);
            setFav(false);
          } else {
            await AsyncStorage.setItem(
              'favorite',
              JSON.stringify([...local, { id }]),
            );
            setFav(true);
            setItems([...items, { id }]);
          }
        } catch (err) {
          console.log(err);
        }
      }}
    >
      <Icon
        name={fav ? 'heart' : 'hearto'}
        size={favType ? '20' : '25'}
        color="#886aad"
        style={{
          textAlign: 'center',
          marginTop: favType ? 5 : 8,
        }}
      />
    </Pressable>
  );
}
export default FavoriteButton;
