import {combineReducers} from 'redux';
import message from './reducer';


//object takes in message
const rootReducer = combineReducers({
	message,
})


//selector
export function getMessageVisibility(store){
	return message.messageVisibility 
}

export default rootReducer;