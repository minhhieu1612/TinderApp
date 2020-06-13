/**
 * @format
 */

import React from 'react';
import 'react-native';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {compose, applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../src/reducers';
import rootSaga from '../src/sagas';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  console.log('pass');
});
