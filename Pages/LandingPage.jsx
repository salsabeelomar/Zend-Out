import React from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';
import { ImageSlider } from 'react-native-image-slider-banner';
import Icon from 'react-native-vector-icons/AntDesign';
import { data } from '../Component/Products.json';
import Product from '../Component/Products/Product';

const styles = StyleSheet.create({
  text: { marginLeft: 15, fontSize: 18, color: '#372052' },
});
function Landing() {
  return (
    <View>
      <ImageSlider
        preview={false}
        data={[
          {
            img: 'https://images.unsplash.com/photo-1617113136188-b28e80d99df1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          },
          {
            img: 'https://images.unsplash.com/photo-1617220377936-6423b02875d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            img: 'https://images.unsplash.com/photo-1617220383946-e9c2ba370736?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          },
        ]}
        showIndicator={false}
      />
      <Text style={styles.text}>Categories</Text>
      <FlatList
        data={[
          'https://www.clinique.com/media/export/cms/products/181x209/clq_749K01_181x209.png',
          'https://www.clinique.com/media/export/cms/products/181x209/clq_6FW2_181x209.png',
          'https://www.clinique.com/media/export/cms/products/181x209/clq_ZAMN_181x209.png',
        ]}
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
          marginHorizontal: 15,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              borderRadius: 100,
              width: 110,
              height: 110,
              backgroundColor: '#886aad57',
            }}
          >
            <Image
              source={{
                uri: item,
              }}
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: 100,
                height: 100,
              }}
            />
          </View>
        )}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.text}>All Products</Text>
        <Icon name="arrowright" size="25" color="#886aad" />
      </View>
      <ScrollView contentContainerStyle={{ flexDirection: 'row' }} horizontal>
        {data.slice(0, 6).map(ele => (
          <Product key={ele.id} item={ele} />
        ))}
      </ScrollView>
    </View>
  );
}
export default Landing;
