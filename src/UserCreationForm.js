import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';
import { Link } from 'react-router-dom';
import './UserCreationForm.css';

class UserCreationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        email: '',
        zipcode: ''
      },
      submitted: false
    };

    //I was doing this as well but they told me that just declaring the function
    //using the => operator can work
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //for example instead of having to bind this in the constructor,
  //you can declare it as: handleSubmit = (event) => {
  //also - this is probably more of a style thing but I noticed that some will
  //prepend a private function with an underscore, and usually leave those at the bottom of the file
  //and the render usually goes at the top w/ the constructor and public facing functions - more of a
  //style thing - i'm not sure how common it is
  handleSubmit(event) {
    this.setState({ submitted: true });

    const newUser = this.state.user;
    const { dispatch } = this.props;

    dispatch(actions.createUser(newUser));
  }

  handleChange(event) {
    const { name, value } = event.target;
    const newUserObj = Object.assign({}, this.state.user, {[name]: value });
    this.setState({ user: newUserObj });
  }

  render() {
    const { name, email, zipcode } = this.state.user;

    return (
      <div className="user-creation">
        <form className="user-creation--form">
          <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleChange} className="user-creation--field" />
          <input type="text" placeholder="Email" name="email" value={email} onChange={this.handleChange} className="user-creation--field" />
          <input type="text" pattern="[0-9]{5}"placeholder="Zipcode" name="zipcode" value={zipcode} onChange={this.handleChange} className="user-creation--field" />
          <Link to="users" onClick={this.handleSubmit} className="user-creation--button">Create User</Link>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { newUser } = state;
  return {
    newUser
  };
}
const connectedUserCreationForm = connect(mapStateToProps)(UserCreationForm);

export { connectedUserCreationForm as UserCreationForm };
