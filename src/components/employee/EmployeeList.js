import React, { Component } from 'react';
import '../animals/Animal.css';
import EmployeeCard from './EmployeeCard';

export default class EmployeeList extends Component {
	render() {
		return (
			<section className="employees">
				{this.props.employees.map((employee) => (
					<EmployeeCard key={employee.id} employee={employee} {...this.props} />
				))}
			</section>
		);
	}
}
