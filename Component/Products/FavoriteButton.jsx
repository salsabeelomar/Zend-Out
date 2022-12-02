import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function FavoriteButton({ cb, flag }) {
  const [fav, setFav] = useState(false);
  const favType = flag === 'home';
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
      onPress={() => {
        cb();
        setFav(!fav);
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
