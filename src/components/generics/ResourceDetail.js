import React, { Component } from 'react';
import '../animals/Animal.css';

export default class ResourceDetail extends Component {

	render() {
		// const item = this.props.resource.find((a) => a.id === parseInt(this.props.match.params.resourceId)) || {};
		return (
			<section className="detail">
				<div key={this.props.location.state.id} className="card">
					<div className="card-body">
						<h5>
							<img src={this.props.location.state.image} className="icon" alt="arg" />
							{this.props.location.state.name}
						</h5>
						<br />
						<em>{this.props.location.state.detail}</em>
						<br />
						<button
							type="button"
							className="btn btn-success"
							onClick={() => {
								this.props.history.push(`/${this.props.route}/${this.props.location.state.id}/edit`);
							}}
						>
							Edit
						</button>
						<br />
						<a
							href="#"
							onClick={() =>
								this.props
									.deleteResource(this.props.location.state.id)
									.then(() => this.props.history.push(`/${this.props.route}`))}
							className="card-link"
						>
							Delete
						</a>
					</div>
				</div>
			</section>
		);
	}
}
