import React, { Component } from 'react';
import classes from './Payment.css';
import { NavLink } from 'react-router-dom';

export default class Payment extends Component {

    orderSuccess = () => {
        alert('Order success')
    }
    render() {
        return (
            <div className="content-for-payment">
                <div className="payment-container">
                    <div className="cart-detail cart-detail-payment col-lg-5 col-md-5 col-sm-12 col-12">

                        <div className="card-detail-container">
                            <NavLink to="/" className="div-xemgiohang div-xemgiohang-payment">
                                <h3 onClick={() => this.orderSuccess()}>đặt hàng</h3>
                            </NavLink>
                            <div>
                                <ul className="force-overflow-payment" style={{ display: 'block' }}>
                                    <li>
                                        <div className="div-product-details">
                                            <div className="name-size name-size-payment col-lg-10 col-md-10 col-sm-10 col-10">
                                                <h3>
                                                    <a href="../trasenvang/ProductDetails.html">
                                                        trà sen vàng</a>
                                                </h3>
                                                <p>Vừa</p>
                                                <span>35.000 Đ</span>
                                            </div>
                                            <div className="quantity quantity-payment col-lg-2 col-md-2 col-sm-2 col-2">
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="totall" style={{ display: 'block' }}>
                                <div className="div-voucher">
                                    <input type="text" placeholder="Nhập mã giảm giá tại đây" />
                                    <button className="btn-voucher">áp dụng</button>
                                </div>
                                <div className="div-ship">
                                    <h3 className="ship">
                                        vận chuyển
</h3>
                                    <h3 className="ship-fee">
                                        <strong>
                                            15.000 Đ
</strong>
                                    </h3>
                                </div>
                            </div>
                            <div className="total">
                                <h2 className="total-small">
                                    thành tiền
</h2>
                                <h2 className="total-fee">
                                    <strong>
                                        666.000 Đ
</strong>
                                </h2>
                            </div>

                        </div>
                    </div>



                    <div className="giaohang col-lg-7 col-md-7 col-sm-12 col-12">
                        <div className="giaohang-container">
                        <div className="confirm-order">
                            <h3>Xác nhận giao hàng</h3>

                        </div>
                        <div className="giaohang-content">
                            <form>
                                <div className="form-group-payment">
                                    <span className="span-for-name"></span>
                                    <input type="text" name="name" placeholder="Tên người nhận" />
                                </div>
                                <div className="form-group-payment">
                                <span className="span-for-phone"></span>
                                    <input type="text" name="phone" placeholder="Số điện thoại giao hàng" />
                                    
                                </div>
                                <div className="form-group-payment">
                                <span className="span-for-address"></span>
                                    <input type="text" name="address" placeholder="Nhập địa chỉ giao hàng" />
                                    
                                </div>
                                <div className="form-group-payment">
                                <span className="span-for-note"></span>
                                    <input type="text" name="note" placeholder="Ghi chú (nếu có)" />
                                    
                                </div>
                            </form>

                        </div>

                        <div className="confirm-order">
                            <h3>Xác nhận thanh toán</h3>

                        </div>
                        <div className="giaohang-content">
                            <form>
                                <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                    <input type="radio"  defaultChecked="checked" name="payment" className="modal-input-radio"/>
                                    <span>
                                        Thanh toán khi nhận hàng
                                    </span>
                                </label>
                                <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                    <input type="radio"  name="payment" className="modal-input-radio"/>
                                    <span>
                                        Thẻ ATM nội địa
                                    </span>
                                </label>
                                <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                    <input type="radio"  name="payment" className="modal-input-radio"/>
                                    <span>
                                        ZaloPay
                                    </span>
                                </label>
                                <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                    <input type="radio" name="payment" className="modal-input-radio"/>
                                    <span>
                                        Airpay
                                    </span>
                                </label>
                                <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                    <input type="radio"  name="payment" className="modal-input-radio"/>
                                    <span>
                                        VISA/Master/JCB
                                    </span>
                                </label>
                                <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                    <input type="radio" name="payment" className="modal-input-radio"/>
                                    <span>
                                        Momo
                                    </span>
                                </label>
                            </form>

                        </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
