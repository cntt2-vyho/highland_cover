import React, { Component } from 'react';
import classes from './Order.css';
import { NavLink } from 'react-router-dom';

import axios from 'axios';
import { db } from '../../firebase/FirebaseConfig';

import { connect } from 'react-redux';
import Modal from 'react-modal';

import ReactModal from './../modal/react-modal/ReactModal';
import data from '../../data-clean/firebase/data.json';
var _ = require('lodash');
class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayProduct: [],
            searchText: '',

            modalIsOpen: false
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal = (values) => {
        this.setState({ modalIsOpen: true });

        values.options.map(temp => {
            temp.items.map((temps, keys) => {
                if (temp.default_index === keys) {
                    this.props.getSize(temps);
                }
            })
        });

        this.props.getAddData(values);
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
        this.props.turnOffAll();

    }

    componentDidMount() {

        // var list = [];

        // var query = db.collection('categories');
        // query.get().then((querySnapshot) => {
        //     querySnapshot.forEach((document) => {
        //         document.ref.collection('products').get().then((querySnapshot) => {

        //             querySnapshot.forEach(function (doc) {
        //                 list.push(doc.data());
        //             })

        //             this.setState({
        //                 arrayProduct: list
        //             })

        //         });
        //     });
        // });

        // var list1 = [];

        // db.collection("data").get()
        //     .then(function (querySnapshot) {
        //         querySnapshot.forEach(function (doc) {
        //             // doc.data() is never undefined for query doc snapshots
        //             list1.push(doc.data())
        //         });
        //     });
        // this.setState({
        //     arrayProduct: list1
        // })

        var list = [];

        var query = db.collection('data');
        query.get().then((querySnapshot) => {
            querySnapshot.forEach((document) => {
                document.ref.collection('dishes').get().then((querySnapshot) => {

                    querySnapshot.forEach(function (doc) {
                        list.push(doc.data());
                    })

                    this.setState({
                        arrayProduct: list
                    })

                });
            });
        });




        //------push data into firebase firestore------------------------------
        // console.log(data);


        // var arr = _.values(data);

        // console.log(arr);

        // arr[0].map((value, key) => {
        //     // db.collection('data').doc(String(value.dish_type_id)).set({
        //     //     dish_type_id: String(value.dish_type_id),
        //     //     dish_type_name: String(value.dish_type_name)
        //     // }, { merge: true })

        //    value.dishes.map((values, keys) => {
        //        db.collection('data').doc(String(value.dish_type_id)).collection('dishes').doc(String(values.id)).set(values, { merge: true })
        //    })

        // })
        //-------------------------------------------------------------------


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


    getOrderData(values) {
        values.options.map(temp => {
            temp.items.map((temps, keys) => {
                if (temp.default_index === keys) {
                    this.props.getSize(temps);
                }
            })
        });

        this.props.getAddData(values);
    }

    changPrice(x) {
        return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

    }

    appearanceIcon() {
        if (this.state.searchText !== '') {
            return <span className="product-div-search-last" onClick={() => this.setState({ searchText: '' })}  ></span>;
        }
        return null;
    }

    render() {
        
        // var result = [];
        // this.state.arrayProduct.forEach((item) => {

        //     var text = this.change_alias(this.state.searchText);
        //     var name = this.change_alias(item.product_name)

        //     if (name.indexOf(text) !== -1) {
        //         result.push(item);
        //     }

        // })
        const product = this.state.arrayProduct.map((values, key) => {
            return (
                <li key={key} className="product-order-page-container-ul-li-item" onClick={() => this.openModal(values)}>
                    <div className="div-img-order col-lg-3 col-md-3 col-sm-12 col-12">
                        <img src={values.photos[0].value} alt={values.name} />
                    </div>
                    <div className="div-product-details col-lg-9 col-md-9 col-sm-12 col-12">
                        <div className="name-size">
                            <h4>{values.name}</h4>
                            <p className="p-for-description">{values.description}</p>
                            <p><strong>{this.changPrice(values.price.value)}</strong></p>
                        </div>
                    </div>

                </li>
            )
        });

        return (
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
                        <div>
                            <Modal onRequestClose={this.closeModal} isOpen={this.state.modalIsOpen}>
                                <div className="modal-container">
                                    <button className="modal-container-button" onClick={() => this.closeModal()}>
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                    <ReactModal />
                                </div>

                            </Modal>
                        </div>
                    </ul>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAddData: (addItem) => {
            dispatch({ type: "GET_ADD_DATA", addItem })
        },
        getSize: (size) => {
            dispatch({ type: "GET_SIZE", size })
        },
        turnOffAll: () => {
            dispatch({ type: "TURN_OFF_ALL" })
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);
Modal.setAppElement('body');