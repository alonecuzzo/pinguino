import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        email: '',
        zipcode: ''
      },

    };
  }
  
  render() {
    return (
      <div class="signupForm">
        <div class="signupForm__fields">
        <input type="text" placeholder="Name"/>  
        <input type="text" placeholder="Email"/>
        <input type="text" pattern="[0-9]{5}"placeholder="Zipcode"/>  
        </div>
        <div class="signupForm__button">
          <button class="signupForm__button--primary">Signup</button>
        </div>
      </div>
    );
  }
}

export default SignupForm;
