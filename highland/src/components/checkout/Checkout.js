import React, { Component } from 'react'
import Order from './../order/Order';
import Cart from './../cart/Cart';
import classes from './Checkout.css';

export default class Checkout extends Component {
    render() {
        return (
            <div className="content-for-card">
                <div className="order-container">
                    <div className="grid-layout">
                        <Order />

                        <Cart />
                    </div>
                </div>
            </div>
        )
    }
}
