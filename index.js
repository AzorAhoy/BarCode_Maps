/** @format */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation'
import { Scan } from './App/SC01'
import { Map }  from './App/SC02'
import { DrugInfo } from './App/SC04'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Router = createStackNavigator({
    Screen_SC01: {
        screen:Scan,
        navigationOptions:{
            headerTitle: "バーコード読み取り",
            headerStyle: { backgroundColor: '#00CCFF'},
            headerTitleStyle:{
                fontSize: 20,
                color: '#FFFFFF', 
                fontWeight: "bold", 
                paddingLeft: 70,
                //alignSelf: 'center',
                //justifyContent: 'center',
                textAlign: 'center',
                fontFamily: 'Meiryo',
            }
        }
        },
    Screen_SC02: {
        screen: Map,
        navigationOptions:{
            header: null
            
        }
    },
    Screen_SC04: DrugInfo
},
{
    initialRouteName:'Screen_SC01',
    //headerMode: 'none'
 }
)
AppRegistry.registerComponent(appName, () => Router);

