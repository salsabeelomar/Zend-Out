import React, { useState } from 'react';
import Lottie from 'lottie-react-native';
import { Image, Text, View } from 'react-native';
import Loader from '../../assets/imageLoader.json';

function Product({ item }) {
  const [loading, setLoading] = useState(false);
  return (
    <View
      style={{
        width: 200,
        height: 250,
        margin: 10,
      }}
    >
      {loading && (
        <Lottie
          source={Loader}
          style={{ display: 'block', width: 150, height: 150 }}
          autoPlay
          loop
        />
      )}
      <Image
        onLoadStart={() => {
          setLoading(true);
        }}
        onError={() => {
          setLoading(true);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        source={{ uri: item.image }}
        alt="items"
        style={{
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
          width: 150,
          height: 150,
          borderRadius: 5,
        }}
      />
      <Text>{item.title}</Text>
      <Text>{item.price}$</Text>
      <View style={{ flex: 1, flexDirection: 'row' }} />
    </View>
  );
}
export default Product;
