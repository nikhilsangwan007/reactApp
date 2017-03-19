import {combineReducers} from 'redux';
import userReducers from './userReducer';

const allReducers = combineReducers(
		{
			users: userReducers
		}
	);

export default allReducers;
