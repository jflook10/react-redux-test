//reuseable dispatch functions rather than re-writing
//action creator, function that returns an object. preferable when reusing an action. 
export function toggleMessage(){
	return {
		type: 'TOGGLE_MESSAGE'
	}
}