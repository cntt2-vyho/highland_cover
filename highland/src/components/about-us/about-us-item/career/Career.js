import React, { Component } from 'react';
import classes from './Career.css';
import { NavLink } from 'react-router-dom';

export default class Carrer extends Component {
  render() {
    return (
      <div className="content-career">
                <div className="div-img-career">
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/About_Customer_service_2.jpg" alt="" />
                </div>
                <div className="div-content-career">
                    <div className="div-content-container-career">
                        <div className="div-content-container-main-career col-lg-8">
                            <div className="div-content-container-main-container-career">
                                <h1>nghề nghiệp</h1>
                                <p>
                                    <b>
                                    Hãy khởi đầu sự nghiệp cùng với Highlands Coffee®
            </b>
                                </p>
                                <p>
                                Với sứ mệnh trở thành thương hiệu cà phê Việt Nam dẫn đầu, Highlands Coffee® luôn tìm kiếm những ứng cử viên tiềm năng có chung niềm đam mê và nỗ lực cùng chúng tôi vươn tới thành công. Chúng tôi luôn chào đón các bạn gia nhập vào đội ngũ chuyên nghiệp của đại gia đình Highlands Coffee®.</p>
                                <p>
                                Chi tiết các vị trí ứng tuyển:
                                </p>
                                <p>
                                    <a href="https://vticareers.talentnetwork.vn/tim-viec-lam/phong-ban-highlands-coffee.829/vi">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/talent-highlands.png" alt />
                                    </a>
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
                                    <NavLink to="/about/customer-service">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/thumbs/370_crop_About_Customer_service_2.jpg" />
                                    </NavLink>
                                    <NavLink to="/about/customer-service">
                                        <span>dịch vụ khách hàng</span>
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
