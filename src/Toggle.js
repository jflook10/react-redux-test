import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

import {toggleMessage} from './actions'
import {getMessageVisibility} from './rootReducer'
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
//dispatch is a funct avail to the component that accepts and object/action. Here we are passing in a function that returns an object
const Toggle = ({messageVisibility, toggleMessage})=>(
	<div className="div-toggle">
		{messageVisibility &&
			<p className="p-toggle">Message visible when button toggled</p>
		}
		<button className="button-toggle" onClick={toggleMessage}>Toggle Me</button> 
	</div>
);


//pick which aspects of the store are getting into the component. imp as store grows
// selector pattern
const mapStateToProps = (state) => ({
	messageVisibility: getMessageVisibility(state)
});

//way with out selector pattern
// const mapStateToProps = (state) => ({
// 	messageVisibility: state.message.messageVisibility
// });



//any actions defined here are available in the Toggle with out using dispatch
const mapDispatchToProps = (dispatch) => bindActionCreators({
	toggleMessage //new action prop 
}, dispatch) //bind action to dispatch so dont need to call from dispatch. 

export default connect(mapStateToProps, mapDispatchToProps)(Toggle); //connect toggle to redux store and 