import React, { Component } from 'react';
import '../animals/Animal.css';
import { Link } from 'react-router-dom';
import EmployeeCard from '../employee/EmployeeCard';

export default class LocationList extends Component {
	render() {
		return (
			<section className="locations">
				{this.props.locations.map((singlelocation) => (
					<div key={singlelocation.id} className="card">
						<div className="card-body">
							<h5 className="card-title">
								{singlelocation.name}
								<Link className="nav-link" to={`/${singlelocation.id}`}>
									Details
								</Link>
								<button
									className="card-link"
									onClick={() => this.props.deleteLocation(singlelocation.id)}
								>
									Delete
								</button>
							</h5>
							<h6>Employees</h6>
						</div>
						<div className="employees">
							{this.props.employees
								.filter((emp) => emp.locationId === singlelocation.id)
								.map((emp) => <EmployeeCard key={emp.id} employee={emp} {...this.props} />)}
						</div>
					</div>
				))}
			</section>
		);
	}
}
