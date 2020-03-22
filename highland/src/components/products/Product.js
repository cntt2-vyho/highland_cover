import React, { Component } from 'react';
import classes from './Product.css';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

export default class Product extends Component {
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


        return (
            <div className="content">
                <div className="main">
                    <h2 className="main-title">
                        trà
    </h2>
                    <div className="container">
                        <div className="main-tain col-lg-8 col-md-12 col-sm-12 col-12">
                            <a href="#">
                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA-inside.jpg" alt="" />
                            </a>
                            <p>Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở
          vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.</p>
                            <a href="../trasenvang/ProductDetails.html" className="xemsanpham">xem sản phẩm</a>
                        </div>
                        <div className="vertical-list col-lg-4 col-md-12 col-sm-12 col-12">
                            <ul>
                                <li>
                                    <div className="li-img">
                                        <a href="#">
                                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRASENVANG.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="li-detail">
                                        <h3>
                                            <a href="#">trà sen vàng</a>
                                        </h3>
                                        <p>Thức uống chinh phục những thực khách khó tính!
                Sự kết hợp độc đáo giữa trà Ô long,</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="li-img">
                                        <a href="#">
                                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRATHACHDAO.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="li-detail">
                                        <h3>
                                            <a href="#">trà thạch đào</a>
                                        </h3>
                                        <p>Vị trà đậm đà kết hợp cùng những miếng đào thơm ngon mọng nước cùng thạch đào</p>
                                    </div>
                                </li>
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
