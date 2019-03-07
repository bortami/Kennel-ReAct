const remoteURL = 'http://localhost:5002';
const AnimalManager = {
	allAnimals: () => {
		return fetch(`${remoteURL}/animals`).then((Animals) => Animals.json());
	},
	singleAnimal: (id) => {
		return fetch(`${remoteURL}/animals/${id}`).then((e) => e.json());
	},
	deleteSingleAnimal: (id) => {
		return fetch(`http://localhost:5002/animals/${id}`, {
			method: 'DELETE'
		}).then((e) => e.json());
	}
};

export default AnimalManager