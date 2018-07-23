/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions , Button, TouchableOpacity, TextInput} from 'react-native';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';

import testing from '../../testing';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {{zIndex: 2, alignContent: 'flex-start'}}>
          <TextInput
            style = {{zIndex: 2, alignContent: 'flex-start'}}
            onFocus = {()=>this.props.navigation.navigate('Search')}
          />
          <TouchableOpacity style = {{
            zIndex: 2, 
           //flexDirection: 'row',
            //justifyContent: 'flex-start',
            alignSelf:'flex-end' , 
            alignContent: 'space-between',
            //alignItems: 'flex-start',
            marginBottom: 10,
            borderWidth: 2,
          }}>       
            <Text style = {{fontSize: 30, color: '#000000'}} onPress = {()=>this.props.navigation.navigate('Search')}>
              Search
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.container}>
          <MapView
            style={{
              width: width,
              height: height,
              zIndex: 1,
              position: 'absolute',
            }}
            rotateEnabled = {true}
            zoomEnabled = {true}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    //zIndex: 0,
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
