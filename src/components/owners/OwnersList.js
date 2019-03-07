import React, { Component } from 'react';
import '../animals/Animal.css';

export default class OwnerList extends Component {
	isGold=(person)=>{
		if(person.goldMember){
			return "gold"
		}else{}
	}
	render() {
		return (
			<article clasName="owners">
				{this.props.owners.map((singleowner) => (
					<div key={singleowner.id} className="card">
						<div className="card-body" id={this.isGold(singleowner)}>
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
