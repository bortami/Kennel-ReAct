import React, { Component } from 'react';
import person from '../animals/notsureif.png';
import '../animals/Animal.css';
import AnimalCard from '../animals/AnimalCard';

export default class EmployeeList extends Component {
	render() {
		return (
			<section className="employees">
				{this.props.employees.map((employee) => (
					<div key={employee.id} className="card card--employee">
						<div className="card-body">
							<h5 className="card-title">
								<img
									src={person}
									className="icon--employee"
									alt="not sure if react is easy or i'm a genius"
								/>
								{employee.name}
								<button
									type="button"
									className="btn btn-success"
									onClick={() => {
										this.props.history.push(`/employees/${employee.id}/edit`);
									}}
								>
									Edit
								</button>
								<button onClick={() => this.props.deleteEmployee(employee.id)} className="btn btn-danger">
									Delete
								</button>
							</h5>

							<h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
							<div className="animals--caretaker">
								{this.props.animals
									.filter((anml) => anml.employeeId === employee.id)
									.map((anml) => <AnimalCard key={anml.id} animal={anml} {...this.props} />)}
							</div>
						</div>
					</div>
				))}
			</section>
		);
	}
}
