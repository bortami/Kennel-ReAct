import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./locations/LocationsList"
import "./Kennel.css"
import AnimalList from "./animals/AnimalList";


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]
animalsFromAPI = [
    {id: 1, name: "Zoey", ownerId: 1},
    {id: 2, name: "Ralph", ownerId: 2},
    {id: 3, name: "Hugo", ownerId: 3},
    {id: 1, name: "Zorro", ownerId: 4},
    {id: 2, name: "Fluffy", ownerId: 5},
    {id: 3, name: "Fatty", ownerId: 6}
    
]
   ownersFromAPI = [
    {id: 1, name: "Ryan Tanay"},
    {id: 2, name: "Emma Beaton"},
    {id: 3, name: "Dani Adkins"},
    {id: 4, name: "Adam Oswalt"},
    {id: 5, name: "Fletcher Bangs"},
    {id: 6, name: "Angela Lee"}
]
aoJoinTable = [
    {id: 1, animalId: 1, ownerId: 1},
    {id: 2, animalId: 2, ownerId: 2},
    {id: 3, animalId: 3, ownerId: 3},
    {id: 4, animalId: 4, ownerId: 4},
    {id: 5, animalId: 5, ownerId: 5},
    {id: 6, animalId: 6, ownerId: 6}
]

state = {
    owners: this.ownersFromAPI,
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    animalOwners: this.aoJoinTable

}

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
            </article>
        )
    }
}

export default Kennel