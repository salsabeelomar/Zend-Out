import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react-native';
import { FlatList } from 'react-native';
import axios from 'axios';
import Product from './Product';
import { data } from '../Products.json';
import productLoader from '../../assets/productLoader.json';

function Products() {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    try {
      const getProducts = async () => {
        const bronzerApi = await axios.get(
          'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Bronzer&price_less_than=30&price_greater_than=10',
        );
        const lipsticksApi = await axios.get(
          'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick&&price_less_than=10&price_greater_than=5',
        );
        setProducts(bronzerApi.data.concat(lipsticksApi.data));
      };
      getProducts();
    } catch (err) {
      setProducts(data);
    }
  }, []);
  return product.length > 0 ? (
    <FlatList
      numColumns={2}
      data={product}
      keyExtractor={item => item.id}
      initialNumToRender={5}
      renderItem={({ item }) => {
        return <Product item={item} flag={false} />;
      }}
    />
  ) : (
    <Lottie source={productLoader} autoPlay loop />
  );
}

export default Products;
