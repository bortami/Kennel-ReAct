import React, { Component } from 'react';
import '../animals/Animal.css';

export default class ResourceDetail extends Component {
	hasImage = (param) => {
		if (param.image) {
			return <img src={this.props.resource.image} className="icon" alt="arg" />;
		}
	};
	hasName = (param) => {
		if (param.name) {
			return param.name;
		}
	};
	hasDetails = (param) => {
		return <em>{param.detail}</em>;
	};
	render() {
		const item = this.props.resource.find((a) => a.id === parseInt(this.props.match.params.resourceId)) || {};
		return (
			<section className="detail">
				{console.log(item)}
				<div key={item.id} className="card">
					<div className="card-body">
						<h5>
							{this.hasImage(this.props.resource)}
							{this.hasName(this.props.resource)}
						</h5>
						<br />
						{this.hasDetails(this.props.resource)}
						<br />
						<button
							type="button"
							className="btn btn-success"
							onClick={() => {
								this.props.history.push(`/${this.props.route}/${item.id}/edit`);
							}}
						>
							Edit
						</button>
						<br />
						<a
							href="#"
							onClick={() =>
								this.props
									.deleteResource(item.id)
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
