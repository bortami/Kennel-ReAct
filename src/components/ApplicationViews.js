import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import AnimalList from './animals/AnimalList';
import LocationList from './locations/LocationsList';
import EmployeeList from './employee/EmployeeList';
import OwnersList from './owners/OwnersList';
import SearchResults from './SearchResults/searchResults';
import apiManager from '../modules/apiManager';

class ApplicationViews extends Component {
	state = {
		employees: [],
		locations: [],
		animals: [],
		owners: [],
		animalOwners: []
	};
	deleteAnimal = (id) => {
		return fetch(`http://localhost:5002/animals/${id}`, {
			method: 'DELETE'
		})
			.then((e) => e.json())
			.then(() => fetch(`http://localhost:5002/animals`))
			.then((e) => e.json())
			.then((animals) =>
				this.setState({
					animals: animals
				})
			);
	};
	deleteOwner = (id) => {
		return fetch(`http://localhost:5002/owners/${id}`, {
			method: 'DELETE'
		})
			.then((e) => e.json())
			.then(() => fetch(`http://localhost:5002/owners`))
			.then((e) => e.json())
			.then((owners) =>
				this.setState({
					owners: owners
				})
			);
	};
	fireEmployee = (id) => {
		return fetch(`http//localhost:5002/employees/${id}`, {
			method: 'DELETE'
		})
			.then((e) => e.json())
			.then(() => {
				fetch(`http://localhost:5002/employees`)
					.then((e) => e.json())
					.then((employees) => this.setState({ employees: employees }));
			});
	};
	deleteLocation = (id) => {
		return fetch(`http//localhost:5002/locations/${id}`, {
			method: 'DELETE'
		})
			.then((e) => e.json())
			.then(() => {
				fetch(`http://localhost:5002/locations`)
					.then((e) => e.json())
					.then((locations) => this.setState({ locations: locations }));
			});
	};
	componentDidMount() {
		const newState = {};
		apiManager.allEmployees().then((parsedEmployees) => {
			newState.employees = parsedEmployees;
			apiManager.allLocations().then((parsedLocations) => {
				newState.locations = parsedLocations;
				apiManager.allOwners().then((parsedOwners) => {
					newState.owners = parsedOwners;
					apiManager.allAnimals().then((parsedAnimals) => {
						newState.animals = parsedAnimals;
						apiManager.allAnimalOwners().then((parsedAnimalOwners) => {
							newState.animalOwners = parsedAnimalOwners;
							this.setState(newState);
						});
					});
				});
			});
		});
	}

	render() {
		return (
			<div className="container-div">
				<Route
					exact
					path="/"
					render={(props) => {
						return <LocationList locations={this.state.locations} deleteLocation={this.deleteLocation} />;
					}}
				/>
				<Route
					path="/animals"
					render={(props) => {
						return (
							<AnimalList
								deleteAnimal={this.deleteAnimal}
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
						return <EmployeeList employees={this.state.employees} fireEmployee={this.state.fireEmployee} />;
					}}
				/>
				<Route
					path="/owners"
					render={(props) => {
						return <OwnersList owners={this.state.owners} deleteOwner={this.deleteOwner} />;
					}}
				/>
				<Route
					path="/search"
					render={(props) => {
						return <SearchResults />;
					}}
				/>
			</div>
		);
	}
}

export default ApplicationViews;
