import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      zipcode: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" name="username" value={this.state.username} onChange={this.handleChange} />
        <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
        <input type="text" pattern="[0-9]{5}"placeholder="Zipcode" name="zipcode" value={this.state.zipcode} onChange={this.handleChange} />
        <button className="signupForm__button--primary">Signup</button>
      </form>
    );
  }
}

export default SignupForm;
