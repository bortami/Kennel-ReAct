import React, { Component } from 'react';
import api from '../../modules/APIManager';

export default class OwnerEditForm extends Component {
	// Set initial state
	state = {
		name: '',
		phoneNumber: ''
	};

	handleFieldChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	updateExistingOwner = (evt) => {
		evt.preventDefault();

		const editedOwner = {
			id: this.props.match.params.ownerId,
			name: this.state.name,
			breed: this.state.phoneNumber
		};

		this.props.updateOwner(editedOwner).then(() => this.props.history.push('/owners'));
	};

	componentDidMount() {
		api.all('owners', this.props.match.params.ownerId).then((owner) => {
			this.setState({
				name: owner.name,
				phoneNumber: owner.phoneNumber
			});
		});
	}

	render() {
		return (
			<React.Fragment>
				<form className="OwnerForm">
					<div className="form-group">
						<label htmlFor="name">Owner name</label>
						<input
							type="text"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="name"
							value={this.state.name}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phoneNumber">Phone Number</label>
						<input
							type="text"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="phoneNumber"
							value={this.state.phoneNumber}
						/>
					</div>
					<button type="submit" onClick={this.updateExistingOwner} className="btn btn-primary">
						Submit
					</button>
				</form>
			</React.Fragment>
		);
	}
}
