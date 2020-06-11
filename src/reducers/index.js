import {combineReducers} from 'redux';
import {reducers as favorites} from '../containers/Favorites';
import {reducers as users} from '../containers/Home';
import {reducers as loading} from '../containers/Loading';
export default combineReducers({favorites, users, loading});
