import React, {Component} from 'react';
import './App.css';

import {MainPage} from "./components/main-page/main-page";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <MainPage/>
      </div>
    );
  }
}

export default App;
