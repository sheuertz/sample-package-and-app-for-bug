import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CustomButton} from '@sample-component/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CustomButton text="Test" onClick={() => null} />
        </header>
      </div>
    );
  }
}

export default App;
