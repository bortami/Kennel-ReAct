import React, { Component } from 'react';
import '../animals/Animal.css';

export default class EmployeeForm extends Component {
	state = {
		name: '',
		email: '',
		username: '',
		password: ''

	};
	handleFieldChange = (e) => {
		const stateToChange = {};
		stateToChange[e.target.id] = e.target.value;
		this.setState(stateToChange);
	};
	constructNewEmployee = (e) => {
		e.preventDefault();
		const employee = {
			name: this.state.name,
			email: this.state.email,
			username: this.state.username,
			password: this.state.password
		};
		this.props.addEmployee(employee).then(() => this.props.history.push('/employees'));
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
						Add Employee
					</button>
				</form>
			</React.Fragment>
		);
	}
}
