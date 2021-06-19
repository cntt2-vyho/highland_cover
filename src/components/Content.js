import React, { Component } from 'react';
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
        
        return (
            <div className="content">
                <div className="section1-content">
                    <Slider {...settings1}>
                        <div className="item">
                            <a href="https://highlandscoffee.com.vn/vn/highlands-coffee-dich-vu-giao-hang-mien-phi.html">
                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HL20_2000x639_1.png" alt="none" style={{ width: '100%' }} /></a>
                        </div>
                        <div className="item">
                            <a href="https://www.youtube.com/watch?v=MRxa1wTZEDs">
                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639.jpg" alt="none" style={{ width: '100%' }} /></a>
                        </div>
                        <div className="item">
                            <a href="https://www.highlandscoffee.com.vn/vn/highlands-coffee-20-nam-gan-ket-niem-tu-hao-dat-viet.html">
                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HL20_2000x639.jpg" alt="none" style={{ width: '100%' }} />
                            </a>
                        </div>
                        <div className="item item-position">
                            <a href="https://highlandscoffee.com.vn/tuhaodatviet/">
                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/VIET.Brand_Campaign_WEBBANNER.jpg" alt="none" style={{ width: '100%' }} />
                            </a>
                            <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html" className="cnth">cùng nhau tự hào</a>
                        </div>
                    </Slider>

                </div>
                <div className="section2-content">
                    <div className="img">
                        <a href="https://www.highlandscoffee.com.vn/vn/freeze.html">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Product_banner_confirmed.jpg" style={{ width: '100%' }} alt="none" />
                        </a>
                    </div>
                    <div className="caption">
                        <a href="https://www.highlandscoffee.com.vn/vn/freeze.html" id="kpt" >khám phá thêm</a>
                    </div>
                </div>


                <div className="section3-content">
                    <div className="img">
                        <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639_1.png" style={{ width: '100%' }} alt="none" />
                        </a>
                    </div>
                    <div className="caption" style={{ top: '80%', left: '60%' }}>
                        <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html" className="kpt-red">khám phá thêm</a>
                    </div>
                </div>

                

            </div>)
    }
}
