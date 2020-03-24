import React, { Component } from 'react';
import classes from './Header.css';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>

                <div className="header-container">
                    <div className="header-logo col-lg-2 col-md-2 col-sm-12 col-12">
                        <NavLink to="/">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt="Highland Coffee" />
                        </NavLink>
                    </div>
                    <div className="header-menu col-lg-10 col-md-10 col-sm-12 col-12">
                        <div className="header-tool">

                            <div className="header-tool-language">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-vn.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-en.jpg" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="test-user">
                                <ul className="div-for-header-user">
                                <div className="header-avatar">
                                    <img src="https://cf.shopee.vn/file/2a6502c770fe88648ab97c319317bdff_tn" alt />

                                </div>

                                <div className="header-username">
                                    <span>
                                        vyvyho111
                                </span>
                                </div>



                            </ul>
                            <div className="hover-user-header">
                                <NavLink className="hover-user-header-p1" to="/order">your orders</NavLink>
                                <span className="hover-user-header-p2">logout</span>
                                
                            </div>
                            </div>

                            
                            {/* <div className="auth">
                                <a href="#">
                                    đăng nhập</a>
                            </div> */}
                            {/* <div className="dropdown-toggle">
                                <NavLink to="/order">
                                    <i className="fa fa-shopping-cart" />
                                    <span className="badge-danger">7</span>
                                </NavLink>
                                <div className="dropdown-click-menu-for-cart">
                                    <ul>
                                        <li>
                                            <div className="div-img-dropclickmenu">
                                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_GTF.png" />

                                            </div>
                                            <div className="div-content-dropclickmenu">
                                                <p>
                                                    freeze trà xanh
                                                </p>
                                                <p>
                                                    35. 000 Đ
                                                </p>

                                            </div>
                                            <div className="div-count-dropclickmenu">
                                                <div>1</div>

                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div> */}

                        </div>
                        <ul className="menu-ul">
                            <li className="menu-li">
                                <NavLink to="/cafe">quán cà phê</NavLink>
                            </li>
                            <li className="menu-li">
                                <NavLink to="/menu">thực đơn</NavLink>
                                <div className="menu-li-content">
                                    <ul className="menu-li-content-ul">
                                        <li className="cafe hover-item col-lg-2">
                                            <h3 className="title">
                                                <a href="#">cà phê</a>
                                            </h3>
                                            <ul>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">cà phê phin</a>
                                                </li>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">cà phê espresso</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="freeze  hover-item col-lg-2">
                                            <h3 className="title">
                                                <a href="#">freeze</a>
                                            </h3>
                                            <ul>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">freeze cà phê phin</a>
                                                </li>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">freeze không cà phê</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="tea hover-item col-lg-2">
                                            <h3 className="title">
                                                <a href="#">trà</a>
                                            </h3>
                                            <ul>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">trà sen vàng</a>
                                                </li>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">trà thạch đào</a>
                                                </li>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">trà thanh đào</a>
                                                </li>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">trà thạch vải</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="bread  hover-item col-lg-2">
                                            <h3 className="title">
                                                <a href="#">bánh mì</a>
                                            </h3>
                                            <ul>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">thịt nướng</a>
                                                </li>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">xíu mại</a>
                                                </li>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">chả lụa xá xíu</a>
                                                </li>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">gà xé nước tương</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="other hover-item col-lg-2">
                                            <h3 className="title">
                                                <a href="#">khác</a>
                                            </h3>
                                            <ul>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">bánh ngọt</a>
                                                </li>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">merchandise</a>
                                                </li>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">cà phê đóng gói</a>
                                                </li>
                                                <li className="small-item">
                                                    <i className="fa fa-caret-right" aria-hidden="true" />
                                                    <a href="#">thực đơn giao hàng</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="div hover-item phin col-lg-2">
                                            <div className="phin-container">
                                                <h3 className="title" id="phin_sua_da">
                                                    <a href="#">phin sữa  đá đậm đà chất phim! 29. 000 &#8363;</a>
                                                </h3>
                                                <a href="#">
                                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/z1.jpg" id="phin-sua-da-img" alt="phin sữa đá đậm đà chất phim 29k" />
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-li">
                                <NavLink to="/news">tin tức</NavLink>
                                <div className="menu-li-content">
                                    <div className="hover-div-containers">
                                        <div className="hover-item-news col-lg-6">
                                            <ul className="menu-li-content-ul">
                                                <li className="news-hover-li col-lg-6">
                                                    <a href="https://www.highlandscoffee.com.vn/vn/tin-tuc-su-kien.html">tin
                      tức sự kiện</a>
                                                </li>
                                                <li className="news-hover-li col-lg-6">
                                                    <a href="https://www.highlandscoffee.com.vn/vn/tin-khuyen-mai.html">tin
                      khuyến mãi</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="hover-item-news col-lg-6">
                                            <div className="container-for-tuhaodatviet-img col-lg-4">
                                                <div className="news-container">
                                                    <h3 className="phin-sua-da">
                                                        <a href="#">tự hào sinh ra từ đất Việt, 1999!</a>
                                                    </h3>
                                                    <a href="#">
                                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Thumbnail.jpg" alt="phin sữa đá đậm đà chất phim 29k" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-li">
                                <NavLink to="/responsibility">trách nhiệm cộng đồng</NavLink>
                                <div className="menu-li-content">
                                    <div className="hover-div-containers">
                                        <div className="hover-item-news col-lg-9">
                                            <ul>
                                                <li className="news-hover-li col-lg-4">
                                                    <a href="https://www.highlandscoffee.com.vn/vn/tin-tuc-su-kien.html">giá
                      trị văn hóa việt</a>
                                                    <ul className="tncd-small-ul">
                                                        <li className="tncd-small-li">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            <a href="#" style={{ color: '#fff', textTransform: 'capitalize' }}>đương
                          đại hóa trang đông hồ</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="news-hover-li col-lg-4">
                                                    <a href="https://www.highlandscoffee.com.vn/vn/tin-khuyen-mai.html">cộng
                      đồng</a>
                                                    <ul className="tncd-small-ul">
                                                        <li className="tncd-small-li">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            <a href="#" style={{ color: '#fff', textTransform: 'capitalize' }}>lớp học
                          cho em</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="hover-item-news col-lg-2" style={{ float: 'right' }}>
                                            <div className="news-container">
                                                <h3 className="title-for-tncd">
                                                    <a href="#">đương đại hóa tranh đông hồ</a>
                                                </h3>
                                                <a href="#">
                                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/KV_Highlands_CSR_1.jpg" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-li">
                                <NavLink to="/about">về chúng tôi</NavLink>
                                <div className="menu-li-content">
                                    <div className="hover-div-containers">
                                        <div className="hover-item-news col-lg-9">
                                            <ul>
                                                <li className="news-hover-li col-lg-4">
                                                    <a href="https://www.highlandscoffee.com.vn/vn/tin-tuc-su-kien.html">khởi
                      nguồn</a>
                                                </li>
                                                <li className="news-hover-li col-lg-4">
                                                    <a href="https://www.highlandscoffee.com.vn/vn/tin-khuyen-mai.html">dịch
                      vụ khách hàng</a>
                                                </li>
                                                <li className="news-hover-li col-lg-4">
                                                    <a href="https://www.highlandscoffee.com.vn/vn/nghe-nghiep.html">nghề
                      nghiệp</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="hover-item-news col-lg-2" style={{ float: 'right' }}>
                                            <div className="news-container container-for-abu" style={{ float: 'right' }}>
                                                <h3 className="title-for-abu">
                                                    <a href="#">thương hiệu bắt nguồn từ cà phê Việt!</a>
                                                </h3>
                                                <a href="#">
                                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/ABOUT-ORIGIN.png" alt="phin sữa đá đậm đà chất phim 29k" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-li">
                                <NavLink to="/contact">liên hệ</NavLink>
                            </li>
                            <li className="menu-li menu-li-search">
                                <span>
                                    <i class="fa fa-search f-search" aria-hidden="true"></i>
                                </span>
                                <div className="menu-li-content-search">
                                    <div className="header-tool-li-input">
                                        <input type="text" name id placeholder="Từ khóa" />
                                        <button>
                                            <i className="fa fa-search" aria-hidden="true" style={{ color: '#000' }} />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

        )
    }
}
