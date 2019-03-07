import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import AnimalList from './animals/AnimalList';
import LocationList from './locations/LocationsList';
import EmployeeList from './employee/EmployeeList';
import OwnersList from './owners/OwnersList';
import SearchResults from './SearchResults/searchResults';
import EmployeeManager from '../modules/EmployeesManager';
import LocationManager from '../modules/LocationsManager';
import AnimalManager from '../modules/AnimalsManager';
import OwnerManager from '../modules/OwnersManager';
import AnimalOwnerManager from '../modules/AnimalOwnersManager';

class ApplicationViews extends Component {
	state = {
		employees: [],
		locations: [],
		animals: [],
		owners: [],
		animalOwners: []
	};
	deleteAnimal = (id) => {
		AnimalManager.deleteAndListAnimal(id).then((animals) =>
			this.setState({
				animals: animals
			})
		);
	};
	deleteOwner = (id) => {
		OwnerManager.deleteAndListOwner(id).then((owners) =>
			this.setState({
				owners: owners
			})
		);
	};
	fireEmployee = (id) => {
		EmployeeManager.deleteEmployee(id).then(() => {
			EmployeeManager.allEmployees().then((employees) => this.setState({ employees: employees }));
		});
	};
	deleteLocation = (id) => {
		LocationManager.deleteLocation(id).then(() => {
			LocationManager.allLocations().then((locations) => this.setState({ locations: locations }));
		});
	};
	componentDidMount() {
		const newState = {};
		EmployeeManager.allEmployees().then((parsedEmployees) => {
			newState.employees = parsedEmployees;
			LocationManager.allLocations().then((parsedLocations) => {
				newState.locations = parsedLocations;
				OwnerManager.allOwners().then((parsedOwners) => {
					newState.owners = parsedOwners;
					AnimalManager.allAnimals().then((parsedAnimals) => {
						newState.animals = parsedAnimals;
						AnimalOwnerManager.allAnimalOwners().then((parsedAnimalOwners) => {
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
