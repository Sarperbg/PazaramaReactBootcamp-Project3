import React, { Component } from 'react';
import hello from '../../assets/images/helloimage.svg';
import { Link } from 'react-router-dom';
import './index.css';
class HelloPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hello-page-container">
        <div>
          <p className="hp-title">Hello👋</p>
          <p className="hp-text">
            I hope everyone is safe and sound. I designed different type of
            lending pages,application. it can help others to develop more ideas
            from this. I keep it simple and minimal. It can also help you find
            different options in exploring and improving your skills.
            <br /> <br />
            I am available for new projects. I hope you show me your support 😄
            <br /> <br />
            I wish you luck, <br />
            Drax❤️
          </p>
        </div>

        <Link to="login" className="hp-btnCoffee" onClick={(event) => {}}>
          <p className="hp-btnText">Buy me a Coffee </p>
        </Link>
        <img src={hello} className="image" alt="cafe" />
      </div>
    );
  }
}
export default HelloPage;
