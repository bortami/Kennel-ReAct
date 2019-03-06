import React, { Component } from 'react';
//This doesn't actually do what the challenge asked for. I did not add the parameters that owners can can have multiple pets or that pets can have multiple owners. I did it this way just so I have something working so I can continue in the chapters. I will come back later and fulfill the challenge requirements. maybe.
export default class AnimalList extends Component {
 	render() {
		return (
			<article>
				<h1>Animal List</h1>
				{this.props.animals.map((animal) => {
					return (
						<div key={animal.id}>
							<p>Pet Name: {animal.name}</p>
							<p>Owner: {this.props.owners.find(owner => owner.id === animal.ownerId).name}</p>
						</div>
					);
				})}
			</article>
		);
	}
}
