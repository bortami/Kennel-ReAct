import React, { Component } from "react";

export default class LocationList extends Component {
  render() {
    return (
      <article>
        <h1>Location</h1>
        {this.props.locations.map(singleLocation => {
          return <p key={singleLocation.id}>{singleLocation.name}</p>;
        })}
      </article>
    );
  }
}
