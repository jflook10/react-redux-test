import {combineReducers} from 'redux';
import message from './reducer';


//object takes in message
const rootReducer = combineReducers({
	message,
})

export default rootReducer;