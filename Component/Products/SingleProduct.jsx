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
});
function ProductSingle({ route }) {
  const { description, productColors, image, id, name, price } = route.params;
  const [errorImg, setErrorImg] = useState(false);
  const [counter, setCounter] = useState(1);

  return (
    <View>
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
        <Text> {name} </Text>
        <FavoriteButton
          cb={() => {
            console.log(id);
          }}
        />
      </View>

      <View>
        <View
          style={{
            ...styles.displayingRow,
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.text}>{price}$</Text>
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
        <Text>{description}</Text>
      </View>

      {productColors.length > 0 && (
        <>
          <Text>Colors: </Text>
          <View
            style={{
              ...styles.displayingRow,
              flexWrap: 'wrap',
            }}
          >
            {productColors.map((ele, index) => (
              <View
                key={() => index}
                style={{
                  width: 30,
                  height: 30,
                  margin: 5,
                  borderRadius: 50,
                  backgroundColor: ele.hex_value,
                }}
              />
            ))}
          </View>
        </>
      )}
      <Pressable onPress={() => {}}>
        <Text> Add to cart </Text>
        <Icon name="shoppingcart" size="20" color="#886aad" />
      </Pressable>
    </View>
  );
}
export default ProductSingle;
