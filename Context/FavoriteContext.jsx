import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favorite = createContext({});

function FavoriteProvider({ children }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const favItem = async () => {
      const itemsArray =
        JSON.parse(await AsyncStorage.getItem('favorite')) || [];
      setItems([...itemsArray]);
    };
    favItem();
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Favorite.Provider value={{ items, setItems }}>
      {children}
    </Favorite.Provider>
  );
}
export { FavoriteProvider, Favorite };
