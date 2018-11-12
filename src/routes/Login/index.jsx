// Login Component
import React, { Component } from 'react';
import "./index.scss";

class Login extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.showAlert();
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <form className="form-signin" onSubmit={this.handleClick}>
              <h1 className="form-signin-heading mb-5">Please Login</h1>
              <input
                type="text"
                className="form-control mb-1"
                name="username"
                placeholder="Email Address"
                required=""
                autoFocus=""
              />
              <input
                type="password"
                className="form-control mb-5"
                name="password"
                placeholder="Password"
                required=""
              />
              <button
                className="btn btn-lg btn-primary btn-block mb-3"
                type="submit"
              >
                Log in
              </button>
            </form>
            <p className="text-center sign-up">
              <strong>Sign up</strong> for a new account
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
