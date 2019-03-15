import React, { Component } from 'react';
import '../animals/Animal.css';
import AnimalCard from '../animals/AnimalCard';

export default class EmployeeCard extends Component {
	render() {
		return (
			<div key={this.props.employee.id} className="card">
				<div className="card-body">
					<h5 className="card-title">
						<img src={this.props.employee.image} className="icon employee" alt="not sure if react is easy or i'm a genius" />
						{this.props.employee.name}
						<button
							type="button"
							className="btn btn-success"
							onClick={() => {
								this.props.history.push(`/employees/${this.props.employee.id}/edit`);
							}}
						>
							Edit
						</button>
						<button
							onClick={() => this.props.deleteEmployee(this.props.employee.id)}
							className="btn btn-danger"
						>
							Delete
						</button>
					</h5>
					<h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
				</div>
				<div className="animals caretaker">
					{this.props.animals
						.filter((anml) => anml.employeeId === this.props.employee.id)
						.map((anml) => <AnimalCard key={anml.id} animal={anml} {...this.props} />)}
				</div>
			</div>
		);
	}
}
