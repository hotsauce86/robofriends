import React from 'react';
import logo from './logo.svg';
import './Hello.css';

function Hello() {
  return (
    <div className="Hello tc">
      <header className="Hello-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Hello-paragraph">
          Hello World x2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Hello;
