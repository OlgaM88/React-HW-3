import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
  username: '',
  phone: '',
};

export default class SignIn extends Component {
  state = { ...INITIAL_STATE };

  handleSubmitForm = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  handleChangeForm = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, phone, username } = this.state;
    return (
      <div className="form-signup">
        <h2>Sign In</h2>
        <div className="container">
          <div className="container__item">
            <label htmlFor="username" value="username">
              Username
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username..."
              />
            </label>
          </div>
          <div className="container__item">
            <label htmlFor="email" value="email">
              E-mail
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Enter your e-mail..."
              />
            </label>
          </div>
          <div className="container__item">
            <label htmlFor="phone" value="phone">
              Phone
              <input
                type="text"
                name="phone"
                value={phone}
                placeholder="Enter your phone..."
              />
            </label>
          </div>
          <div className="container__item">
            <label htmlFor="password" value="password">
              Password
              <input
                type="text"
                name="password"
                value={password}
                placeholder="Enter your password..."
              />
            </label>
          </div>

          <button
            type="button"
            onSubmit={this.handleSubmitForm}
            className="signup-btn"
          >
            Sign up
          </button>
        </div>
      </div>
    );
  }
}
