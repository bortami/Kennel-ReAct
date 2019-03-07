import React, { Component } from 'react';
import '../animals/Animal.css';

export default class LocationList extends Component {
	render() {
		return (
			<section clasName="locations">
				{this.props.locations.map((singlelocation) => (
					<div key={singlelocation.id} className="card">
						<div className="card-body">
							<h5 className="card-title">
								{singlelocation.name}
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
