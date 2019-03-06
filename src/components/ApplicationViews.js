import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import AnimalList from './animals/AnimalList';
import LocationList from './locations/LocationsList';
import EmployeeList from './employee/EmployeeList';
import OwnersList from "./owners/OwnersList"

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
		{ id: 1, name: 'Doodles', ownerId: 1 },
		{ id: 2, name: 'Jack', ownerId: 2 },
		{ id: 3, name: 'Angus', ownerId: 3 },
		{ id: 4, name: 'Henley', ownerId: 4 },
		{ id: 5, name: 'Derkins', ownerId: 5 },
		{ id: 6, name: 'Checkers', ownerId: 6 }
	];
	ownersFromAPI = [
		{ id: 1, name: 'Ryan Tanay', phoneNumber: '304-555-2525' },
		{ id: 2, name: 'Emma Beaton', phoneNumber: '304-555-2525' },
		{ id: 3, name: 'Dani Adkins', phoneNumber: '304-555-2525' },
		{ id: 4, name: 'Adam Oswalt', phoneNumber: '304-555-2525' },
		{ id: 5, name: 'Fletcher Bangs', phoneNumber: '304-555-2525' },
		{ id: 6, name: 'Angela Lee', phoneNumber: '304-555-2525' }
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
