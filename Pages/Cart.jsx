import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Cart() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const favItem = async () => {
      setItems(JSON.parse(await AsyncStorage.getItem('cart')) || []);
    };
    favItem();
  }, []);
  return items.map((ele, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Text key={index}>
      {' '}
      {ele.id} counter :{ele.counter}
    </Text>
  ));
}
export default Cart;
