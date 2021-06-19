import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Order from './../components/order/Order';
import ProductDetails from './../components/product-detail/ProductDetails';

import Payment from './../components/Payment';
import Login from './../auth/login/Login';
import Register from './../auth/register/Register';




export default class Redirect extends Component {
    render() {
        return (
            <Fragment>


                <Route path="/" component={Header} />



                <Route exact path="/" component={Content} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/contact" component={Contact} />


                <Route exact path="/order" component={Order} />

                <Route exact path="/menu/:slugCategory/:idCategory/:slug/:id.html" component={ProductDetails} />

                <Route exact path="/payment" component={Payment} />
                
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />



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
