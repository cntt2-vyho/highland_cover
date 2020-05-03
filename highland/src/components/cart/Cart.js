import React, { Component } from 'react';
import classes from './Cart.css';

import { NavLink } from 'react-router-dom';

class Cart extends Component {

    changPrice(x) {
        return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        
    }

    render() {
        return (
            <div className="cart-detail col-lg-4 col-md-12 col-sm-12 col-12">

                <div className="card-detail-container">
                    <NavLink to="/payment">
                        <div className="div-xemgiohang">
                            <h3>Xem giỏ hàng</h3>
                        </div>
                    </NavLink>

                    <ul className="force-overflow-order" style={{ display: 'block' }}>
                        <li>
                            <div className="div-img-order-right col-lg-3 col-md-3 col-sm-3 col-3">
                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" alt="none" />
                            </div>
                            <div className="div-product-details-right col-lg-9 col-md-9 col-sm-9 col-9">
                                <div className="div-product-details-right-count col-lg-2 col-md-2 col-sm-2 col-2">
                                    4
                                            </div>
                                <div className="name-size-right col-lg-5 col-md-5 col-sm-5 col-5">
                                    <h3>
                                        <a href="../trasenvang/ProductDetails.html">
                                            trà sen vàng</a>
                                    </h3>
                                    <p>Vừa</p>
                                    <p>Extra foam + Trân châu trắng</p>
                                </div>
                                <div className="quantity col-lg-5 col-md-5 col-sm-5 col-5">
                                    {this.changPrice(236000)}
                                </div>
                            </div>
                        </li>



                    </ul>
                    <div className="totall" style={{ display: 'block' }}>
                        <div className="div-voucher">
                            <input type="text" placeholder="Nhập mã giảm giá tại đây"/>
                            <button className="btn-voucher">áp dụng</button>
                        </div>
                        <div className="div-ship">
                            <h3 className="ship">vận chuyển </h3>
                            <h3 className="ship-fee">
                                <strong>15.000 Đ</strong>
                            </h3>
                        </div>
                    </div>
                    <div className="total">
                        <h2 className="total-small">thành tiền</h2>
                        <h2 className="total-fee">
                            <strong>666.000 Đ</strong>
                        </h2>
                    </div>



                </div>
            </div>
        )
    }
}
export default Cart;