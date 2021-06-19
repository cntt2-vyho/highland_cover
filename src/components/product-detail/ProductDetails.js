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

        // var list = [];

        // var query = db.collection('data');
        // query.get().then((querySnapshot) => {
        //     querySnapshot.forEach((document) => {
        //         document.ref.collection('dishes').get().then((querySnapshot) => {

        //             querySnapshot.forEach(function (doc) {
        //                 list.push(doc.data());
        //             })

        //             this.setState({
        //                 arrayProduct: list
        //             })

        //         });
        //     });
        // });




        var ahihi=this;
        db.collection("data").doc(this.props.match.params.idCategory).collection('dishes').doc(this.props.match.params.id)
            .get()
            .then(function (doc) {
                ahihi.setState({
                    product: doc.data()
                })

            });
    }

    changPrice(x) {
        return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

    }



    render() {

        console.log('this.state.arrayProduct : ', this.state.arrayProduct);
        console.log('product : ', this.state.product);

        const item = this.state.arrayProduct.map((value, key) => {
            return (
                <div className="details" key={key}>
                    <div className="div-title-prddtl">
                        <h3 className="main-title-prddtl">{value.name}</h3>
                    </div>
                    <div className="details-container">
                        <div className="details-img col-lg-6 col-md-6 col-sm-6 col-6">
                            <img src={value.photos[1].value} alt={value.name} />
                        </div>
                        <div className="details-content col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="details-content-container">
                                <p>{value.description}</p>
                                <span className="price">giá : <strong>{this.changPrice(value.price.value)}</strong></span>
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
