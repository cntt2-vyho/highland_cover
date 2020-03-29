import React, { Component } from 'react';
import classes from './ProductDetails.css'

export default class ProductDetails extends Component {
    render() {
        return (
            <div className="content-for-prddtl">
                <div className="content-container">
                    <div className="details">
                        <div className="div-title-prddtl">
                            <h3 className="main-title-prddtl">Trà Sen Vàng</h3>
                        </div>
                        <div className="details-container">
                            <div className="details-img col-lg-6 col-md-6 col-sm-6 col-6">
                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png" />
                            </div>
                            <div className="details-content col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="details-content-container">
                                    <p>Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.</p>
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
