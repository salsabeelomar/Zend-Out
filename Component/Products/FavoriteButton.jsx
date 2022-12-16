import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Favorite } from '../../Context/FavoriteContext';

function FavoriteButton({ product, flag }) {
  const { items, setItems } = useContext(Favorite);
  const [fav, setFav] = useState(false);
  const favType = flag === 'home';

  useEffect(() => {
    const item = items.find(ele => ele.id === product.id);
    setFav(!(item === undefined) && item.id === product.id);
  }, [items]);

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

          if (local.filter(ele => ele.id === product.id).length > 0) {
            const newItems = local.filter(ele => ele.id !== product.id);
            await AsyncStorage.setItem('favorite', JSON.stringify(newItems));
            setFav(false);
            setItems(newItems);
          } else {
            await AsyncStorage.setItem(
              'favorite',
              JSON.stringify([...local, product]),
            );
            setItems([...local, product]);
            setFav(true);
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
