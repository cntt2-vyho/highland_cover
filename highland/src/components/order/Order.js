import React, { Component } from 'react';
import classes from './Order.css';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import Product from './../products/Product';
import Modal from '../modal/Modal';
import { db } from '../../firebase/FirebaseConfig';

export default class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayProduct: [],
            product: '',
            searchText: ''
        }
    }
    componentDidMount() {
        var list=[];
        db.collection("data").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                list.push(doc.data());
                this.setState({
                    arrayProduct: list
                })
                
            });
        });
    }

    isChange = (event) => {
        console.log(event.target.value);


        this.setState({ searchText: event.target.value });

    };

    change_alias = (alias) => {
        var str = alias;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        str = str.replace(/ + /g," ");
        str = str.trim(); 
        return str;
    }



    render() {

        var result = [];
        this.state.arrayProduct.forEach((item) => {
            var text = this.change_alias(this.state.searchText);
            var name = this.change_alias(item.product_name)
            if (name.indexOf(text) !== -1) {
                result.push(item);
            }
            
        })
        

        const product = result.map((values, key) => {
            return (
                <li key={key} >
                    {/* <NavLink to="/modal"> */}
                    <div className="div-img-order col-lg-3 col-md-3 col-sm-12 col-12">
                        <img src={values.image} alt={values.product_name} />
                    </div>
                    <div className="div-product-details col-lg-9 col-md-9 col-sm-12 col-12">
                        <div className="name-size">
                            <h4>{values.product_name}</h4>
                            <p>{values.description}</p>
                        </div>
                    </div>
                    {/* </NavLink> */}
                </li>
            )
        });

        //console.log(this.state.arrayProduct);



        return (
            <div className="content-for-card">

                <div className="cart-detail col-lg-4 col-md-4 col-sm-12 col-12">

                    <div className="card-detail-container">
                        <NavLink to="/payment">
                            <div className="div-xemgiohang">
                                <h3>Xem giỏ hàng</h3>
                            </div>
                        </NavLink>

                        <div id="scroll-order">
                            <ul className="force-overflow-order" style={{ display: 'block' }}>
                                <li>
                                    <div className="div-img-order col-lg-3 col-md-3 col-sm-12 col-12">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" alt="none" />
                                    </div>
                                    <div className="div-product-details col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="name-size col-lg-6 col-md-6 col-sm-12 col-12">
                                            <h3>
                                                <a href="../trasenvang/ProductDetails.html">
                                                    trà sen vàng</a>
                                            </h3>
                                            <p>Vừa</p>
                                            <span>35.000 Đ</span>
                                        </div>
                                        <div className="quantity col-lg-6 col-md-6 col-sm-12 col-12">
                                            <button className="minus-btn" type="button" name="button">
                                                <i className="fa fa-minus" aria-hidden="true" />
                                            </button>
                                            <input type="text" name="name" defaultValue={1} className="input-count" />
                                            <button className="plus-btn" type="button" name="button">
                                                <i className="fa fa-plus" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="div-img-order col-lg-3 col-md-3 col-sm-12 col-12">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" alt="none" />
                                    </div>
                                    <div className="div-product-details col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="name-size col-lg-6 col-md-6 col-sm-12 col-12">
                                            <h3>
                                                <a href="../trasenvang/ProductDetails.html">
                                                    trà sen vàng</a>
                                            </h3>
                                            <p>Vừa</p>
                                            <span>35.000 Đ</span>
                                        </div>
                                        <div className="quantity col-lg-6 col-md-6 col-sm-12 col-12">
                                            <button className="minus-btn" type="button" name="button">
                                                <i className="fa fa-minus" aria-hidden="true" />
                                            </button>
                                            <input type="text" name="name" defaultValue={1} className="input-count" />
                                            <button className="plus-btn" type="button" name="button">
                                                <i className="fa fa-plus" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="div-img-order col-lg-3 col-md-3 col-sm-12 col-12">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" alt="none" />
                                    </div>
                                    <div className="div-product-details col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="name-size col-lg-6 col-md-6 col-sm-12 col-12">
                                            <h3>
                                                <a href="../trasenvang/ProductDetails.html">
                                                    trà sen vàng</a>
                                            </h3>
                                            <p>Vừa</p>
                                            <span>35.000 Đ</span>
                                        </div>
                                        <div className="quantity col-lg-6 col-md-6 col-sm-12 col-12">
                                            <button className="minus-btn" type="button" name="button">
                                                <i className="fa fa-minus" aria-hidden="true" />
                                            </button>
                                            <input type="text" name="name" defaultValue={1} className="input-count" />
                                            <button className="plus-btn" type="button" name="button">
                                                <i className="fa fa-plus" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="div-img-order col-lg-3 col-md-3 col-sm-12 col-12">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" alt="none" />
                                    </div>
                                    <div className="div-product-details col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="name-size col-lg-6 col-md-6 col-sm-12 col-12">
                                            <h3>
                                                <a href="../trasenvang/ProductDetails.html">
                                                    trà sen vàng</a>
                                            </h3>
                                            <p>Vừa</p>
                                            <span>35.000 Đ</span>
                                        </div>
                                        <div className="quantity col-lg-6 col-md-6 col-sm-12 col-12">
                                            <button className="minus-btn" type="button" name="button">
                                                <i className="fa fa-minus" aria-hidden="true" />
                                            </button>
                                            <input type="text" name="name" defaultValue={1} className="input-count" />
                                            <button className="plus-btn" type="button" name="button">
                                                <i className="fa fa-plus" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="div-img-order col-lg-3 col-md-3 col-sm-12 col-12">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" alt="none" />
                                    </div>
                                    <div className="div-product-details col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="name-size col-lg-6 col-md-6 col-sm-12 col-12">
                                            <h3>
                                                <a href="../trasenvang/ProductDetails.html">
                                                    trà sen vàng</a>
                                            </h3>
                                            <p>Vừa</p>
                                            <span>35.000 Đ</span>
                                        </div>
                                        <div className="quantity col-lg-6 col-md-6 col-sm-12 col-12">
                                            <button className="minus-btn" type="button" name="button">
                                                <i className="fa fa-minus" aria-hidden="true" />
                                            </button>
                                            <input type="text" name="name" defaultValue={1} className="input-count" />
                                            <button className="plus-btn" type="button" name="button">
                                                <i className="fa fa-plus" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="div-img-order col-lg-3 col-md-3 col-sm-12 col-12">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" alt="none" />
                                    </div>
                                    <div className="div-product-details col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="name-size col-lg-6 col-md-6 col-sm-12 col-12">
                                            <h3>
                                                <a href="../trasenvang/ProductDetails.html">
                                                    trà sen vàng</a>
                                            </h3>
                                            <p>Vừa</p>
                                            <span>35.000 Đ</span>
                                        </div>
                                        <div className="quantity col-lg-6 col-md-6 col-sm-12 col-12">
                                            <button className="minus-btn" type="button" name="button">
                                                <i className="fa fa-minus" aria-hidden="true" />
                                            </button>
                                            <input type="text" name="name" defaultValue={1} className="input-count" />
                                            <button className="plus-btn" type="button" name="button">
                                                <i className="fa fa-plus" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="totall" style={{ display: 'block' }}>
                                <div className="div-voucher">
                                    <input type="text" placeholder="Nhập mã giảm giá tại đây" />
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
                </div>
                <div className="order-container">
                    <div className="grid-layout">
                        <div className="product-order-page" className=" col-lg-8 col-md-8 col-sm-12 col-12">

                            <div className="product-order-page-container">
                                <div className="product-div-search">
                                    <span></span>
                                    <input type="text" placeholder="Tìm kiếm sản phẩm" name="searchText"  onChange={(event) => this.isChange(event)}  />
                                </div>
                                <div className="div-mon-moi">
                                    <h3>Món mới</h3>
                                </div>
                                <ul>
                                    {product}
                                    {/* <li>
                                        <NavLink to="/modal">
                                            <div className="div-img-order col-lg-3 col-md-3 col-sm-12 col-12">
                                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" alt="none" />
                                            </div>
                                            <div className="div-product-details col-lg-9 col-md-9 col-sm-12 col-12">
                                                <div className="name-size">
                                                    <h4>trà sen vàng
                                                </h4>
                                                    <p>
                                                        Nổi bật với ngoại hình vàng óng ánh, cùng sự kết hợp của 2 cái tên đỉnh cao trong làng tươi mát và giàu vitamin C - nền trà hảo hạng và Cam Vàng tươi 100%, cho bạn hương vị tươi mới và cực "healthy" từ trong ra ngoài chỉ ngay ngụm đầu tiên.
                                                </p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}