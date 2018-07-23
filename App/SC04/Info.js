
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  AlertIOS,
  Platform
} from 'react-native';

export default class DrugInfo extends Component {
    render() {
      const {navigation} = this.props;
      const id = navigation.getParam('id', 'no_id');
      const type = navigation.getParam('type', 'no_type');
      return (
        <View>
          <Text> id: {JSON.stringify(id)} </Text>
          <Text> type: {JSON.stringify(type)} </Text>

        </View>
      );
    }
  }