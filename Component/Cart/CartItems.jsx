import { FlatList, Text, View } from 'react-native';
import React, { useContext } from 'react';
import Product from '../Products/Product';
import { Cart } from '../../Context/CartContext';

function CartCom() {
  const { total, cart } = useContext(Cart);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cart}
        numColumns={2}
        keyExtractor={item => item.item.id}
        renderItem={({ item }) => <Product item={item.item} flag={false} />}
      />
      <View
        style={{
          position: 'absolute',
          flex: 0.1,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          flexDirection: 'row',
          backgroundColor: '#886aad',
          width: '100%',
          borderTopEndRadius: 60,
          borderTopStartRadius: 60,
        }}
      >
        <Text
          style={{
            paddingLeft: 15,
            fontSize: 18,
            color: 'white',
            letterSpacing: 5,
          }}
        >
          Total Price : {total}$
        </Text>
      </View>
    </View>
  );
}

export default CartCom;
