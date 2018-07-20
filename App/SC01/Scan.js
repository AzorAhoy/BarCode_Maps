/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  NetInfo
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import OfflineNotice from './OfflineNotice';
import {createStackNavigator} from 'react-navigation';
import { Map } from '../SC02';
NetInfo.isConnected.fetch().then(isConnected => {
  if(isConnected)
  {
      alert('Internet is connected');
  }
  else {
    alert('No Internet');
  }
})

export default class Scanner extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
	      barcodeFinderVisible: true
      }
    };
}
  
  onBarCodeRead(scanResult) {
    // alert('Barcode detected!');
    // console.warn(scanResult.type);
    // console.warn(scanResult.data);
    if (scanResult.data != null) {
	    if (!this.barcodeCodes.includes(scanResult.data)) {
	      this.barcodeCodes.push(scanResult.data);
        console.warn('onBarCodeRead call');
        //alert(scanResult.data);
        this.props.navigation.navigate('Screen_SC04', {
          id: scanResult.data,
          type: scanResult.type
        });
	    }
    }
    return;
  }
  check(){
    this.props.navigation.navigate('Screen_SC02');
    //alert("Thong bao");
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.jp}>バーコード読み取り</Text>
        <Text style = {styles.jp}>枠内にバーコードを差してください</Text>
        <RNCamera
          style = {styles.cam}
          barCodeTypes={[
            RNCamera.Constants.BarCodeType.ean13,
            RNCamera.Constants.BarCodeType.qr,
          ]}
          barcodeFinderVisible = {this.state.camera.barcodeFinderVisible}
          barcodeFinderWidth = {280}
          barcodeFinderHeight = {280}
          barcodeFinderBorderColor = 'white'
          barcodeFinderBorderWidth = {2}
          //defaultTouchToFocus
          autoFocus
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          ref={ref => {
            this.camera = ref;
          }}
          //onFocusChanged = {() => {}}
          onZoomChanged = {() => {}}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{ flex: 0, flexDirection: 'column', justifyContent: 'center', }}>
          <TouchableOpacity style = {styles.button} >
            <Text style = {styles.white}> Drugs </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>this.check()}>
            <Text style = {styles.white}> Maps </Text>
          </TouchableOpacity>
        </View>
        <OfflineNotice/>
        </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    borderColor: 'white',
    borderWidth: 1,
  },
  cam: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    //marginVertical: 90,
  },

  jp: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Meiryo',
    fontSize: 30,
  },
  white: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arial'
  }
});
