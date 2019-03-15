import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../animals/Animal.css';

export default class ResourceCard extends Component {
	hasImage =(param) =>{
		if(param.image){
			return <img src={this.props.resource.image} className="icon" alt="arg"/>
		}
	};
	hasName = (param)=>{
		if(param.name){
			return param.name
		}
	}
	hasDetails = (param)=>{
		return <em>{param.detail}</em>
	}
	render() {
		return (
			
				<div className="card-body">
					<h5>
						{this.hasImage(this.props.resource)}
						{this.hasName(this.props.resource)}</h5><br />
						{this.hasDetails(this.props.resource)}<br />
						<Link className="card-link" to={`/${this.props.route}/${this.props.resource.id}`}>
							Details
						</Link><br />
						<button
							type="button"
							className="btn btn-success"
							onClick={() => {
								this.props.history.push(`/${this.props.route}/${this.props.resource.id}/edit`);
							}}
						>
							Edit
						</button><br />
						<a href="#" onClick={() => this.props.deleteResource(this.props.resource.id)} className="card-link">
							Delete
						</a>
					
				</div>

		);
	}
}
