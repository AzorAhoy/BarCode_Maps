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
    Screen_SC01: Scan,
    Screen_SC02: Map,
    Screen_SC04: DrugInfo
},
{
    initialRouteName:'Screen_SC01'
 }
)
AppRegistry.registerComponent(appName, () => Router);

