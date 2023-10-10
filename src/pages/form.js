import React, { Component } from "react";
import "./ContactForm.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    // Initialize state to store form input values
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
  }

  // Event handler for form input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the corresponding state property
    this.setState({
      [name]: value,
    });
  };

  // Event handler for form submission
  handleSubmit = (event) => {
    event.preventDefault();

    // You can now access the form data in this.state and perform actions like sending it to a server
    // For this example, we'll just log the form data
    console.log("Form Data:", this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="from">
            <p className="name">Name</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="from">
            <p className="email-3">Email</p>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="from">
            <p className="text-41">Phone Number</p>
            <input
              type="tel"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="from">
            <p className="message">Message</p>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="rectangle-11-holder">
            <p>Send</p>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
