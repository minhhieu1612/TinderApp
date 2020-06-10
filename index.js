/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import rootReducers from './src/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const store = createStore(rootReducers);

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <App />
  </Provider>
));
