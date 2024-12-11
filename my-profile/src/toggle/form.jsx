import React, { Component } from 'react';

class MyForm extends Component {
  // Constructor to initialize the state
  constructor(props) {
    super(props); // Calling the parent class constructor
    this.state = {
      name: '',  // form field
      email: '', // form field
      submitted: false, // to track form submission
    };
  }

  // Handle input change to update the state
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value, // dynamically update the state for corresponding input field
    });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit behavior (page reload)
    this.setState({
      submitted: true, // set submission flag to true
    });
  };

  render() {
    const { name, email, submitted } = this.state;

    return (
      <div>
        <h2>Submit Form Example</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <div>
            <h3>Entered Data:</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MyForm;
