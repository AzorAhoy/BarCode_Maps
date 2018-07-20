/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{
            width: width,
            height: height,
          }}
          initialRegion={{
            latitude: 21.028511,
            longitude: 105.804817,
            latitudeDelta: 0.092,
            longitudeDelta: 0.0001,
          }}
        >
          <Marker
            coordinate={{
              latitude: 21.028511,
              longitude: 105.804817,
            }}
            title={'hello'}
            description={'..'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
