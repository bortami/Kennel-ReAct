import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Login extends Component {
	state = {
		username: '',
		password: '',
		rememeberMe: false,
		errorMessage: ''
	};

	handleFieldChange = (evt) => {
		const stateToChange = {};
		if (evt.target.type === 'checkbox') {
			stateToChange[evt.target.id] = evt.target.checked;
		} else {
			stateToChange[evt.target.id] = evt.target.value;
		}

		this.setState(stateToChange);
	};

	handleLogin = (e) => {
		e.preventDefault();

		this.props.getUser(this.state.username).then((user) => {
			let errorMessage = '';
			if (user.length === 0) {
				errorMessage = "We couldn't find your account";
				this.setState({ errorMessage: errorMessage });
			} else {
				if (this.state.password === user[0].password) {
					this.state.rememeberMe
						? localStorage.setItem('userId', user[0].id)
						: sessionStorage.setItem('userId', user[0].id);
					this.props.history.push('/');
				} else {
					window.alert('Ur wRoNg!');
				}
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
					<input
						type="checkbox"
						id="rememberMe"
						value="Remember Me"
						name="rememeberMe"
						onChange={this.handleFieldChange}
					/>Remember Me
					<button type="submit" className="btn btn-success">
						Sign In
					</button>
				</form>
				<h5>{this.state.error}</h5>
				<Link to="/register" className="btn btn-success">
					Register
				</Link>
			</div>
		);
	}
}
