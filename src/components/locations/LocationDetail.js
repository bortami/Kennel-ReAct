import React, { Component } from 'react';
import "../animals/Animal.css"

export default class LocationDetail extends Component {
	render() {
		const location = this.props.locations.find((a) => a.id === parseInt(this.props.match.params.locationId)) || {};
		return (
			<section className="location">
				<div key={location.id} className="card">
					<h4 className="card-title">
						<h6 className="card-title">{location.name}</h6>
						<p>{location.address}</p>
						<a
							href="#"
							onClick={() =>
								this.props
									.deletelocation(location.id)
									.then(() => this.props.history.push('/locations'))}
							className="card-link"
						>
							Delete
						</a>
					</h4>
				</div>
			</section>
		);
	}
}
