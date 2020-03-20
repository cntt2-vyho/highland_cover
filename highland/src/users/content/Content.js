import React, { Component } from 'react';
import classes from './Content.css';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="section1">
                    <div id="owl-demo" className="owl-carousel owl-theme">
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
                    </div>
                </div>
                
            </div>

        )
    }
}
export default Content;