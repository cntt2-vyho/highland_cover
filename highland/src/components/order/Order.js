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
            searchText: '',
            arrayCategory: [],
            array: []
        }
    }
    componentDidMount() {
        this.getCate();
        // this.state.arrayCategory? this.getProducts():this.getCate();


    }
    getCate = () => {
        var list1 = [];
        db.collection("categories").get()
            .then((querySnapshot) => {
                console.log(querySnapshot);

                querySnapshot.forEach((doc) => {
                    console.log(doc.products);

                    list1.push(doc.data());

                });
                this.setState({
                    arrayCategory: list1
                })
            });
    }


    getCategoryName = (a) => {
        if (a.indexOf("5d71dc67ad2aba2980db0a9d") !== -1) {
            //category_name = "Thức ăn nhẹ";
            return a = "Mít Sấy";
        }
        //thức ăn nhẹ : điều vàng, đậu phộng
        if (a.indexOf("5d71dc6ead2aba2980db0b04") !== -1) {
            // category_name = "Thức ăn nhẹ";
            return a = "Thức ăn nhẹ";
        }

        //cà phê gói: cà phê anrica, cà phê phin
        if (a.indexOf("5d71dc6dad2aba2980db0af0") !== -1) {
            //category_name = "Cà Phê Gói";
            return a = "Cà Phê Gói";
        }

        //macchiato: trà đen machiato, matcha-macchiato, Trà Xoài Macchiato - Đá, Trà Lài Macchiato - Lạnh, Trà Cherry Macchiato
        if (a.indexOf("5d71dc6dad2aba2980db0af2") !== -1) {
            //category_name = "Thức Uống Macchiato";
            return a = "Thức Uống Macchiato";
        }

        //đá xay : phuc-bon-tu-cam-da-xay, Cà Phê Đá Xay-Lạnh, Cam Vàng Chanh Đá Xay, Trà Cà Phê Đá Xay - Lạnh, chanh-sa-da-xay
        if (a.indexOf("5d71dc71ad2aba2980db0b3e") !== -1) {
            //category_name = "Thức Uống Đá Xay";
            return a = "Trái Cây Đá Xay";
        }
        //đá xay : cookie-da-xay, dao-viet-quat-da-xay, chocolate-da-xay, oi-hong-viet-quat-da-xay, matcha-da-xay
        if (a.indexOf("5d71dc6fad2aba2980db0b21") !== -1) {
            //category_name = "Thức Uống Đá Xay";
            return a = "Thức Uống Đá Xay";
        }

        //sinh tố: sinh-to-cam-xoai, sinh-to-viet-quat
        if (a.indexOf("5d71dc6fad2aba2980db0b22") !== -1) {
            //category_name = "Sinh tố";
            return a = "Sinh tố";
        }
        //cà phê : ca-phe-den-nong, ca-phe-den-da, ca-phe-sua-nong, bac-xiu-nong, ca-phe-sua-da, Bạc Xỉu
        if (a.indexOf("5d71dc6dad2aba2980db0af8") !== -1) {
            // category_name = "Cà Phê";
            return a = "Cà Phê";
        }
        //cà phê : cappucino-nong, cappuchino-da, caramel-macchiato-nong, latte-nong, 
        //mocha-nong, mocha-da, espresso-da, espresso-nong, caramel-macchiato-da, latte-da, americano-nong, americano-da
        if (a.indexOf("5d71dc6fad2aba2980db0b24") !== -1) {
            //category_name = "Cà Phê";
            return a = "Cà Phê Rang Xay";
        }
        //socola-da, tra-matcha-latte-nong, tra-matcha-latte-da
        if (a.indexOf("5d71dc71ad2aba2980db0b3d") !== -1) {
            //category_name = "Choco Matcha";
            return a = "Choco Matcha";
        }
        //ô lông
        if (a.indexOf("5d71dc6fad2aba2980db0b27") !== -1) {
            // category_name = "Oo Loong";
            return a = "Oo Loong";
        }
        //cold-brew
        if (a.indexOf("5d71dc6ead2aba2980db0b0e") !== -1) {
            // category_name = "Thức uống Cold Brew";
            return a = "Thức uống Cold Brew";
        }

        if (a.indexOf("5e819b462d2d6a24a216c8d2") !== -1) {
            // category_name = "Gói Subscription";
            return a = "Gói Subscription 3 ngày";
        }

        if (a.indexOf("5e819b5548916b75fd17e172") !== -1) {
            /// category_name = "Gói Subscription";
            return a = "Gói Subscription 5 ngày";
        }

        if (a.indexOf("5e819b69538a2402ff619802") !== -1) {
            //category_name = "Gói Subscription";
            return a = "Gói Subscription 7 ngày";
        }

        //trà trái cây: trà xoài nóng
        if (a.indexOf("5d71dc70ad2aba2980db0b35") !== -1) {
            //category_name = "Trà Trái Cây";
            return a = "Trà Trái Cây";
        }
    }

    isChange = (event) => {
        this.setState({ searchText: event.target.value });
    };

    change_alias = (alias) => {
        var str = alias;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        str = str.replace(/ + /g, " ");
        str = str.trim();
        return str;
    }


    getProducts = () => {
        var list = [];
        console.log(this.state.arrayCategory);

        this.state.arrayCategory.map(value => {
            console.log(value);

            db.collection('categories').doc(value).collection('products').get().then((querySnapshot) => {
                querySnapshot.forEach(function (doc) {
                    // console.log(doc.data());

                    list.push(doc.data())


                })
                this.setState({
                    arrayProduct: list
                })
                // console.log(this.state.arrayProduct);
            })
        })


    }



    pushData = () => {

        this.state.arrayProduct.map(value => {
            // db.collection("categories").doc(value.product_category_id).collection("products").doc(value._id).set(value, { merge: true });

            db.collection("categories").doc(value.product_category_id).set({
                // category_name: this.getCategoryName(value.product_category_id),
                // description: value.description,
                // image: value.image
                //category_id: value.product_category_id
                slug: ''
            }, { merge: true })
        })


    }


    render() {

        // console.log(this.state.arrayCategory);


        //    this.getProducts();
        console.log(this.state.arrayCategory);





        var result = [];
        this.state.arrayProduct.forEach((item) => {

            var text = this.change_alias(this.state.searchText);
            var name = this.change_alias(item.product_name)

            if (name.indexOf(text) !== -1) {
                result.push(item);
            }

        })


        const product = this.state.arrayProduct.map((values, key) => {
            return (
                <li key={key} >
                    <div className="div-img-order col-lg-3 col-md-3 col-sm-12 col-12">
                        <img src={values.image} alt={values.product_name} />
                    </div>
                    <div className="div-product-details col-lg-9 col-md-9 col-sm-12 col-12">
                        <div className="name-size">
                            <h4>{values.product_name}</h4>
                            <p>{values.description}</p>
                        </div>
                    </div>
                </li>
            )
        });

        return (
            <div className="content-for-card">
                <div className="order-container">
                    <div className="grid-layout">
                        <div className="product-order-page" className=" col-lg-8 col-md-12 col-sm-12 col-12">

                            <div className="product-order-page-container">
                                <div className="product-div-search">
                                    <span></span>
                                    <input type="text" placeholder="Tìm kiếm sản phẩm" name="searchText" onChange={(event) => this.isChange(event)} />
                                </div>
                                <div className="div-mon-moi">
                                    <h3>Món mới</h3>
                                </div>
                                <ul>
                                    {product}
                                </ul>
                            </div>
                        </div>

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
                                            <div className="name-size-right col-lg-6 col-md-6 col-sm-6 col-6">
                                                <h3>
                                                    <a href="../trasenvang/ProductDetails.html">
                                                        trà sen vàng</a>
                                                </h3>
                                                <p>Vừa</p>
                                                <span>35.000 Đ</span>
                                            </div>
                                            <div className="quantity col-lg-6 col-md-6 col-sm-6 col-6">
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
                                        <div className="div-img-order-right col-lg-3 col-md-3 col-sm-3 col-3">
                                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" alt="none" />
                                        </div>
                                        <div className="div-product-details-right col-lg-9 col-md-9 col-sm-9 col-9">
                                            <div className="name-size-right col-lg-6 col-md-6 col-sm-6 col-6">
                                                <h3>
                                                    <a href="../trasenvang/ProductDetails.html">
                                                        trà sen vàng</a>
                                                </h3>
                                                <p>Vừa</p>
                                                <span>35.000 Đ</span>
                                            </div>
                                            <div className="quantity col-lg-6 col-md-6 col-sm-6 col-6">
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
                                        <div className="div-img-order-right col-lg-3 col-md-3 col-sm-3 col-3">
                                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" alt="none" />
                                        </div>
                                        <div className="div-product-details-right col-lg-9 col-md-9 col-sm-9 col-9">
                                            <div className="name-size-right col-lg-6 col-md-6 col-sm-6 col-6">
                                                <h3>
                                                    <a href="../trasenvang/ProductDetails.html">
                                                        trà sen vàng</a>
                                                </h3>
                                                <p>Vừa</p>
                                                <span>35.000 Đ</span>
                                            </div>
                                            <div className="quantity col-lg-6 col-md-6 col-sm-6 col-6">
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
                                        <div className="div-img-order-right col-lg-3 col-md-3 col-sm-3 col-3">
                                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" alt="none" />
                                        </div>
                                        <div className="div-product-details-right col-lg-9 col-md-9 col-sm-9 col-9">
                                            <div className="name-size-right col-lg-6 col-md-6 col-sm-6 col-6">
                                                <h3>
                                                    <a href="../trasenvang/ProductDetails.html">
                                                        trà sen vàng</a>
                                                </h3>
                                                <p>Vừa</p>
                                                <span>35.000 Đ</span>
                                            </div>
                                            <div className="quantity col-lg-6 col-md-6 col-sm-6 col-6">
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
                                        <input type="text" placeholder="Nhập mã giảm giá tại đây" className="col-lg-10 col-md-10 col-sm-12 col-12" />
                                        <button className="btn-voucher col-lg-2 col-md-2 col-sm-12 col-12">áp dụng</button>
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
                </div>
            </div>

        )
    }
}