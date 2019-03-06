import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import AnimalList from './animals/AnimalList';
import LocationList from './locations/LocationsList';
import EmployeeList from './employee/EmployeeList';
import OwnersList from './owners/OwnersList';

class ApplicationViews extends Component {
	state = {
		employees: [],
		locations: [],
		animals: [],
		owners: [],
		animalOwners: []
	};

	componentDidMount() {
		const newState = {};
		fetch('http://localhost:5002/employees')
			.then((employees) => employees.json())
			.then((parsedEmployees) => {
				newState.employees = parsedEmployees;
				return fetch('http://localhost:5002/locations');
			})
			.then((locations) => locations.json())
			.then((parsedLocations) => {
				newState.locations = parsedLocations;
				return fetch('http://localhost:5002/owners');
			})
			.then((owners) => owners.json())
			.then((parsedOwners) => {
				newState.owners = parsedOwners;
				return fetch('http://localhost:5002/animals');
			})
			.then((animals) => animals.json())
			.then((parsedAnimals) => {
				newState.animals = parsedAnimals;
				return fetch('http://localhost:5002/animalsOwners');
			})
			.then((animalOwners) => animalOwners.json())
			.then((parsedAnimalOwners) => {
				newState.animalOwners = parsedAnimalOwners;
				this.setState(newState);
			});
	}

	render() {
		return (
			<div className="container-div">
				<Route
					exact
					path="/"
					render={(props) => {
						return <LocationList locations={this.state.locations} />;
					}}
				/>
				<Route
					path="/animals"
					render={(props) => {
						return (
							<AnimalList
								animals={this.state.animals}
								owners={this.state.owners}
								animalOwners={this.state.animalOwners}
							/>
						);
					}}
				/>
				<Route
					path="/employees"
					render={(props) => {
						return <EmployeeList employees={this.state.employees} />;
					}}
				/>
				<Route
					path="/owners"
					render={(props) => {
						return <OwnersList owners={this.state.owners} />;
					}}
				/>
			</div>
		);
	}
}

export default ApplicationViews;
