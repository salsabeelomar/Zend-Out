/* eslint-disable react/no-array-index-key */
import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Favorite() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const favItem = async () => {
      setItems(JSON.parse(await AsyncStorage.getItem('favorite')) || []);
    };
    favItem();
  }, []);
  return items.map((ele, index) => <Text key={index}> {ele.id}</Text>);
}
export default Favorite;
