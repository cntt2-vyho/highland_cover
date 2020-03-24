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
import Origin from './../components/about-us/about-us-item/origin/Origin';
import CustomerService from './../components/about-us/about-us-item/customer-service/CustomerService';
import Career from './../components/about-us/about-us-item/career/Career';
import Order from './../components/order/Order';
import Product from './../components/products/Product';
import Cafe from '../components/cafe/Cafe';
import ProductDetails from './../components/product-detail/ProductDetails';


export default class Redirect extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={Header} />



        <Route exact path="/" component={Content} />
        <Route exact path="/cafe" component={Cafe} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/news" component={News} />
        <Route exact path="/responsibility" component={SocialResponsibility} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />


        <Route exact path="/about/origin" component={Origin} />
        <Route exact path="/about/customer-service" component={CustomerService} />
        <Route exact path="/about/career" component={Career} />

        <Route exact path="/order" component={Order} />

        <Route exact path="/menu/products" component={Product} />
        <Route exact path="/menu/products/product-details" component={ProductDetails} />
        
        
        
        
        <Route path="/" component={Footer} />
      </Fragment>
    )
  }
}
