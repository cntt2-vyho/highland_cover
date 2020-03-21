import React, { Component } from 'react';
import classes from './CustomerService.css';
import { NavLink } from 'react-router-dom';

export default class CustomerService extends Component {
    render() {
        return (
            <div className="content-service">
                <div className="div-img-service">
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/About_Customer_service_2.jpg" alt="" />
                </div>
                <div className="div-content-service">
                    <div className="div-content-container-service">
                        <div className="div-content-container-main-service col-lg-8">
                            <div className="div-content-container-main-container-service">
                                <h1>dịch vụ khách hàng</h1>
                                <p>
                                    <b>
                                        Hãy chia sẻ với chúng tôi:
            </b>
                                </p>
                                <p>
                                    Chúng tôi mong muốn mang đến cho bạn những trải nghiệm đáng nhớ mỗi lần đến Highlands Coffee®. Hãy góp ý cho chúng tôi để chúng tôi có thể mang đến cho bạn những trải nghiệm tuyệt vời hơn thế.</p>
                                <p>
                                    <b>
                                        Chăm sóc khách hàng:
                                    </b>
                                </p>
                                <p>
                                    Chúng tôi có mặt trên mạng xã hội Facebook, vì vậy hãy chia sẻ với chúng tôi tại: <a href="https://www.facebook.com/highlandscoffeevietnam/" className="service-link">https://www.facebook.com/highlandscoffeevietnam/</a> hoặc bạn có thể gửi email cho chúng tôi theo địa chỉ: <a href="customerservice@highlandscoffee.com.vn" className="service-link">customerservice@highlandscoffee.com.vn</a>, chúng tôi sẽ trả lời bạn trong thời gian sớm nhất có thể.
          </p>
                            </div>
                        </div>
                        <div className="div-content-container-related col-lg-4">
                            <ul>
                                <li>
                                    <NavLink to="/about/origin">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-ORIGIN.png" />
                                    </NavLink>
                                    <NavLink to="/about/origin">
                                        <span>khởi nguồn</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about/career">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/thumbs/370_crop_ABOUT-CAREER3.jpg" />
                                    </NavLink>
                                    <NavLink to="/about/career">
                                        <span>nghề nghiệp</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
