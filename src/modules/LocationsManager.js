const remoteURL = 'http://localhost:5002';
const LocationManager = {
	allLocations: () => {
		return fetch(`${remoteURL}/locations`).then((locations) => locations.json());
	},
	singleLocation: (id) => {
		return fetch(`${remoteURL}/locations/${id}`).then((e) => e.json());
	},
	deleteLocation: (id) => {
		return fetch(`${remoteURL}/locations/${id}`, {
			method: 'DELETE'
		}).then((e) => e.json());
	}
};

export default LocationManager;
