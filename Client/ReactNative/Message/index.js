/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {typography} from './src/Utils/typography';

// custom default font for entire app
typography();

AppRegistry.registerComponent(appName, () => App);
