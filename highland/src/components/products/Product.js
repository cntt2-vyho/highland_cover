import React, { Component } from 'react';
import classes from './Product.css';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

import { db } from '../../firebase/FirebaseConfig';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],

            arrayProducts: [],


            id: '',
            name: '',
            image: '',
            des: '',
            slug: '',
            matchId: ''

        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.match.params.id !== nextState.matchId) {
            this.componentDidMount();
        }
        // console.log('---------------------------');
        // console.log(nextProps.match.params.id);
        // console.log(nextState.matchId);
    }


    componentDidMount() {
        this.setState({
            matchId: this.props.match.params.id
        })


        var list1 = [];
        db.collection("categories").doc(this.props.match.params.id).get()
            .then(function (doc) {
                list1.push(doc.data());
            })
            .catch(function (error) {
                console.log("Error getting document:", error);
            });

        this.setState({
            category: list1
        })


        var list = [];
        db.collection('categories').doc(this.props.match.params.id).collection('products').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    list.push(doc.data());
                    this.setState({
                        arrayProducts: list
                    })
                });
            });
    }

    limitText = (text, maxLength) => {
        if (text.length > maxLength) {
            text = text.substr(0, maxLength) + '...';
        }
        return text;
    }


    render() {
        const settings3 = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true
        };

        // console.log(this.props.match.params.slug);

        const products = this.state.arrayProducts.map((value, key) => {
            return (
                <li key={key}>
                    <div className="li-img">
                        <NavLink to={`/menu/${this.props.match.params.slug}/${value.product_category_id}/${value.slug}/${value._id}.html`} >
                            <img src={value.image} alt={value.product_name} />
                        </NavLink>
                    </div>
                    <div className="li-detail">
                        <h3>
                            <NavLink to={`/menu/${this.props.match.params.slug}/${value.product_category_id}/${value.slug}/${value._id}.html`} >{value.product_name}</NavLink>
                        </h3>
                        <p>{this.limitText(value.description, 100)}</p>
                    </div>
                </li>
            )
        })

        const category = this.state.category.map((value, key) => {
            return (
                <div className="main-tain col-lg-8 col-md-12 col-sm-12 col-12" key={key}>
                    <h2 className="main-title">{value.category_name}</h2>
                    <a href="#">
                        <img src={value.image} alt={value.category_name} />
                    </a>
                    <p>{value.description}</p>
                    <a href="../trasenvang/ProductDetails.html" className="xemsanpham">xem sản phẩm</a>
                </div>
            )
        })

        return (
            <div className="content">
                <div className="main">

                    <div className="container-prd">
                        {category}
                        <div className="vertical-list col-lg-4 col-md-12 col-sm-12 col-12">
                            <ul>
                                {products}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="slick-product">
                    <Slider {...settings3}>
                        <div className="prd-item">
                            <div className="prd-div-img">
                                <NavLink to="/menu/products">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD_3.png" />
                                </NavLink>
                            </div>
                            <h2>
                                <a href="#">cà phê</a>
                            </h2>
                            <p>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang...</p>
                        </div>
                        <div className="prd-item">
                            <div className="prd-div-img">
                                <NavLink to="/menu/products">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-FREEZE_1.png" alt="Owl Image" />
                                </NavLink>
                            </div>
                            <h2><a href="#">freeze</a></h2>
                            <p>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang...</p>
                        </div>
                        <div className="prd-item">
                            <div className="prd-div-img">
                                <NavLink to="/menu/products">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/banh-mi-thit-nuong-vn.png" />
                                </NavLink>
                            </div>
                            <h2>
                                <a href="#">bánh mì</a>
                            </h2>
                            <p>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang...</p>
                        </div>
                        <div className="prd-item">
                            <div className="prd-div-img">
                                <NavLink to="/menu/products">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/06_2018/menu-OTHERS-3.jpg" />
                                </NavLink>
                            </div>
                            <h2>
                                <a href="#">khác</a>
                            </h2>
                            <p>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang...</p>
                        </div>
                    </Slider>
                </div>
            </div>

        )
    }
}
export default Product;