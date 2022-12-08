import React, { useState } from 'react';
import Lottie from 'lottie-react-native';
import { Image, Text, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../assets/imageLoader.json';
import FavoriteButton from './FavoriteButton';

function Product({ item, flag }) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [errorImg, setErrorImg] = useState(false);

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('SingleProduct', {
          id: item.id,
          description: item.description,
          name: item.name,
          image: item.image_link,
          price: item.price,
          productColors: item.product_colors,
        });
      }}
    >
      <View
        style={{
          width: 180,
          height: 290,
          marginLeft: 20,
          marginTop: 5,
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
        <View style={{ position: 'relative' }}>
          <Image
            onLoadStart={() => {
              setLoading(true);
            }}
            onError={() => {
              setErrorImg(true);
            }}
            onLoadEnd={() => {
              setLoading(false);
            }}
            source={{
              uri: errorImg
                ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLx2ikECnRXDzPAAMSdJkpQ78Aqz-frGAq5Eez5Aak6X1nMhRpuFNY3Opl5Ys9BQLAEs&usqp=CAU'
                : item.image_link,
            }}
            alt="items"
            style={{
              display: 'block',
              marginRight: 'auto',
              marginLeft: 'auto',
              backgroundColor: 'white',
              width: 180,
              height: 200,
              borderRadius: 5,
            }}
          />
          <FavoriteButton cb={() => console.log(item.id)} flag="home" />
        </View>
        <View style={{ display: flag ? 'none' : 'block' }}>
          <Text style={{ fontWeight: 'bold', paddingTop: 5, paddingLeft: 5 }}>
            $ {item.price}
          </Text>
          <Text style={{ padding: 3, color: '#5c5959' }}>{item.name}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Product;
