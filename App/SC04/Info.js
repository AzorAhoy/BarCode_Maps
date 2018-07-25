
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  AlertIOS,
  Platform,
  Image
} from 'react-native';

export default class DrugInfo extends Component {
    render() {
      const {navigation} = this.props;
      const id = navigation.getParam('id', 'no_id');
      const type = navigation.getParam('type', 'no_type');
      const name = navigation.getParam('name', 'no_name');
      const img_product = navigation.getParam('img_product', 'no_img_product');
      const price = navigation.getParam('price', 'no_price');
      const detail_typeE1 = navigation.getParam('detail_typeE1', 'no_detail_typeE1');
      return (
        <View>
          <Text> id: {JSON.stringify(id)} </Text>
          <Text> type: {JSON.stringify(type)} </Text>
          <Text> name: {JSON.stringify(name)} </Text>
          <Image
            source = {{uri: img_product}}
            style= {{width:200, height: 200}}
          />
          <Text> img_product: {JSON.stringify(img_product)} </Text>
          <Text> price: {JSON.stringify(price)} </Text>
          <Text> detail_typeE1: {JSON.stringify(detail_typeE1)} </Text>
        </View>
      );
    }
  }