import React from 'react';
import { ScrollView, FlatList, Image, Text, View } from 'react-native';
import { ImageSlider } from 'react-native-image-slider-banner';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './styles';
import { data } from '../Products.json';
import Product from '../Products/Product';

function Landing() {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: -15 }}>
      <ImageSlider
        preview={false}
        data={[
          {
            img: 'https://images.unsplash.com/photo-1617220383946-e9c2ba370736?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          },
          {
            img: 'https://images.unsplash.com/photo-1617220377936-6423b02875d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            img: 'https://images.unsplash.com/photo-1617113136188-b28e80d99df1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          },
        ]}
        showIndicator={false}
      />
      <Text style={styles.text}>Categories</Text>
      <FlatList
        data={[
          'https://www.clinique.com/media/export/cms/products/181x209/clq_749K01_181x209.png',
          'https://www.clinique.com/media/export/cms/products/181x209/clq_ZAMN_181x209.png',
          'https://www.clinique.com/media/export/cms/products/181x209/clq_6FW2_181x209.png',
        ]}
        contentContainerStyle={styles.categories}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Image
              source={{
                uri: item,
              }}
              style={styles.image}
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
        <Pressable
          onPress={() => {
            navigation.navigate('Products');
          }}
        >
          <Icon name="arrowright" size="25" color="#886aad" />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={{ flexDirection: 'row' }} horizontal>
        {data.slice(0, 6).map(ele => (
          <Product key={ele.id} item={ele} flag />
        ))}
      </ScrollView>
    </View>
  );
}

export default Landing;
