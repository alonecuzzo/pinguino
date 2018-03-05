import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      zipcode: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });

    const { username, email, zipcode } = this.state;
    const { dispatch } = this.props;

    dispatch(actions.signup(username, email, zipcode));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { registering } = this.props;
    const { username, email, zipcode } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" name="username" value={username} onChange={this.handleChange} />
          <input type="text" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
          <input type="text" pattern="[0-9]{5}"placeholder="Zipcode" name="zipcode" value={zipcode} onChange={this.handleChange} />
          <button className="signupForm__button--primary">Signup</button>
        </form>
        { registering &&
          <div>Registering user</div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state;
  return {
    registering
  };
}
const connectedSignupForm = connect(mapStateToProps)(SignupForm);
export { connectedSignupForm as SignupForm };
