import React, { Component } from 'react';
import '../animals/Animal.css';
import fry from '../animals/notsureif.png';
import { Link } from 'react-router-dom';

export default class EmployeeList extends Component {
	render() {
		return (
			<article clasName="employees">
				{this.props.employees.map((singleEmployee) => (
					<div key={singleEmployee.id} className="card">
						<div className="card-body">
							<h5 className="card-title">
								<img
									src={fry}
									className="icon--fry"
									alt="fry is not sure if reAct is easy or he's a genius"
								/>
								{singleEmployee.name}
								<Link className="nav-link" to={`/locations/${singleEmployee.id}`}>
									Details
								</Link>
								<button
									className="card-link"
									onClick={() => this.props.fireEmployee(singleEmployee.id)}
								>
									Fire
								</button>
							</h5>
						</div>
					</div>
				))}
			</article>
		);
	}
}
