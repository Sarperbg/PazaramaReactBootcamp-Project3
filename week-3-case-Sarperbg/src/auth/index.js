import React, { Component } from 'react';
import './index.css';
import HelloPage from '../Pages/HelloPage/HelloPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <HelloPage />
      </div>
    );
  }
}
export default Auth;
