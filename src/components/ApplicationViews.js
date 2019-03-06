import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import AnimalList from './animals/AnimalList';
import LocationList from './locations/LocationsList';
import EmployeeList from './employee/EmployeeList';

class ApplicationViews extends Component {
	employeesFromAPI = [
		{ id: 1, name: 'Jessica Younker' },
		{ id: 2, name: 'Jordan Nelson' },
		{ id: 3, name: 'Zoe LeBlanc' },
		{ id: 4, name: 'Blaise Roberts' }
	];

	locationsFromAPI = [
		{ id: 1, name: 'Nashville North', address: '500 Circle Way' },
		{ id: 2, name: 'Nashville South', address: '10101 Binary Court' }
	];

	animalsFromAPI = [
		{ id: 1, name: 'Doodles', ownerId: 1},
		{ id: 2, name: 'Jack', ownerId: 2 },
		{ id: 3, name: 'Angus', ownerId: 3 },
		{ id: 4, name: 'Henley', ownerId: 4 },
		{ id: 5, name: 'Derkins', ownerId: 5 },
		{ id: 6, name: 'Checkers', ownerId: 6 }
	];
	ownersFromAPI = [
		{ id: 1, name: 'Ryan Tanay' },
		{ id: 2, name: 'Emma Beaton' },
		{ id: 3, name: 'Dani Adkins' },
		{ id: 4, name: 'Adam Oswalt' },
		{ id: 5, name: 'Fletcher Bangs' },
		{ id: 6, name: 'Angela Lee' }
	];
    
	state = {
		employees: this.employeesFromAPI,
		locations: this.locationsFromAPI,
		animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
	};

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
						return <AnimalList animals={this.state.animals} owners={this.state.owners}/>;
					}}
				/>
				<Route
					path="/employees"
					render={(props) => {
						return <EmployeeList employees={this.state.employees} />;
					}}
				/>
			</div>
		);
	}
}

export default ApplicationViews;
