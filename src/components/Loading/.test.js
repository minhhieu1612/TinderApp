import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './index';

it('test Component Loading', () => {
  expect(renderer.create(<Loading />)).toMatchSnapshot();
});
