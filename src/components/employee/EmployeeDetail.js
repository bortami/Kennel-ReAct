import React, { Component } from 'react';
import fry from '../animals/notsureif.png';

export default class EmployeeDetail extends Component {
	render() {
		const employee = this.props.employees.find((a) => a.id === parseInt(this.props.match.params.employeeId)) || {};
		return (
			<section className="employee">
				<div key={employee.id} classNamme="card">
					<h4 className="card-title">
						<img src={fry} className="icon--emp" alt="" />

						<h6 className="card-title">{employee.name}</h6>
						
						<a
							href="#"
							onClick={() =>
								this.props.fireEmployee(employee.id).then(() => this.props.history.push('/employees'))}
							className="card-link"
						>
							Fire
						</a>
					</h4>
				</div>
			</section>
		);
	}
}
