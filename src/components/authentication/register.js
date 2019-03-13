import React, { Component } from 'react';

export default class Register extends Component {
	state = {
		email: '',
		password: '',
		username: '',
		name: ''
	};
	handleFieldChange = (e) => {
		const stateToChange = {};
		stateToChange[e.target.id] = e.target.value;
		this.setState(stateToChange);
	};
	handleRegister = (e) => {
		e.preventDefault();
		const newUser = {
			email: this.state.email,
			password: this.state.password,
			username: this.state.username,
			name: this.state.name
		};
		this.props.addUser(newUser).then(() => 
        this.props.history.push('/login'));
	};
	render() {
		return (
			<React.Fragment>
				<form className="registerForm">
					<div className="form-group">
						<label htmlFor="name">Full Name</label>
						<input
							type="text"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="name"
							placeholder="full name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="username"
							placeholder="username"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email Address</label>
						<input
							type="email"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="email"
							placeholder="email address"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="password"
							placeholder="password"
						/>
					</div>
					<button type="submit" onClick={this.handleRegister} className="btn btn-primary">
						Register
					</button>
				</form>
			</React.Fragment>
		);
	}
}
