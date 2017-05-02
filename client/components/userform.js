import React, { Component } from 'react';





export default class Userform extends Component {
	render() {
		return (
			<form>
			<h2>Join the Game!</h2>

			<div className="form-group">
				<label className="control-label">Username</label>
				<input
					type="text"
					name="username"
					className="form-control"
					/>
			</div>
			<div className="form-group">
				<button className="btn btn-primary btn-lg">Sign Up!</button>
			</div>
			</form>






			);
	}





}