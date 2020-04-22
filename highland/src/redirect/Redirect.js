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
import Navbar from './../admin/navbar/Navbar';
import Form from '../admin/form/Form';
import Sidebar from './../admin/sidebar/Sidebar';
import Table from './../admin/table/Table';
import Modal from './../components/modal/Modal';
import Payment from './../components/payment/Payment';
import SizeForm from './../admin/form/sizeform/SizeForm';
import CategoryForm from './../admin/form/categoryform/CategoryForm';
import CategoriesDetailForm from '../admin/form/categoriesDetailForm/CategoriesDetailForm';


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

        <Route exact path="/menu/products/:slug/:id.html" component={Product} />
        <Route exact path="/menu/products/product-details" component={ProductDetails} />

        <Route exact path="/modal" component={Modal} />
        <Route exact path="/payment" component={Payment} />
        
        
        
        
        <Route path="/" component={Footer} />

        



        {/* <Route path="/admin" component={Sidebar} />
        
        <div className="content-for-admin col-lg-10 col-md-10 col-sm-10 col-10">
          <Route path="/admin" component={Navbar} />
          <Route exact path="/admin/form" component={Form} />
          <Route exact path="/admin/table" component={Table} />

          <Route path="/admin/form/size" component={SizeForm} />
        <Route path="/admin/form/category" component={CategoryForm} />
        <Route path="/admin/form/detail-categories" component={CategoriesDetailForm} />
        </div> */}

        
      </Fragment>
    )
  }
}
