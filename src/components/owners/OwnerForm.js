import React, { Component } from 'react';
import '../animals/Animal.css';

export default class OwnerForm extends Component {
	state = {
		name: '',
		phoneNumber: ''
	};
	handleFieldChange = (e) => {
		const stateToChange = {};
		stateToChange[e.target.id] = e.target.value;
		this.setState(stateToChange);
	};
	constructNewOwner = (e) => {
		e.preventDefault();
		const owner = {
			name: this.state.name,
			phoneNumber: this.state.phoneNumber
		};
		this.props.addOwner(owner).then(() => this.props.history.push('/owners'));
	};

	render() {
		return (
			<React.Fragment>
				<form className="ownerForm">
					<div className="form-group">
						<label htmlFor="name">Owner Name</label>
						<input
							type="text"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="name"
							placeholder="Owner name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phoneNumber">Phone Number</label>
						<input
							type="phone"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="phoneNumber"
							placeholder="Phone Number"
						/>
					</div>
					<button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
				</form>
			</React.Fragment>
		);
	}
}
