
import './App.css';
import { BrowserRouter } from "react-router-dom";
import React, { Component, Fragment } from 'react';
import Redirect from './redirect/Redirect';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Redirect />
      </BrowserRouter>
    );
  }
}

export default App;