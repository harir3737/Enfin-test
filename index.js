/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './Pages/Login';
import Home from './Pages/Home';
import InputFeild from './component/InputFeild';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
