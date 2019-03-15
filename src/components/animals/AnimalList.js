import React, { Component } from 'react';
import ResourceCard from "../generics/ResourceCard"
import "../animals/Animal.css"

export default class AnimalList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="Button">
					<button
						type="button"
						className="btn btn-success"
						onClick={() => {
							this.props.history.push('/animals/new');
						}}
					>
						Admit Animal
					</button>
				</div>
				<section className="animals">
					{
                    this.props.animals.map(animal =>
                        <ResourceCard key={animal.id} resource={animal}
						route="animals" deleteResource={this.props.deleteResource} {...this.props} />
                    )
                }
				</section>
			</React.Fragment>
		);
	}
}
