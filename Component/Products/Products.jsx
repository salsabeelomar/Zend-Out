import React, { useState } from 'react';
import Lottie from 'lottie-react-native';
import { FlatList } from 'react-native';
import Product from './Product';
import { data } from '../Products.json';
import productLoader from '../../assets/productLoader.json';

function Products() {
  const [product] = useState(data);

  return product.length > 0 ? (
    <FlatList
      numColumns={2}
      data={product}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return <Product item={item} />;
      }}
    />
  ) : (
    <Lottie source={productLoader} autoPlay loop />
  );
}

export default Products;
