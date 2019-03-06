const apiManager = {
	allEmployees: () => {
		return fetch('http://localhost:5002/employees').then((employees) => employees.json());
	},
	allLocations: () => {
		return fetch('http://localhost:5002/locations').then((locations) => locations.json());
	},
	allOwners: () => {
		return fetch('http://localhost:5002/owners').then((owners) => owners.json());
	},
	allAnimals: () => {
		return fetch('http://localhost:5002/animals').then((animals) => animals.json());
	},
	allAnimalOwners: () => {
		return fetch('http://localhost:5002/animalsOwners').then((animalOwners) => animalOwners.json());
	}
};

export default apiManager;
