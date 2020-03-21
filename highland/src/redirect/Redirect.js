import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from './../components/headers/Header';
import Content from './../components/contents/Content';
import Footer from './../components/footers/Footer';
import Menu from './../components/menu/Menu';
import News from './../components/news/News';
import SocialResponsibility from './../components/social-responsibility/SocialResponsibility';
import AboutUs from './../components/about-us/AboutUs';
import Contact from '../components/contact/Contact';


export default class Redirect extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={Header} />



        <Route exact path="/" component={Content} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/news" component={News} />
        <Route exact path="/responsibility" component={SocialResponsibility} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
        
        
        
        
        <Route path="/" component={Footer} />
      </Fragment>
    )
  }
}
