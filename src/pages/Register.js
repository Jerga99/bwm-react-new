

import React from 'react';
import RegisterForm from 'components/forms/RegisterForm';

class Register extends React.Component {

  registerUser = (registerData) => {
    alert(JSON.stringify(registerData));
  }

  render() {
    return (
      <div className="bwm-form">
        <div className="row">
          <div className="col-md-5">
            <h1 className="page-title">Register</h1>
            <RegisterForm onSubmit={this.registerUser} />
            {/* <div className="alert alert-danger">
              <p>
                Some Error
              </p>
            </div> */}
          </div>
          <div className="col-md-6 ml-auto">
            <div className="image-container">
              <h2 className="catchphrase">As our member you have access to most awesome places in the world.</h2>
              <img src="/images/register-image.jpg" alt="Register an user" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;