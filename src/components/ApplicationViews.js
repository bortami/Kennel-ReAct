import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import api from '../modules/APIManager';
import AnimalForm from './animals/AnimalForm';
import EmployeeForm from './employee/EmployeeForm';
import Login from './authentication/Login';
import Register from './authentication/register';
import AnimalEditForm from './animals/AnimalEditForm';
import EmployeeEditForm from './employee/EmployeeEditForm';
import OwnerEditForm from './owners/OwnerEditForm';
import ResourceList from './generics/ResourceList';
import ResourceDetail from './generics/ResourceDetail';
import ResourceForm from './generics/ResourceForm';

class ApplicationViews extends Component {
	state = {
		employees: [],
		locations: [],
		animals: [],
		owners: [],
		animalOwners: []
	};
	isAuthenticated = () => sessionStorage.getItem('userId') !== null || localStorage.getItem('userId') !== null;

	getSingleUserbyUsername = (variable) => api.singleByAttribute('employees', 'username', variable);

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
	deleteEmployee = (id) => {
		api.deleteAndList('employees', id).then((employees) => this.setState({ employees: employees }));
	};

	deleteLocation = (id) => {
		api.deleteAndList('locations', id).then((locations) => this.setState({ locations: locations }));
	};

	addAnimal = (animal) =>
		api
			.post(animal, 'animals')
			.then(() => api.all('animals'))
			.then((animals) => this.setState({ animals: animals }));

	addOwner = (owner) =>
		api.post(owner, 'owners').then(() => api.all('owners')).then((owners) => this.setState({ owners: owners }));
	addLocation = (location) =>
		api
			.post(location, 'locations')
			.then(() => api.all('locations'))
			.then((locations) => this.setState({ locations: locations }));
	addEmployee = (employee) =>
		api
			.post(employee, 'employees')
			.then(() => api.all('employees'))
			.then((employees) => this.setState({ employees: employees }));
	refreshEmployees = () =>
		api.all('employees').then((parsedEmps) => {
			this.setState({ employees: parsedEmps });
		});

	updateAnimal = (editedAnimalObject) => {
		return api.put('animals', editedAnimalObject).then(() => api.all('animals')).then((animals) => {
			this.setState({
				animals: animals
			});
		});
	};
	updateOwner = (editedOwnerObject) => {
		return api.put('owners', editedOwnerObject).then(() => api.all('owners')).then((owners) => {
			this.setState({
				owners: owners
			});
		});
	};
	updateEmployee = (editedEmployeeObject) => {
		return api.put('employees', editedEmployeeObject).then(() => api.all('employees')).then((employees) => {
			this.setState({
				employees: employees
			});
		});
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
						if (this.isAuthenticated()) {
							return (
								<ResourceList
									{...props}
									listResources={this.state.locations}
									deletePrimary={this.deleteLocation}
									deleteSecondary={this.deleteEmployee}
									secondaryResource={this.state.employees}
									route="locations"
									secondRoute="employees"
								/>
							);
						} else {
							return <Redirect to="/login" />;
						}
					}}
				/>
				<Route
					path="/locations/new"
					render={(props) => {
						return <ResourceForm {...props} route="locations" addResource={this.addLocation} />;
					}}
				/>
				<Route
					path="/locations/:locationId(\d+)"
					render={(props) => {
						return <ResourceDetail {...props} deletePrimary={this.deleteLocation} route="locations" />;
					}}
				/>
				<Route
					exact
					path="/animals"
					render={(props) => {
						if (this.isAuthenticated()) {
							return (
								<ResourceList
									{...props}
									listResources={this.state.animals}
									deletePrimary={this.deleteAnimal}
									route="animals"
								/>
							);
						} else {
							return <Redirect to="/login" />;
						}
					}}
				/>
				<Route
					path="/animals/new"
					render={(props) => {
						return <AnimalForm {...props} addAnimal={this.addAnimal} employees={this.state.employees} />;
					}}
				/>
				<Route
					exact
					path="/animals/:animalId(\d+)"
					render={(props) => {
						return <ResourceDetail {...props} deleteResource={this.deleteAnimal} route="animals" />;
					}}
				/>
				<Route
					path="/animals/:animalId(\d+)/edit"
					render={(props) => {
						return (
							<AnimalEditForm
								{...props}
								employees={this.state.employees}
								updateAnimal={this.updateAnimal}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/employees"
					render={(props) => {
						if (this.isAuthenticated()) {
							return (
								<ResourceList
									{...props}
									listResources={this.state.employees}
									deletePrimary={this.deleteEmployee}
									deleteSecondary={this.deleteAnimal}
									secondaryResource={this.state.animals}
									route="employees"
									secondRoute="animals"
								/>
							);
						} else {
							return <Redirect to="/login" />;
						}
					}}
				/>
				<Route
					path="/employees/:employeeId(\d+)"
					render={(props) => {
						return <ResourceDetail {...props} deleteResource={this.fireEmployee} route="employees" />;
					}}
				/>
				<Route
					path="/employees/new"
					render={(props) => {
						return <EmployeeForm {...props} addEmployee={this.addEmployee} />;
					}}
				/>
				<Route
					path="/employees/:employeeId(\d+)/edit"
					render={(props) => {
						return (
							<EmployeeEditForm
								{...props}
								employees={this.state.employees}
								updateEmployee={this.updateEmployee}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/owners"
					render={(props) => {
						if (this.isAuthenticated()) {
							return (
								<ResourceList
									{...props}
									listResources={this.state.owners}
									deletePrimary={this.deleteOwner}
									route="owners"
								/>
							);
						} else {
							return <Redirect to="/login" />;
						}
					}}
				/>
				<Route
					path="/owners/:ownerId(\d+)"
					render={(props) => {
						return <ResourceDetail {...props} deleteResource={this.deleteOwner} route="owners" />;
					}}
				/>
				<Route
					path="/owners/new"
					render={(props) => {
						return <ResourceForm {...props} route="owners" addResource={this.addOwner} />;
					}}
				/>
				<Route
					path="/owners/:ownerId(\d+)/edit"
					render={(props) => {
						return <OwnerEditForm {...props} owners={this.state.owners} updateOwner={this.updateOwner} />;
					}}
				/>
				<Route
					path="/login"
					render={(props) => {
						return <Login {...props} getUser={this.getSingleUserbyUsername} />;
					}}
				/>
				<Route
					path="/register"
					render={(props) => {
						return (
							<Register
								{...props}
								addUser={this.addEmployee}
								getUser={this.getSingleUserbyUsername}
								refreshEmployees={this.refreshEmployees}
							/>
						);
					}}
				/>
			</div>
		);
	}
}

export default ApplicationViews;
