import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import AnimalList from './animals/AnimalList';
import LocationList from './locations/LocationsList';
import EmployeeList from './employee/EmployeeList';
import OwnersList from './owners/OwnersList';
import SearchResults from './SearchResults/searchResults';
import api from '../modules/APIManager';
import AnimalDetail from './animals/AnimalDetail';
import LocationDetail from './locations/LocationDetail';
import OwnerDetail from './owners/OwnerDetail';
import EmployeeDetail from "./employee/EmployeeDetail"

class ApplicationViews extends Component {
	state = {
		employees: [],
		locations: [],
		animals: [],
		owners: [],
		animalOwners: []
	};
	deleteAnimal = (id) => {
		api.deleteAndList('animals', id).then((animals) =>
			this.setState({
				animals: animals
			})
		);
	};
	deleteOwner = (id) => {
		api.deleteAndList('owners', id).then((owners) =>
			this.setState({
				owners: owners
			})
		);
	};
	fireEmployee = (id) => {
		api.deleteAndList('employees', id).then((employees) => this.setState({ employees: employees }));
	};

	deleteLocation = (id) => {
		api.deleteAndList('locations', id).then((locations) => this.setState({ locations: locations }));
	};
	componentDidMount() {
		const newState = {};
		api.all('employees').then((parsedEmployees) => {
			newState.employees = parsedEmployees;
			api.all('locations').then((parsedLocations) => {
				newState.locations = parsedLocations;
				api.all('owners').then((parsedOwners) => {
					newState.owners = parsedOwners;
					api.all('animals').then((parsedAnimals) => {
						newState.animals = parsedAnimals;
						api.all('animalOwners').then((parsedAnimalOwners) => {
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
					path="/locaions/:locationId(\d+)"
					render={(props) => {
						return <LocationDetail {...props} deleteLocation={this.deleteLocation} />;
					}}
				/>
				<Route
					exact
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
					path="/animals/:animalId(\d+)"
					render={(props) => {
						return (
							<AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
						);
					}}
				/>
				<Route
					exact path="/employees"
					render={(props) => {
						return <EmployeeList employees={this.state.employees} fireEmployee={this.fireEmployee} />;
					}}
				/>
				<Route
					path="/employees/:employeeId(\d+)"
					render={(props) => {
						return (
							<EmployeeDetail {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} />
						);
					}}
				/>
				<Route
					exact path="/owners"
					render={(props) => {
						return <OwnersList owners={this.state.owners} deleteOwner={this.deleteOwner} />;
					}}
				/>
				<Route
					path="/owners/:ownerId(\d+)"
					render={(props) => {
						return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />;
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
