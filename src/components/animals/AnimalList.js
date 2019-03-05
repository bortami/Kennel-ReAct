import React, { Component } from "react";

export default class AnimalList extends Component {
  render() {
    return (
      <article>
        <h1>Animal List</h1>
        {this.props.animals.map(single =>{
          return <p key={single.id}>{single.name}</p>
        })}
      </article>
    );
  }
}