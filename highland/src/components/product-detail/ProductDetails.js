import React, { Component } from 'react';
import classes from './ProductDetails.css'
import { db } from '../../firebase/FirebaseConfig';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayCategory: [],
            arrayProduct: [],

            idProduct: '',
            idCategory: ''

        }
    }

    // componentWillUpdate(nextProps, nextState) {
    //     if (nextProps.match.params.id !== nextState.idProduct) {
    //         this.componentDidMount();
    //     }
    //     // console.log(nextProps.match.params.id);
    //     // console.log(nextState.idProduct);
    // }


    componentDidMount() {

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

    changPrice(x) {
        return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        
    }
    
    

    render() {


        const item = this.state.arrayProduct.map((value, key) => {
            if(value._id == this.props.match.params.id) {
                return (
                    <div className="details" key={key}>
                        <div className="div-title-prddtl">
                            <h3 className="main-title-prddtl">{value.product_name}</h3>
                        </div>
                        <div className="details-container">
                            <div className="details-img col-lg-6 col-md-6 col-sm-6 col-6">
                                <img src={value.image} alt={value.product_name} />
                            </div>
                            <div className="details-content col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="details-content-container">
                                    <p>{value.description}</p>
                                    <span className="price">giá : <strong>{this.changPrice(value.base_price)}</strong></span>
                                    <div className="wrapper-inner-tab-backgrounds-second">
                                        <div className="sim-button">
                                            <span>tìm hiểu thêm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })

        return (
            <div className="content-for-prddtl">
                <div className="content-container">
                    {item}
                </div>

                <ul className="list-related">
                    <li className="lists-item col-lg-4 col-md-4 col-sm-4 col-4">
                        <div className="div-img-prddtl">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRATHACHVAI.png" alt="none" />
                        </div>
                        <div className="lists-content">
                            <h3>
                                <a href="#">trà thạch vải</a>
                            </h3>
                            <span>Giá: <strong>35.000 Đ</strong></span>
                        </div>
                    </li>
                    <li className="lists-item col-lg-4 col-md-4 col-sm-4 col-4">
                        <div className="div-img-prddtl">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRATHACHDAO.png" alt="none" />
                        </div>
                        <div className="lists-content">
                            <h3>
                                <a href="#">trà thạch đào</a>
                            </h3>
                            <span>Giá: <strong>35.000 Đ</strong></span>
                        </div>
                    </li>
                    <li className="lists-item col-lg-4 col-md-4 col-sm-4 col-4">
                        <div className="div-img-prddtl">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRATHANHDAO.png" alt="none" />
                        </div>
                        <div className="lists-content">
                            <h3>
                                <a href="#">trà thanh đào</a>
                            </h3>
                            <span>Giá: <strong>35.000 Đ</strong></span>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }
}
