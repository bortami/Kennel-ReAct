const remoteURL = 'http://localhost:5002';
const api = {
	all: (branch) => {
		return fetch(`${remoteURL}/${branch}`).then((e) => e.json());
	},
	single: (branch, id) => {
		return fetch(`${remoteURL}/${branch}/${id}`).then((e) => e.json());
	},
	deleteAndList: (branch, id) => {
		return fetch(`${remoteURL}/${branch}/${id}`, {
			method: 'DELETE'
		})
			.then((e) => e.json())
			.then(() => {
				return fetch(`${remoteURL}/${branch}`).then((e) => e.json());
			});
	}
};

export default api