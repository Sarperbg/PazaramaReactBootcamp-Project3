import React, { Component } from 'react';
import googlelogo from '../../assets/images/google.svg';
import githublogo from '../../assets/images/github.svg';
import facebooklogo from '../../assets/images/facebook.svg';
import eye from '../../assets/images/eye-regular.svg';
import eyeslash from '../../assets/images/eye-slash-regular.svg';
import './index.css';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <div className="background-image"></div>
        <div className="container">
          <div className="container-background-part-1"></div>
          <div className="container-background-part-2"></div>
          <div className="container-background-part-3"></div>
          <div className="container-form">
            <span className="your-logo">Your logo</span>
            <span className="login-text">Login</span>
            <span className="email-label">Email</span>
            <input
              type="email"
              placeholder="username@gmail.com"
              id="email"
              className="email-input"
            ></input>
            <span className="password-label">Password</span>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="password-input"
            ></input>
            <img
              id="showicon"
              src={eyeslash}
              alt="showiCon"
              onClick={ShowHidePassword}
              className="show-password"
            />

            <span className="continue-text">or continue with</span>
            <div className="google"></div>
            <div className="github"></div>
            <div className="facebook"></div>
            <img src={googlelogo} alt="google" className="google-logo" />
            <img src={githublogo} alt="github" className="github-logo" />
            <img src={facebooklogo} alt="facebook" className="facebook-logo" />
            <span className="register-text">
              Don’t have an account yet?{' '}
              <a href="/register-login">Register for free</a>
            </span>

            <a href="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </a>

            <button onClick={LoginFunc} className="sign-in-button">
              <a href="/login/sign-in"> Sign in</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
function LoginFunc() {
  alert(
    'Email : ' +
      document.getElementById('email').value +
      ' Password : ' +
      document.getElementById('password').value
  );
}

function ShowHidePassword() {
  document.getElementById('showicon').src.replace(/^.*[\\\/]/, '') ===
  eyeslash.replace(/^.*[\\\/]/, '')
    ? (document.getElementById('showicon').src = eye)
    : (document.getElementById('showicon').src = eyeslash);

  document.getElementById('password').type === 'password'
    ? (document.getElementById('password').type = 'text')
    : (document.getElementById('password').type = 'password');
}

export default RegisterPage;
