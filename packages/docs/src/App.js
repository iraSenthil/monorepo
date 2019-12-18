import React from 'react';
import logo from './logo.svg';
import './App.css';
import say from '@modernhire/components/index'


function App() {
  const message = say("foo");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
          Here is {message}
        </p>
        <div>
          
        </div>
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

export default App;
