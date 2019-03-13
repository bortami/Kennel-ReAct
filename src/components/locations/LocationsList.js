import React, { Component } from 'react';
import '../animals/Animal.css';
import { Link } from 'react-router-dom';

export default class LocationList extends Component {
	render() {
		return (
			<section className="locations">
				{this.props.locations.map((singlelocation) => (
					<div key={singlelocation.id} className="card">
						<div className="card-body">
							<h5 className="card-title">
								{singlelocation.name}
								<Link className="nav-link" to={`/${singlelocation.id}`}>
									Details
								</Link>
								<button
									className="card-link"
									onClick={() => this.props.deleteLocation(singlelocation.id)}
								>
									Delete
								</button>
							</h5>
						</div>
					</div>
				))}
			</section>
		);
	}
}
