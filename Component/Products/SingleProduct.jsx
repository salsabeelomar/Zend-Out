/* eslint-disable react/no-array-index-key */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FavoriteButton from './FavoriteButton';

const styles = StyleSheet.create({
  displayingRow: {
    display: 'flex',
    flexDirection: 'row',
    margin: 15,
  },
  text: {
    color: '#886aad',
    fontSize: 20,
    margin: 9,
    textAlign: 'center',
  },
  image: {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '90%',
    backgroundColor: 'white',
    height: 350,
    borderRadius: 5,
  },
  textCounter: {
    color: 'white',
    fontSize: 20,
    margin: 5,
  },
  ButtonColor: {
    borderRadius: 5,
    backgroundColor: '#886aad',
    fontSize: 20,
  },
  labels: { fontSize: 15, fontWeight: 'bold', color: '#886aad' },
  addCart: {
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
  },
  addCartText: {
    paddingLeft: 15,
    fontSize: 18,
    color: 'white',
    letterSpacing: 5,
  },
  colors: {
    width: 30,
    height: 30,
    margin: 5,
    borderRadius: 50,
  },
});

function ProductSingle({ route }) {
  const { description, productColors, image, id, name, price } = route.params;
  const [errorImg, setErrorImg] = useState(false);
  const [counter, setCounter] = useState(1);

  return (
    <View style={{ flex: 1, height: '100%' }}>
      <Image
        onError={() => {
          setErrorImg(true);
        }}
        source={{
          uri: errorImg
            ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLx2ikECnRXDzPAAMSdJkpQ78Aqz-frGAq5Eez5Aak6X1nMhRpuFNY3Opl5Ys9BQLAEs&usqp=CAU'
            : image,
        }}
        alt="items"
        style={styles.image}
      />
      <View
        style={{
          ...styles.displayingRow,
          marginRight: 30,
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.labels}>{name}</Text>
        <FavoriteButton id={id} flag="singlePage" />
      </View>

      <View>
        <View
          style={{
            ...styles.displayingRow,
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ paddingTop: 15, ...styles.text }}>{price}$</Text>
          <View
            style={{
              ...styles.displayingRow,
              alignItems: 'center',
              height: 38,
              width: 100,
            }}
          >
            <Pressable
              style={styles.ButtonColor}
              onPress={() => setCounter(counter + 1)}
            >
              <Text style={styles.textCounter}> + </Text>
            </Pressable>
            <Text style={styles.text}>{counter}</Text>
            <Pressable
              style={styles.ButtonColor}
              onPress={() => {
                if (counter > 1) {
                  setCounter(counter - 1);
                }
              }}
            >
              <Text style={styles.textCounter}> - </Text>
            </Pressable>
          </View>
        </View>
        <Text style={{ marginLeft: 15, color: 'grey', fontSize: 17 }}>
          {description}
        </Text>
      </View>

      {productColors.length > 0 && (
        <View style={{ margin: 15 }}>
          <Text style={styles.labels}>Colors: </Text>
          <View
            style={{
              ...styles.displayingRow,
              flexWrap: 'wrap',
            }}
          >
            {productColors.map((ele, index) => (
              <View
                key={index + 4}
                style={{ backgroundColor: ele.hex_value, ...styles.colors }}
              />
            ))}
          </View>
        </View>
      )}
      <Pressable
        onPress={async () => {
          try {
            const cart = JSON.parse(await AsyncStorage.getItem('cart')) || [];
            cart.push({ id, counter });
            await AsyncStorage.setItem('cart', JSON.stringify(cart));
            console.log({ id, counter }, 'added');
          } catch (error) {
            console.log(error);
          }
        }}
        style={styles.addCart}
      >
        <Icon name="shoppingcart" size="20" color="white" />
        <Text style={styles.addCartText}>ADD TO CART</Text>
      </Pressable>
    </View>
  );
}
export default ProductSingle;
