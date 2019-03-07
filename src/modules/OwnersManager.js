const remoteURL = 'http://localhost:5002';
const OwnerManager = {
	allOwners: () => {
		return fetch(`${remoteURL}/owners`).then((Owners) => Owners.json());
	},
	singleOwner: (id) => {
		return fetch(`${remoteURL}/owners/${id}`).then((e) => e.json());
	},
	deleteAndListOwner: (id) => {
		return fetch(`${remoteURL}/owners/${id}`, {
			method: 'DELETE'
		})
			.then((e) => e.json())
			.then(() => {
				return fetch(`${remoteURL}/owners`).then((e) => e.json());
			});
	}
};

export default OwnerManager;
