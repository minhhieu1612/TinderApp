import types from './types';
import AsyncStorage from '@react-native-community/async-storage';
// import usersData from '../../data/users';
// const dataFormat = JSON.parse(JSON.stringify(usersData));
const initialState = [
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'ronnie',
      last: 'woods',
    },
    location: {
      street: '6053 w 6th st',
      city: 'spokane',
      state: 'michigan',
      zip: '80476',
    },
    email: 'ronnie.woods76@example.com',
    username: 'crazyrabbit45',
    password: 'asd123',
    salt: 'AbDItmeP',
    md5: 'ff3a57d1af0c31a36bba3ad560ef886a',
    sha1: 'dbc25fe3a80dba674013fedc0ce255aaeae85c6a',
    sha256: '9aad20b9640feccf8afa20836a56f4a3e2cb47ec3db489168804a16f3cd422e8',
    registered: '1293014867',
    dob: '325693741',
    phone: '(738)-776-6548',
    cell: '(240)-302-8218',
    SSN: '998-97-6696',
    picture: 'http://api.randomuser.me/portraits/men/87.jpg',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'ronnie',
      last: 'woods',
    },
    location: {
      street: '6053 w 6th st',
      city: 'spokane',
      state: 'michigan',
      zip: '80476',
    },
    email: 'ronnie.woods76@example.com',
    username: 'crazyrabbit45',
    password: 'asd123',
    salt: 'AbDItmeP',
    md5: 'ff3a57d1af0c31a36bba3ad560ef886a',
    sha1: 'dbc25fe3a80dba674013fedc0ce255aaeae85c6a',
    sha256: '9aad20b9640feccf8afa20836a56f4a3e2cb47ec3db489168804a16f3cd422e8',
    registered: '1293014867',
    dob: '325693741',
    phone: '(738)-776-6548',
    cell: '(240)-302-8218',
    SSN: '998-97-6696',
    picture: 'http://api.randomuser.me/portraits/men/87.jpg',
  },
];
//  async () => {
//   console.log(usersData);

//   const res = await AsyncStorage.getItem('favorites');
//   console.log('res', res);

//   if (res) return res;
//   return [usersData.map(({user}) => user)[0]];
// };

const myReducer = (state = initialState, actions) => {
  let newState;
  switch (actions.type) {
    case types.CREATE_FAVORITE:
      // eslint-disable-next-line no-lone-blocks
      {
        state.push(actions.favorite);
        AsyncStorage.setItem('favorites', state);
      }
      break;
    case types.DELETE_FAVORITE:
      {
        const index = state.map(({key}) => key).indexOf(actions.key);
        state.splice(index, 1);
        console.log(index, state);

        AsyncStorage.setItem('favorites', state);
      }
      break;
    default:
      newState = state;
      break;
  }

  return state;
};

export default myReducer;
