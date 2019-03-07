const remoteURL = 'http://localhost:5002';
const OwnerManager = {
	allOwners: () => {
		return fetch(`${remoteURL}/owners`).then((Owners) => Owners.json());
	},
	singleOwner: (id) => {
		return fetch(`${remoteURL}/owners/${id}`).then((e) => e.json());
	},
	deleteOwner: (id) => {
		return fetch(`http://localhost:5002/owners/${id}`, {
			method: 'DELETE'
		}).then((e) => e.json());
	}
};

export default OwnerManager;
