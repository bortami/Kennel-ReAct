import React, { Component } from 'react';

export default class Register extends Component {
	state = {
		email: '',
		password: '',
		passwordConfirm: '',
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
		if (this.state.password !== this.state.passwordConfirm) {
			const errorMessage = "your passwords don't match";
			this.setState({ errorMessage: errorMessage });
			return null;
		}
		const newUser = {
			email: this.state.email,
			password: this.state.password,
			username: this.state.username,
			name: this.state.name
		};
		this.props.getUser(this.state.username).then((user) => {
			if (user.length > 0) {
				const errorMessage = 'That username already exists';
				this.setState({ errorMessage: errorMessage });
			} else {
				this.props.addUser(newUser).then((user) => {
					sessionStorage.setItem('userId', user.id);
					this.props.history.push('/');
					this.props.refreshEmployees();
				});
			}
		});
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
					<div className="form-group">
						<label htmlFor="passwordConfirm">Confirm Password</label>
						<input
							type="password"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="passwordConfirm"
							placeholder="password confirm"
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
