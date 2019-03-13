import React, { Component } from 'react';
import '../animals/Animal.css';
import { Link } from 'react-router-dom';

export default class OwnerList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="ownerButton">
					<button
						type="button"
						className="btn btn-success"
						onClick={() => {
							this.props.history.push('/owners/new');
						}}
					>
						Add Owner
					</button>
				</div>
				<section className="owners">
					{this.props.owners.map((owner) => (
						<div key={owner.id} className="card">
							<div className="card-body">
								<h5 className="card-title">{owner.name}</h5>
								<p>{owner.phoneNumber}</p>
								<Link className="nav-link" to={`/owners/${owner.id}`}>
									Details
								</Link>
								<button className="card-link" onClick={() => this.props.deleteOwner(owner.id)}>
									Delete
								</button>
							</div>
						</div>
					))}
				</section>
			</React.Fragment>
		);
	}
}
