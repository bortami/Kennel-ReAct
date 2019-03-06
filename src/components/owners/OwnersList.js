import React, { Component } from 'react';

export default class OwnersList extends Component {
	render() {
		return (
			<article>
				<h1>Owners List</h1>
				{this.props.owners.map((singleOwner) => {
					return (
						<p key={singleOwner.id}>
							Owner: {singleOwner.name} Phone Number: {singleOwner.phoneNumber}
						</p>
					);
				})}
			</article>
		);
	}
}
