
//contains state for this particular reducer
const initialState = {
	messageVisibility: false,
};


//unnamed for simplicity, reducer  
export default function(state= initialState, action){
	const {type} = action; //same as action.type set to const, object destructuring
	switch(type){
		case 'TOGGLE_MESSAGE':
			return {
				...state, //spread state, returning new object full of state
				messageVisibility: !state.messageVisibility
			}
			
		default:
			return state;
	}
}