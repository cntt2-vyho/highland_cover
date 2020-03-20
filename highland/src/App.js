import React, { Component } from 'react'
import Homepage from './users/homepage/Homepage';
import Content from './users/content/Content';
import Footer from './users/footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Homepage />
        {/* <Content /> */}
        <Footer />
      </div>
    )
  }
}

