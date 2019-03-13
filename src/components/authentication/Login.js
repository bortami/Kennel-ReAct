import React, { Component } from 'react';

export default class Login extends Component {
	// Set initial state
	state = {
		username: '',
		password: ''
	};

	// Update state whenever an input field is edited
	handleFieldChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	// Simplistic handler for login submit
	handleLogin = (e) => {
		e.preventDefault();
		const userNameVal = this.state.username;
		const passwordVal = this.state.password;
		this.props.getUser(userNameVal).then((user) => {
			console.log(user[0], passwordVal);
			if (passwordVal === user[0].password) {
				sessionStorage.setItem('userId', user[0].id);
				this.props.history.push('/animals');
			} else {
				window.alert('Ur wRoNg!');
			}
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleLogin}>
					<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
					<label htmlFor="inputusername">Username</label>
					<input
						onChange={this.handleFieldChange}
						type="text"
						id="username"
						placeholder="username"
						required=""
						autoFocus=""
					/>
					<label htmlFor="inputPassword">Password</label>
					<input
						onChange={this.handleFieldChange}
						type="password"
						id="password"
						placeholder="Password"
						required=""
					/>
					<button type="submit" className="btn btn-success">
						Sign In
					</button>
				</form>
			</div>
		);
	}
}
