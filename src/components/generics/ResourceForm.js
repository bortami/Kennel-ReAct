import React, { Component } from 'react';
import '../animals/Animal.css';

export default class OwnerForm extends Component {
	state = {
		name: '',
		detail: ''
	};
	handleFieldChange = (e) => {
		const stateToChange = {};
		stateToChange[e.target.id] = e.target.value;
		this.setState(stateToChange);
	};
	constructResource = (e) => {
		e.preventDefault();
		const item = {
			name: this.state.name,
			detail: this.state.detail
		};
		this.props.addResource(item).then(() => this.props.history.push(`/${this.props.route}`));
	};

	render() {
		return (
			<React.Fragment>
				<form className="form">
                <h4>ADD {this.props.route.toUpperCase().split("S")[0]}</h4>
					<div className="form-group">
						<label htmlFor="name">Name </label>
						<input
							type="text"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="name"
							placeholder="name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="detail">{(this.props.route === "owners")? "Phone Number" : (this.props.route === "locations")? "Address" : "Details"}</label>
						<input
							type="text"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="detail"
							placeholder="detail"
						/>
					</div>
					<button type="submit" onClick={this.constructResource} className="btn btn-primary">Submit</button>
				</form>
			</React.Fragment>
		);
	}
}
