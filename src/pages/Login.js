

import React from 'react';

class Login extends React.Component {

  state = {
    email: 'test@gmail.com',
    password: ''
  }

  handleInputChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = () => {
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="bwm-form">
        <div className="row">
          <div className="col-md-5">
            <h1 className="page-title">Login</h1>
            {/* <!-- <div className="alert alert-success">
              Some message
            </div> --> */}
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.handleInputChange} 
                  name="email"
                  type="email"
                  className="form-control"
                  value={this.state.email}
                  id="email" />
                {/* <div className="alert alert-danger">
                  <div>
                    Email is required.
                  </div>
                  <div>
                    Must be valid email format!
                  </div>
                </div> */}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  onChange={this.handleInputChange}
                  name="password"
                  value={this.state.password}
                  type="password"
                  className="form-control"
                  id="password" />
              </div>
              <button 
                onClick={this.handleSubmit}
                type="button" 
                className="btn btn-bwm-main">Submit</button>
            </form>
            {/* <div className="alert alert-danger">
              <p>
                Some Error
              </p>
            </div> --> */}
          </div>
          <div className="col-md-6 ml-auto">
            <div className="image-container">
              <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
              <img src="/images/login-image.jpg" alt="Login an user" />
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default Login;