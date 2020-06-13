import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';

it('test Component Card', () => {
  const card = [
    {
      gender: 'female',
      name: {
        title: 'miss',
        first: 'catherine',
        last: 'kelley',
      },
      location: {
        street: '1352 ninth st',
        city: 'springfield',
        state: 'iowa',
        zip: '96474',
      },
      email: 'catherine.kelley56@example.com',
      username: 'greenrabbit328',
      password: 'susie',
      salt: 'CSr3dKeE',
      md5: 'ec90a7ad03fbd883416460ebdf59bca1',
      sha1: 'c083947d97432acf0f9e107e2b5ca1c134fbed0a',
      sha256:
        'a4d5938460490956082af6182b7ecbb88bf3610a6e7b1f54649e2220976ff055',
      registered: '1409024352',
      dob: '458529607',
      phone: '(724)-575-1036',
      cell: '(511)-192-7949',
      SSN: '578-55-1922',
      picture: 'http://api.randomuser.me/portraits/women/43.jpg',
    },
  ];
  expect(renderer.create(<Card card={card} />)).toMatchSnapshot();
});
