import React, { Component } from 'react';
import classes from './Header.css';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
  <div className="header-container">
    <div className="header-logo col-lg-3 col-md-3 col-sm-12 col-12">
      <a href="./home.html">
        <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt="Highland Coffee" />
      </a>
    </div>
    <div className="header-menu col-lg-9 col-md-9 col-sm-12 col-12">
      <div className="header-tool">
        <div className="header-tool-li-input">
          <input type="text" name id placeholder="Từ khóa" />
          <button>
            <i className="fa fa-search" aria-hidden="true" style={{color: '#000'}} />
          </button>
        </div>
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
        <NavLink className="dropdown-toggle" to="/order">
          <i className="fa fa-shopping-cart" />
          {/* Counter - Messages */}
          <span className="badge-danger">7</span>
        </NavLink>
        <div className="auth">
          <a href="#">
            đăng nhập
          </a>
        </div>
      </div>
      <ul className="menu-ul">
        <li className="menu-li">
          <a href="../cafe/cafe.html">quán cà phê</a>
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
                    <a href="#">phin sữa <br /> đá đậm đà <br /> chất phim</a>
                  </h3>
                  <a href="#">
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/z1.jpg" alt="phin sữa đá đậm đà chất phim 29k" />
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
                <div className="news-container">
                  <h3 className="title" id="phin_sua_da">
                    <a href="#">tự hào sinh <br /> ra từ đất <br /> Việt, 1999!</a>
                  </h3>
                  <a href="#">
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Thumbnail.jpg" alt="phin sữa đá đậm đà chất phim 29k" />
                  </a>
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
                        <a href="#" style={{color: '#fff', textTransform: 'capitalize'}}>đương
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
                        <a href="#" style={{color: '#fff', textTransform: 'capitalize'}}>lớp học
                          cho em</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="hover-item-news col-lg-3">
                <div className="news-container">
                  <h3 className="title" id="phin_sua_da">
                    <a href="#">đương đại <br /> hóa tranh <br /> đông hồ</a>
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
              <div className="hover-item-news col-lg-3">
                <div className="news-container" style={{float: 'left'}}>
                  <h3 className="title" id="phin_sua_da">
                    <a href="#">thương <br /> hiệu bắt <br />nguồn từ <br /> cà phê Việt</a>
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
      </ul>
    </div>
  </div>
</header>

    )
  }
}
