import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
	buttonPicker = () => {
		return sessionStorage.getItem('userId') !== null && localStorage.getItem('userId') !== null ? (
			<Link className="nav-link" onClick={this.logout()} to="/">
				Logout
			</Link>
		) : (
			<Link className="nav-link" to="/login">
				Login
			</Link>
		);
	};

	logout = () => {
		sessionStorage.removeItem('userId');
		localStorage.removeItem('userId');
	};
	render() {
		return (
			<nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
				<ul className="nav nav-pills">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Locations
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/animals">
							Animals
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/employees">
							Employees
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/owners">
							Owners
						</Link>
					</li>
					<li className="nav-item">{this.buttonPicker()}</li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;
