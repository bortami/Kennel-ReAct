const remoteURL = 'http://localhost:5002';
const EmployeeManager = {
	allEmployees: () => {
		return fetch(`${remoteURL}/employees`).then((employees) => employees.json());
	},
	singleEmployee: (id) => {
		return fetch(`${remoteURL}/employees/${id}`).then((e) => e.json());
	},
	deleteEmployee: (id) => {
		return fetch(`http//localhost:5002/employees/${id}`, {
			method: 'DELETE'
		}).then((e) => e.json());
	}
};

export default EmployeeManager;
