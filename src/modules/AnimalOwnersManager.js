const remoteURL = 'http://localhost:5002';
const AnimalOwnerManager = {
	allAnimalOwners: () => {
		return fetch(`${remoteURL}/animalOwners`).then((AnimalOwners) => AnimalOwners.json());
	},
	singleAnimalOwner: (id) => {
		return fetch(`${remoteURL}/animalOwners/${id}`).then((e) => e.json());
	}
};

export default AnimalOwnerManager;
