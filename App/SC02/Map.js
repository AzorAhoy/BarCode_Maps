/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet,Item, Text, View, Dimensions, TouchableOpacity,Button,Picker } from 'react-native';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';
import {StackNavigator} from 'react-navigation'
import { SearchBar } from 'react-native-elements'
import { Icon } from 'react-native-elements'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class App extends Component {
  // getBack(){
  //   this.props.navigation.navigate('Screen_SC01');
  //   //alert("Thong bao");
  // }
  constructor (props){
    super(props);
    this.state={
      selected:"H",
    }
  }

  render() {
    return (
      <View style={styles.container}>
     
        <View style={{zIndex:0, height:height*1/25,flex: 0.75}}>
        </View>

        <View style={{flexDirection: 'row', flex: 15}}>
              <View style={{zIndex:0, width:width,flex: 0.25}}>
              </View>

              <View style={{flex: 1.5, zIndex:2}}>
                  <TouchableOpacity style={styles.buttonBack}
                      onPress={()=>this.props.navigation.navigate('Screen_SC01')}
                      >
                      <Icon name="keyboard-backspace"/>
                  </TouchableOpacity>
              </View>

              <View style={{zIndex:0, width:width, flex:0.25}}>
              </View>
              
              <View style={{zIndex:2,width:width,height:height*1/12,flex:7 }}>
                  <SearchBar
                  
                        clearIcon={{ color: 'yellow' }}
                        searchIcon={false} // You could have passed `null` too
                        //onChangeText={someMethod}
                        //onClear={someMethod}
                        containerStyle={styles.buttonSearch}
                        inputStyle={styles.buttonSearchInput}
                        placeholder='Type Here...' />
              </View>

              <View style={{zIndex:0, width:width, flex:0.25}}>
              </View>

              <View style={{zIndex:2,width:width,height:height*1/12, flex:2, borderRadius: 10, backgroundColor:'#FFFFFF'}}>
                  <Picker
                      mode= "dropdown"
                      
                      style={styles.stylePicker}
                      itemStyle={{ backgroundColor: 'red', marginLeft:10 }}
                      //itemTextStyle={{ fontSize: 18, color: 'white' }}
                      selectedValue={this.state.selected}
                      onValueChange={(value)=> this.setState({selected:value})}>
                                            
                      <Picker.Item label="H" value="Hieu"/>
                      <Picker.Item label="" value="Long"/>
                      <Picker.Item label="V" value="Vuong"/>
                      <Picker.Item label="L" value="Luan"/>
                  </Picker>
                </View>

                <View style={{zIndex:0, width:width,flex: 0.25}}>
                </View>
          </View>
        
      
      
        <MapView
          style={{
            zIndex:1,
            position:'absolute',
            width: width,
            height: height,
          }}
          // //provider="google"
					showsUserLocation={true}
					showsMyLocationButton={true}
					showsCompass={true}
					followsUserLocation={true}
					loadingEnabled={true}
					toolbarEnabled={true}
					zoomEnabled={true}
					rotateEnabled={false}
          initialRegion={{
            latitude: 21.028511,
            longitude: 105.804817,
            latitudeDelta: 0.092,
            longitudeDelta: 0.0001,
          }}
        >
        
        
          <Marker
            coordinate = {{
                        latitude: 21.028511,
                        longitude: 105.804817,
                        latitudeDelta: 0.092,
                        longitudeDelta: 0.0001,
            }}
            draggable
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
   // justifyContent: 'center',
    //alignItems: 'center',
    zIndex: 0,
    
    // backgroundColor: '#F5FCFF',
  },
  buttonBack:{
    zIndex:2,
    backgroundColor:'#FFFFFF',
   // width:width, 
    height:height*1/12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSearch:{
    backgroundColor:'#FFFFFF',
    borderRadius: 10,
    //alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
   // borderColor: '#FFFFFF',
  },
  stylePicker:{
    //backgroundColor: '#FFFFFF',
    //alignContent: 'center',
    //justifyContent: 'center',
    //borderRadius: 20,
  },
  buttonSearchInput:{
    padding: 10,
    backgroundColor: 'red',
    marginBottom: 10,
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
