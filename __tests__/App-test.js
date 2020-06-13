/**
 * @format
 */

// import {View} from 'react-native';
import React from 'react';
import App from '../App';
// import jest from 'jest';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// jest.mock('react-native-reanimated', () => {
//   return {
//     Value: jest.fn(),
//     event: jest.fn(),
//     add: jest.fn(),
//     eq: jest.fn(),
//     set: jest.fn(),
//     cond: jest.fn(),
//     interpolate: jest.fn(),
//     View: View,
//     Extrapolate: {CLAMP: jest.fn()},
//     Transition: {
//       Together: 'Together',
//       Out: 'Out',
//       In: 'In',
//     },
//   };
// });

it('renders correctly', () => {
  renderer.create(<App />);
  console.log('pass');
});
