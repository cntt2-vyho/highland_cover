import React, { Component } from 'react'
import Order from './../order/Order';
import Cart from './../cart/Cart';
import classes from './Checkout.css';
import { NavLink } from 'react-router-dom';

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
    }
    componentDidMount() {
        const array1 = JSON.parse(localStorage.getItem('data')) || [];
        this.setState({
            array: array1
        })
    }
    render() {
        return (
            <div className="content-for-card">
                <div className="order-container">
                    <div className="grid-layout">
                        <Order />

                        <div className="cart-detail col-lg-4 col-md-12 col-sm-12 col-12">

                            <div className="card-detail-container">
                                <NavLink to="/payment">
                                    <div className="div-xemgiohang">
                                    <h3>Xem giỏ hàng ( + {this.state.array.length} món )</h3>
                                    </div>
                                </NavLink>

                                <Cart />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
