import React, { Component } from 'react';
import '../animals/Animal.css';

export default class OwnerList extends Component {
	render() {
		return (
			<article clasName="owners">
				{this.props.owners.map((singleowner) => (
					<div key={singleowner.id} className="card">
						<div className="card-body">
							<h5 className="card-title">
								{singleowner.name}</h5>
								<p>{singleowner.phoneNumber}</p>
								<button className="card-link" onClick={() => this.props.deleteOwner(singleowner.id)}>
									Delete
								</button>
							
						</div>
					</div>
				))}
			</article>
		);
	}
}
