import React, { Component } from 'react';
import classes from './Payment.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './../cart/Cart';

import 'react-phone-number-input/style.css'

class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayProduct: [],
            name: '',
            phone: '',
            address: '',
            payment_method: 'Thanh toán khi nhận hàng'


        }
    }

    componentDidMount() {
        const array1 = JSON.parse(localStorage.getItem('data')) || [];
        this.setState({
            arrayProduct: array1
        })
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })

    }

    orderSuccess = () => {

        alert('Order success')
    }
    printArrayTopping(array) {

        var text = array.join(' + ');
        if (array.length != 0) {
            return <p>{text}</p>
        }
    }
    printIced(values) {
        //console.log(values);
        if (values.isIced == true) {
            return <p>Đá/Iced</p>
        }
        else if (values.isIced == false) {
            return <p>Nóng/Hot</p>
        }
    }
    changPrice(x) {
        if (x) {
            return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }


    }
    render() {
        //console.log("ahihi ",this.state);
        const item = this.state.arrayProduct.map((values, key) => {
            return (
                <li key={key} onClick={() => this.openModal(values, key)} className="cart-item">
                    <div className="div-product-details-right">
                        <div className="div-product-details-right-count">
                            {values.count}
                        </div>
                        <div className="name-size-right-container">
                            <div className="name-size-right">
                                <p className="this-is-name">
                                    {values.object.name}
                                </p>
                                <p>{values.size.name}</p>
                                {/* {values.toppingList ? this.printArrayTopping(values.topping) : null} */}
                                {this.printArrayTopping(values.topping)}
                                {this.printIced(values)}

                            </div>
                            <div className="quantity">
                                {this.changPrice(values.total)}
                            </div>
                        </div>
                    </div>

                </li>
            )
        })
        return (
            <div className="content-for-card">
                <div className="order-container">
                    <div className="grid-layout">

                        <div className="cart-detail col-lg-4 col-md-12 col-sm-12 col-12">

                            <div className="card-detail-container">
                                <NavLink to="/" className="div-xemgiohang div-xemgiohang-payment">
                                    <h3 onClick={() => this.orderSuccess()}>đặt hàng</h3>
                                </NavLink>

                                <Cart />
                            </div>
                        </div>



                        <div className="product-order-page" className=" col-lg-8 col-md-12 col-sm-12 col-12">

                            <div className="product-order-page-container">
                                <div className="confirm-order">
                                    <h3>Xác nhận giao hàng</h3>

                                </div>
                                <div className="giaohang-content">
                                    <form>
                                        <div className="form-group-payment">
                                            <span className="span-for-name"></span>
                                            <input type="text" name="name" placeholder="Tên người nhận" onChange={(event) => this.isChange(event)} />
                                        </div>
                                        <div className="form-group-payment">
                                            <span className="span-for-phone"></span>
                                            <input type="text" name="phone" placeholder="Số điện thoại giao hàng" onChange={(event) => this.isChange(event)} />

                                        </div>
                                        <div className="form-group-payment">
                                            <span className="span-for-address"></span>
                                            <input type="text" name="address" placeholder="Nhập địa chỉ giao hàng" onChange={(event) => this.isChange(event)} />

                                        </div>
                                        <div className="form-group-payment">
                                            <span className="span-for-note"></span>
                                            <input type="text" name="note" placeholder="Ghi chú (nếu có)" onChange={(event) => this.isChange(event)} />

                                        </div>
                                    </form>

                                </div>

                                <div className="confirm-order">
                                    <h3>Xác nhận thanh toán</h3>

                                </div>
                                <div className="giaohang-content">
                                    <form>
                                        <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                            <input type="radio" defaultChecked="checked" name="payment_method" className="modal-input-radio" value="Thanh toán khi nhận hàng" onChange={(event) => this.isChange(event)} />
                                            <span>
                                                Thanh toán khi nhận hàng
                                    </span>
                                        </label>
                                        <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                            <input type="radio" name="payment_method" className="modal-input-radio" value="Thẻ ATM nội địa" onChange={(event) => this.isChange(event)} />
                                            <span>
                                                Thẻ ATM nội địa
                                    </span>
                                        </label>
                                        <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                            <input type="radio" name="payment_method" className="modal-input-radio" value="ZaloPay" onChange={(event) => this.isChange(event)} />
                                            <span>
                                                ZaloPay
                                    </span>
                                        </label>
                                        <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                            <input type="radio" name="payment_method" className="modal-input-radio" value="Airpay" onChange={(event) => this.isChange(event)} />
                                            <span>
                                                Airpay
                                    </span>
                                        </label>
                                        <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                            <input type="radio" name="paymenpayment_methodt" className="modal-input-radio" value="VISA/Master/JCB" onChange={(event) => this.isChange(event)} />
                                            <span>
                                                VISA/Master/JCB
                                    </span>
                                        </label>
                                        <label className="label-input-for-payment col-lg-6 col-md-6 col-sm-6 col-12">
                                            <input type="radio" name="payment_method" className="modal-input-radio" value="Momo" onChange={(event) => this.isChange(event)} />
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
            </div>
        )
    }
}
export default Payment