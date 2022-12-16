import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = createContext({});

function TotalProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const favItem = async () => {
      const { cartItems, totalItems } =
        JSON.parse(await AsyncStorage.getItem('cart')) || [];
      setCart([...cartItems]);
      setTotal(totalItems);
    };
    favItem();
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Cart.Provider value={{ total, setTotal, cart, setCart }}>
      {children}
    </Cart.Provider>
  );
}
export { TotalProvider, Cart };
