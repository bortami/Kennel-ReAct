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
		owners: []
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
			.then((r) => r.json())
			.then((parsedOwners) => {
				newState.owners = parsedOwners;
				return fetch('http://localhost:5002/animals');
			})
			.then((r) => r.json())
			.then((parsedAnimals) => {
				newState.animals = parsedAnimals;
			})
			.then(() => this.setState(newState));
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
						return <AnimalList animals={this.state.animals} owners={this.state.owners} />;
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
