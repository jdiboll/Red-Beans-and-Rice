import React, { Component } from 'react';
//import { render } from 'react-dom';
import Userform from './userform';

export default class Signup extends Component {

	render() {
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-4">

					<Userform />
				</div> 
			</div>



			);
	};
}