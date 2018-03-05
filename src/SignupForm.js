import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';

class SignUpForm extends React.Component {
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
    event.preventDefault();

    this.setState({ submitted: true });

    const newUser = this.state.user;
    const { dispatch } = this.props;

    dispatch(actions.signUp(newUser));
  }

  handleChange(event) {
    const { name, value } = event.target;
    const newUserObj = Object.assign({}, this.state.user, {[name]: value });
    this.setState({ user: newUserObj });
  }

  render() {
    const { registering } = this.props;
    const { name, email, zipcode } = this.state.user;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleChange} />
          <input type="text" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
          <input type="text" pattern="[0-9]{5}"placeholder="Zipcode" name="zipcode" value={zipcode} onChange={this.handleChange} />
          <button className="signUpForm__button--primary">Signup</button>
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
const connectedSignUpForm = connect(mapStateToProps)(SignUpForm);
export { connectedSignUpForm as SignUpForm };
