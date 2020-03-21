import React, { Component } from 'react';
import classes from './Content.css';
import Slider from "react-slick";

export default class Content extends Component {
    render() {
        const settings1 = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const settings2 = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };


        return (
            <div className="content">
                <div className="section1-content">
                    <Slider {...settings1}>
                        <div className="item">
                            <a href="https://www.youtube.com/watch?v=MRxa1wTZEDs">
                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639.jpg" alt="" style={{ width: '100%' }} /></a>
                        </div>
                        <div className="item">
                            <a href="https://www.highlandscoffee.com.vn/vn/highlands-coffee-20-nam-gan-ket-niem-tu-hao-dat-viet.html">
                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HL20_2000x639.jpg" alt="" style={{ width: '100%' }} />
                            </a>
                        </div>
                        <div className="item item-position">
                            <a href="https://highlandscoffee.com.vn/tuhaodatviet/">
                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/VIET.Brand_Campaign_WEBBANNER.jpg" alt="" style={{ width: '100%' }} />
                            </a>
                            <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html" className="cnth" target="_blank">cùng nhau tự hào</a>
                        </div>
                    </Slider>

                </div>
                <div className="section2-content">
                    <div className="img">
                        <a href="https://www.highlandscoffee.com.vn/vn/freeze.html">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Product_banner_confirmed.jpg" style={{ width: '100%' }} />
                        </a>
                    </div>
                    <div className="caption">
                        <a href="https://www.highlandscoffee.com.vn/vn/freeze.html" id="kpt" target="_blank">khám phá thêm</a>
                    </div>
                </div>


                <div className="section3-content">
                    <div className="img">
                        <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639_1.png" style={{ width: '100%' }} />
                        </a>
                    </div>
                    <div className="caption" style={{ top: '80%', left: '60%' }}>
                        <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html" className="kpt-red" target="_blank">khám phá thêm</a>
                    </div>
                </div>

                <div className="section4-content">
                    <div className="newstore col-lg-6 col-md-12 col-sm-12 col-12" style={{ float: 'left', padding: '0 ' }}>
                        <div className="okla">

                            <div className="okla-container">
                                <h1>quán mới</h1>
                                <div className="okla-container-small">
                                    <Slider {...settings2}>
                                        <div className="item">
                                            <h3>hàm cá mập</h3>
                                            <p>tầng 3, 1-3-5 đinh tiên hoàng, phường hàng trống, quận hoàn kiếm, hà nội</p>
                                            <a href="https://www.highlandscoffee.com.vn/vn/he-thong-cua-hang.html/?curID=41" style={{ position: 'relative' }}>
                                                <span className="find"><i className="fa fa-angle-right" aria-hidden="true" /> tìm đường </span>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <h3>sân bay quốc tế đà nẵng</h3>
                                            <p>khu vực check in ga quốc tế, sân bay đà nẵng, 62 trần quốc toản, quận hải châu, tp. đà nẵng</p>
                                            <a href="https://www.highlandscoffee.com.vn/vn/he-thong-cua-hang.html/?curID=6"
                                                style={{ position: 'relative' }}><i className="fa fa-angle-right" aria-hidden="true"></i>
                                                <span className="find"> tìm đường </span>
                                            </a>

                                        </div>
                                        <div className="item">
                                            <h3>721 huỳnh tấn phát</h3>
                                            <p>721 huỳnh tấn phát, phường phú nhuận, quận 7, tp. hồ chí minh</p>
                                            <a href="https://www.highlandscoffee.com.vn/vn/he-thong-cua-hang.html/?curID=237" style={{ position: 'relative' }}>
                                                <span className="find"><i className="fa fa-angle-right" aria-hidden="true" />tìm đường</span>
                                            </a>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="news col-lg-6 col-md-12 col-sm-12 col-12" style={{ float: 'right', padding: '0' }}>
                        <div className="news-content">
                            <div style={{ margin: '0 15%' ,padding: '32px 0px'}}>
                                <div className="title">
                                    <h2 className="title-h2">tin mới nhất</h2>
                                    <a href="https://www.highlandscoffee.com.vn/vn/tin-tuc.html" target="_blank">Xem toàn bộ</a>
                                </div>
                                <div className="listnews">
                                    <ul>
                                        <li>
                                            <div className="div-img col-lg-3 col-md-3 col-sm-3 col-3">
                                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/news/12_2019/tra-sen-vang-moi.png" />
                                            </div>
                                            <div className="div-content col-lg-9 col-md-9 col-sm-9 col-9">
                                                <h4>
                                                    <a href="https://www.highlandscoffee.com.vn/vn/uong-tra-sen-vang-moi-nhan-vo-van-uu-dai-sen-vang.html" className="test">
                                                        uống trà sen vàng mới - nhận vô vàn ưu đãi sen vàng</a>
                                                </h4>
                                                <div className="calendar">
                                                    <i className="fa fa-calendar icon-calendar" aria-hidden="true" />
                                                    <span>
                                                        04/12/2019</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="div-img col-lg-3 col-md-3 col-sm-3 col-3">
                                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/hco-7598-20-years-concert-web-470x314_1.jpg" />
                                            </div>
                                            <div className="div-content col-lg-9 col-md-9 col-sm-9 col-9">
                                                <h4>
                                                    <a href="https://www.highlandscoffee.com.vn/vn/dai-tiec-am-nhac-highlands-coffee-20-nam-gan-ket-niem-tu-hao-dat-viet.html" className="test">
                                                        đại tiệc âm nhạc - highland cofee 20 năm - gắn kết niềm tự hào đất
                                                        việt
          </a>
                                                </h4>
                                                <div className="calendar">
                                                    <i className="fa fa-calendar icon-calendar" aria-hidden="true" />
                                                    <span>
                                                        28/10/2019
          </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="div-img col-lg-3 col-md-3 col-sm-3 col-3">
                                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/HCO-7598-20-YEARS-NEWS-BANNER-NEWS-470X314.jpg" />
                                            </div>
                                            <div className="div-content col-lg-9 col-md-9 col-sm-9 col-9">
                                                <h4>
                                                    <a href="https://www.highlandscoffee.com.vn/vn/highlands-coffee-tron-ven-tuoi-20-cung-hanh-trinh-gan-ket-niem-tu-hao-dat-viet-.html" className="test">highland
            coffee: trọn vẹn tuổi 20 cùng hành trình gắn kết niềm tự hào</a>
                                                </h4>
                                                <div className="calendar">
                                                    <i className="fa fa-calendar icon-calendar" aria-hidden="true" />
                                                    <span>
                                                        22/10/2019
          </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="Nhập email của bạn để nhận thông tin..." className="input-Email" />
                                            <button type="submit" className="btn-Email">
                                                <span>
                                                    <i className="fa fa-paper-plane-o" aria-hidden="true" />
          gửi
        </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>)
    }
}
