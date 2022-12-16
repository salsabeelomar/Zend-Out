/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import Product from '../Products/Product';
import { Favorite } from '../../Context/FavoriteContext';

function FavoriteCom() {
  const { items } = useContext(Favorite);
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={({ item }) => <Product item={item} flag={false} />}
    />
  );
}
export default FavoriteCom;
