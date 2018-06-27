import React, {Component} from 'react';
import {connect} from 'react-redux';

// export class Toggle extends Component {
// 	render(){
// 		return(
// 			<div>
// 			{this.props.messageVisibility &&
// 				<p>Message visible when button toggled</p>
// 			}
// 				<button>Toggle Me</button>
// 			</div>
// 		)
// 	}
// }

//params are available from state via connect 
const Toggle = ({messageVisibility, dispatch})=>(
	<div>
		{messageVisibility &&
			<p>Message visible when button toggled</p>
		}
		<button onClick={()=>dispatch({
			type: 'TOGGLE_MESSAGE',
		})}
		>Toggle Me</button>
	</div>
);


//pick which aspects of the store are getting into the component. imp as store grows
const mapStateToProps = (state) => ({
	messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toggle); //connect toggle to redux store and 