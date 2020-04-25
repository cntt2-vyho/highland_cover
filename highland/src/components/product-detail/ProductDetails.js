import React, { Component } from 'react';
import classes from './ProductDetails.css'
import { db } from '../../firebase/FirebaseConfig';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
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

        this.setState({
            idProduct: this.props.match.params.id,
            idCategory: this.props.match.params.idCategory
        })

        var object = [];
        db.collection('categories').doc(this.props.match.params.idCategory).collection('products').doc(this.props.match.params.id)
            .get()
            .then(function (doc) {
                if (doc.exists) {
                    object.push(doc.data())
                } else {
                    console.log("No such document!");
                }
            })
            .catch(function (error) {
                console.log("Error getting document:", error);
            });
        this.setState({
            products: object
        })


    }
    
    

    render() {
        // console.log('------------------------------------------------');
        // console.log('category slug : ', this.props.match.params.slugCategory);
        // console.log('category id : ', this.props.match.params.idCategory);
        // console.log('product id : ', this.props.match.params.id);
        // console.log('product slug : ', this.props.match.params.slug);

        // console.log('productdetail, category : ',this.state.products);
        console.log('------------------------------------------------');
        console.log('state products : ', this.state.products);

        const item = this.state.products.map((value, key) => {
            console.log('------------------------------------------------');
            console.log(value.product_name);
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
                                <div className="div-size">
                                    <span>size:</span>
                                    <ul>
                                        <li className="size-item">
                                            <a href="#">S</a>
                                        </li>
                                        <li className="size-item">
                                            <a href="#">M</a>
                                        </li>
                                        <li className="size-item">
                                            <a href="#">L</a>
                                        </li>
                                    </ul>
                                </div>
                                <span className="price">giá : <strong>55.000 Đ</strong></span>
                                <div className="wrapper-inner-tab-backgrounds-second">
                                    <div className="sim-button">
                                        <span>mua ngay</span>
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
