import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react-native';
import { FlatList } from 'react-native';
import Product from './Product';
import productLoader from '../../assets/productLoader.json';

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProduct(() => data);
    };
    getProduct();
  }, []);

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
