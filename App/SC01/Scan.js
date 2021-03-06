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
  Slider,
  NetInfo,
  Dimensions
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import OfflineNotice from './OfflineNotice';
import DeviceInfo from 'react-native-device-info';
import {login, scan, getProduct} from '../../api';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
 
const param = {
  language_code:'JP',
  password : '123456',
  device_code : DeviceInfo.getDeviceId()
}
       const test = '4946842637867';


export default class Scanner extends Component {
  constructor(props) {
    super(props);
    this.RNCamera = null;
    this.barcodeCodes = [];

    this.state = {
        type: RNCamera.Constants.Type.back,
        barcodeFinderVisible: true,
        zoom: 0,
        autoFocus: 'on',
        depth: 0,
        token: '',
        data: '',
        // product: {
        //   name: '',
        //   img_product: '',
        //   product_code: '',
        //   price: '',
        //   detail_typeE1: ''
        // },
        name:'',
          img_product: '',
          product_code: '',
          price: '',
          detail_typeE1: '',
        info: ''
    };
  }

  zoomOut() {
    this.setState({
      zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1,
    });
  }

  zoomIn() {
    this.setState({
      zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1,
    });
  }  

  toggleFocus() {
    this.setState({
      autoFocus: this.state.autoFocus === 'on' ? 'off' : 'on',
    });
  }

  setFocusDepth(depth) {
    this.setState({
      depth: this.state.depth = depth,
    });
  }

  setZoom(zoom) {
    this.setState({
      zoom: this.state.zoom = zoom,
    });
  }

  onBarCodeRead(scanResult) {
    // alert('Barcode detected!');
    // console.warn(scanResult.type);
    // console.warn(scanResult.data);
    if (scanResult.data != null) {
	    if (!this.barcodeCodes.includes(scanResult.data)) {
	      this.barcodeCodes.push(scanResult.data);
        //console.warn('onBarCodeRead call');
        //alert(scanResult.data);
        // this.props.navigation.navigate('Screen_SC04', {
        //   id: scanResult.data, 
        //   type: scanResult.type
        // });
 
        scan(scanResult.data)
        .then((res) => {
          this.setState({          
            // name: this.state.product.name = res.body.name,
            // img_product: this.state.product.img_product = res.body.img_product,
            // product_code: this.state.product.product_code = res.body.product_code,
            // price: this.state.product.price = res.body.price,
            // detail_typeE1: this.state.product.detail_typeE1 = res.body.detail_typeE1,
            // info: res.body
            //product:res.body
            name: res.body.name,
            img_product: res.body.img_product,
            price : res.body.price,
            product_code: res.body.product_code,
             detail_typeE1 : res.body.detail_typeE1
          } );
          console.log("Data : "+this.state.name);
          //console.warn("Data : "+this.state.info); 
          //alert(this.state.name)
        }).catch((error)=>{
          this.setState({ name : error });
        });
        this.props.navigation.navigate('Screen_SC04', {
          id: scanResult.data, 
          type: scanResult.type,
           img_product: this.state.img_product,
           price: this.state.price,
           detail_typeE1: this.state.detail_typeE1,
          name : this.state.name
        });
        this.barcodeCodes = [];
	    }
    }
    return;
  }
  check(){
    this.props.navigation.navigate('Screen_SC02');
    //alert("Thong bao");
  }
  
  componentDidMount() {
    //this.result();
  //  this.onBarCodeRead(scanResult);
    //console.warn(this.state.data); 
  }
  
  result(){
    login(param).then((res) => {

          this.setState({ data: res.body.device_code } );
          console.log("Data : "+this.state.data);
          alert(this.state.data)
        }).catch((error)=>{
          this.setState({ data: error });
    });
  };

  
  
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style = {styles.cam}
          barCodeTypes={[
            RNCamera.Constants.BarCodeType.ean13,
            RNCamera.Constants.BarCodeType.qr,
            RNCamera.Constants.BarCodeType.aztec,
            RNCamera.Constants.BarCodeType.code128,
            RNCamera.Constants.BarCodeType.code39,
            RNCamera.Constants.BarCodeType.code39mod43,
            RNCamera.Constants.BarCodeType.ean8,
            RNCamera.Constants.BarCodeType.pdf417,
            RNCamera.Constants.BarCodeType.upce,
            RNCamera.Constants.BarCodeType.interleaved2of5,
            RNCamera.Constants.BarCodeType.itf14,
            RNCamera.Constants.BarCodeType.datamatrix
          ]}
          zoom = {this.state.zoom}
          focusDepth = {this.state.depth}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          ref={(cam) => {
            this.RNCamera = cam;
          }}
          //aspect = {RNCamera.Constants.Aspect.fill}
          //onFocusChanged = {() => {}}
          //onZoomChanged = {() => {}}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use RNCamera'}
          permissionDialogMessage={'We need your permission to use your RNCamera phone'}
        >
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width:width,
            }}>
          <Text style = {styles.jp}>
              枠内にバーコードを差してください
          </Text>
          <Text  style = {styles.white}>{param.id}</Text>
        </View>
        
        
        <View style={{flexDirection: 'row-reverse', flex: 5}}>
            <View style={{flex: 0.5, backgroundColor: 'rgba(0, 0, 0, 0.5)', width:width }}>
            </View>
            <View
              style = {{
                flex: 4,
                borderColor: 'white',
                borderWidth: 2,
                backgroundColor: 'transparent' ,
                //marginBottom: 10,
                //height:height,
                width:width,
                //height: width* 0.5
              }}
            > 
            </View>
            <View style={{flex: 0.5, backgroundColor: 'rgba(0, 0, 0, 0.5)', width:width}}>
            </View>
          </View>
        
        {/* <View
            style = {{
              flex: 1,
              width: 300,
              height: 300,
              //justifyContent: 'space-between',
              //alignItems: 'space-around',
              alignSelf: 'center',
              //alignContent: 'space-around',
              borderWidth : 2,
              borderColor: '#ffffff',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 0,
            }}
          >
            <Slider
              style={{ width: 200, marginTop: 10, alignSelf: 'flex-end' }}
              onValueChange={this.setFocusDepth.bind(this)}
              step={0.1}
              disabled={this.state.autoFocus === 'on'}
            />

            <Slider
              style={{ 
                width: 200, 
                marginTop: 10, 
                alignSelf: 'flex-end' , 

              }}
                onValueChange={this.setZoom.bind(this)}
                step={0.05}
                //disabled={this.state.autoFocus === 'on'}
                orientation = 'vertical'
            />
           
          </View> */}
            
          <View style={{ flex: 5, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: width, alignItems: 'center' }}>
              <TouchableOpacity style = {styles.button} >
                <Text style = {styles.white}> Drugs </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={()=>this.check()}>
                <Text style = {styles.jp}> 地図 </Text>
              </TouchableOpacity>

              <View style={{flex: 3}}>
              </View>
          </View>
        
        </RNCamera>
        </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'rgba(0, 0, 0, 1)',
    //zIndex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 5,
    //paddingVertical: 40,
    //paddingHorizontal: 20,
    //padding: 10,
    //paddingTop: 10,
    marginTop: 20,
    //alignSelf: 'center',
    //height:height*1.5,
    width:width*0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  cam: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    //marginHorizontal: 20,
    //marginVertical: 90,
  },

  jp: {
    color: 'white',
    fontFamily: 'Meiryo',
    fontSize: 18,
  },
  white: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 20,
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
  }
});
