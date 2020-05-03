import React, { Component } from 'react';
import classes from './Order.css';
import { NavLink } from 'react-router-dom';

import { db } from '../../firebase/FirebaseConfig';

import Modal from '../modal/Modal';
import { connect } from 'react-redux';
import Cart from '../cart/Cart';


class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayProduct: [],
            product: '',
            searchText: '',
            arrayCategory: [],
            array: [],

            showPopup: false,
        }
    }
    componentDidMount() {
        var list1 = [];
        db.collection("categories").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    list1.push(doc.id);

                });

            });

        this.setState({
            arrayCategory: list1
        })

        var list = [];

        var query = db.collection('categories');
        query.get().then((querySnapshot) => {
            querySnapshot.forEach((document) => {
                document.ref.collection('products').get().then((querySnapshot) => {

                    querySnapshot.forEach(function (doc) {
                        list.push(doc.data());
                    })

                    this.setState({
                        arrayProduct: list
                    })

                });
            });
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

    pushData = () => {

        this.state.temp.map(value => {
            // db.collection("category").doc(value.product_category_id).collection("products").doc(value._id).set(value, { merge: true });

            db.collection("category").doc(value.product_category_id).set({
                category_name: this.getCategoryName(value.product_category_id),
                description: value.description,
                image: value.image,
                category_id: value.product_category_id,
                slug: ''
            }, { merge: true })
        })


    }


    showModal = () => {
        if (this.props.isEdit == true) {
            return <Modal />
        }
    }

    getOrderData(values) {
        values.options.map(temp => {
            temp.items.map((temps, keys) => {
                if(temp.default_index === keys)
                {
                    // console.log('default_index ',temp.default_index);
                    // console.log('temps', temps);
                    this.props.getSize(temps)
                }
            })
        })
        this.props.changeEditStatus();
        //console.log(values);
        this.props.getEditData(values);
    }

    changPrice(x) {
        return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        
    }

    appearanceIcon() {
        if(this.state.searchText !== '') {
            return <span className="product-div-search-last" onClick={() => this.setState({searchText: ''})}  ></span>;
        }
        return null;
    }

    render() {
        //this.pushData();

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
                <li key={key} className="product-order-page-container-ul-li-item">
                    <div className="div-img-order col-lg-3 col-md-3 col-sm-12 col-12" onClick={() => this.getOrderData(values)}>
                        <img src={values.image} alt={values.product_name} />
                    </div>
                    <div className="div-product-details col-lg-9 col-md-9 col-sm-12 col-12" onClick={() => this.getOrderData(values)}>
                        <div className="name-size">
                            <h4>{values.product_name}</h4>
                            <p className="p-for-description">{values.description}</p>
                            <p><strong>{this.changPrice(values.base_price)}</strong></p>
                        </div>
                    </div>
                    {this.showModal()}
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
                                    <span className="product-div-search-first">
                                    </span>
                                    <input type="text" placeholder="Tìm kiếm sản phẩm" name="searchText" onChange={(event) => this.isChange(event)} value={this.state.searchText} />
                                    {this.appearanceIcon()}
                                </div>
                                <div className="div-mon-moi">
                                    <h3>Món mới</h3>
                                </div>
                                <ul>
                                    {product}
                                </ul>
                            </div>
                        </div>

                        <Cart />
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({ type: "CHANGE_EDIT_STATUS" })
        },
        getEditData: (editItem) => {
            dispatch({ type: "GET_EDIT_DATA", editItem })
        },
        getSize: (size) => {
            dispatch({ type: "GET_SIZE", size })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);