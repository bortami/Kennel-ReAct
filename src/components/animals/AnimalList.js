import React, { Component } from 'react';
import dog from './DogIcon.png';
import './Animal.css';

export default class AnimalList extends Component {
	render() {
		const animalsWithOwners = this.props.animals.map((singleAnimal) => {
			const matchingAnimalOwnerEntries = this.props.animalOwners.filter((singleAnimalOwnerEntry) => {
				return singleAnimalOwnerEntry.animalId === singleAnimal.id;
			});

			const matchingOwnerObjects = matchingAnimalOwnerEntries.map((joinTableEntry) => {
				const matchingOwner = this.props.owners.find((singleOwner) => {
					return singleOwner.id === joinTableEntry.ownerId;
				});
				return matchingOwner;
			});

			return {
				id: singleAnimal.id,
				name: singleAnimal.name,
				owners: matchingOwnerObjects,
				species: singleAnimal.type.kind
			};
		});
		return (
			<section className="animals">
				{animalsWithOwners.map((animal) => (
					<div key={animal.id} className="card">
						<div className="card-body">
							<h5 className="card-title">
								<img src={dog} className="icon--dog" alt="cute dog icon" />
								{animal.name}
							</h5>{' '}
							<p className="text-center">{animal.species}</p>
							<ul>
								Owners:{' '}
								{animal.owners.map((singleOwner) => <li key={singleOwner.id}>{singleOwner.name}</li>)}
							</ul>
							<button onClick={() => this.props.deleteAnimal(animal.id)} className="card-link">
								Delete
							</button>
						</div>
					</div>
				))}
			</section>
		);
	}
}
