import React, { Component } from 'react';
import '../animals/Animal.css';
import ResourceCard from '../generics/ResourceCard';

export default class ResourceList extends Component {
	hasSecondResource = (singleResource) => {
		if (this.props.secondaryResource) {
			return (
				<section>
                    {/* stuff */}
					{this.props.secondaryResource
						.filter((singleSecondary) => singleSecondary.extraId === singleResource.id)
						.map((singleSecondary) => {
							return (
								<ResourceCard {...this.props}
									key={singleSecondary.id}
									resource={singleSecondary}
									deleteResource={this.props.deleteSecondary}
									route={this.props.secondRoute}
								/>
							);
						})}
				</section>
			);
		}
	};
	render() {
		return (
			<section className="list">
				<h1 className="card-title">{this.props.route.toUpperCase()}</h1>
                <br/>
                <div className="Button">
					<button
						type="button"
						className="btn btn-success"
						onClick={() => {
							this.props.history.push(`/${this.props.route}/new`);
						}}
					>
						ADD {this.props.route.split("s")[0].toUpperCase()}
					</button>
				</div>
                <div className="components-cont">
                				{this.props.listResources.map((singleResource) => {
					return (
						<div key={singleResource.id} className="card">
							<div className="card-body">
								<ResourceCard {...this.props}
									resource={singleResource}
									deleteResource={this.props.deletePrimary}
									route={this.props.route}
								/>
								{this.hasSecondResource(singleResource)}
							</div>
						</div>
					);
				})}</div>
			</section>
		);
	}
}
