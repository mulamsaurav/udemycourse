/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {axiosSetup} from './src/utils/request.js';

axiosSetup();

AppRegistry.registerComponent(appName, () => App);
