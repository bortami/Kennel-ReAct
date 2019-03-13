import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	handleFieldChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	handleLogin = (e) => {
		e.preventDefault();
		const userNameVal = this.state.username;
		const passwordVal = this.state.password;
		this.props.getUser(userNameVal).then((user) => {
			console.log(user[0], passwordVal);
			if (passwordVal === user[0].password) {
				if(document.getElementById("rememberme").checked){
					localStorage.setItem('userId', user[0].id);
				this.props.history.push('/');
				} else{
					sessionStorage.setItem("userId", user[0].id);
					this.props.history.push("/")
				}
				
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
					<input type="checkbox" id="rememberme" value="Remember Me" name="rememeberMe"/ >Remember Me
					<button type="submit" className="btn btn-success">
						Sign In
					</button>
				</form>
				<Link to="/register" className="btn btn-success">
					Register
				</Link>
			</div>
		);
	}
}
