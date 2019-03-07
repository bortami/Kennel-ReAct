const remoteURL = 'http://localhost:5002';
const AnimalManager = {
	allAnimals: () => {
		return fetch(`${remoteURL}/animals`).then((Animals) => Animals.json());
	},
	singleAnimal: (id) => {
		return fetch(`${remoteURL}/animals/${id}`).then((e) => e.json());
	},
	deleteAndListAnimal: (id) => {
		return fetch(`${remoteURL}/animals/${id}`, {
			method: 'DELETE'
		})
			.then((e) => e.json())
			.then(() => {
				return fetch(`${remoteURL}/animals`).then((e) => e.json());
			});
	}
};

export default AnimalManager;
