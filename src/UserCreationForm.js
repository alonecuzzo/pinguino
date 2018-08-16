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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({ submitted: true });

    const newUser = this.state.user;
    const { dispatch } = this.props;

    dispatch(actions.userCreation(newUser));
  }

  handleChange(event) {
    const { name, value } = event.target;
    const newUserObj = Object.assign({}, this.state.user, {[name]: value });
    this.setState({ user: newUserObj });
  }

  render() {
    const { creatingUser } = this.props;
    const { name, email, zipcode } = this.state.user;

    return (
      <div className="user-creation">
        <form className="user-creation--form">
          <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleChange} className="user-creation--field" />
          <input type="text" placeholder="Email" name="email" value={email} onChange={this.handleChange} className="user-creation--field" />
          <input type="text" pattern="[0-9]{5}"placeholder="Zipcode" name="zipcode" value={zipcode} onChange={this.handleChange} className="user-creation--field" />
          <Link to="users" onClick={this.handleSubmit} className="user-creation--button">Create User</Link>
        </form>
        { creatingUser &&
          <div>Registering user</div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { creatingUser } = state;
  return {
    creatingUser
  };
}
const connectedUserCreationForm = connect(mapStateToProps)(UserCreationForm);

export { connectedUserCreationForm as UserCreationForm };
