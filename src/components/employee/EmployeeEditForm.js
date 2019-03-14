import React, { Component } from "react"
import api from "../../modules/APIManager";

export default class EmployeeEditForm extends Component {
    // Set initial state
    state = {
      name: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault()

        const editedEmployee = {
          id: this.props.match.params.employeeId,
          name: this.state.name,
        };

    this.props.updateEmployee(editedEmployee)
    .then(() => this.props.history.push("/employees"))      

  }

    componentDidMount() {
      api.all("employees", this.props.match.params.employeeId)
      .then(employee => {
        this.setState({
          name: employee.name
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="EmployeeForm">
            <div className="form-group">
              <label htmlFor="name">Employee name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value = {this.state.name}
              />
            </div>
         
            <button
              type="submit"
              onClick={this.updateExistingEmployee}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}