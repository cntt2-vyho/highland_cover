import React, { Component } from 'react';
import classes from './Header.css';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import { db } from '../../firebase/FirebaseConfig';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayCategory: [],
            arrayProducts: []
        }
    }
    componentDidMount() {
        var list1 = [];
        db.collection("categories").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log();

                    list1.push(doc.data());

                });

            });

        this.setState({
            arrayCategory: list1
        })

        var list = [];

        var query = db.collection('categories');
        query.get().then((querySnapshot) => {
            querySnapshot.forEach((document) => {
                document.ref.collection('products').get().then((querySnapshot) => {

                    querySnapshot.forEach(function (doc) {
                        list.push(doc.data());
                    })

                    this.setState({
                        arrayProducts: list
                    })

                });
            });
        });
            
    }

    getData() {

    }


    render() {

        

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
        };
      
        //var database = db.collection('categories').doc();

        const item = this.state.arrayCategory.map((value, key) => {
            return (
                    <li className="hover-item  hover-item-test col-lg-2 " key = {key}>
                    <NavLink  to={`/menu/${value.slug}/${value.category_id}.html`} className="title">
                        {value.category_name}
                        </NavLink>
                    <button className="none-for-dropdown1">
                        <i className="fa fa-chevron-right fa-right" aria-hidden="true"></i>
                        <i className="fa fa-chevron-down fa-down" aria-hidden="true"></i>
                    </button>
                    <ul className="hidden-small-active">
                        {
                        this.state.arrayProducts.map((values, key) => {
                            if(values.product_category_id==value.category_id) {
                                return (
                                    <li className="small-item" key={key}>
                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                        <NavLink  to={`/menu/${value.slug}/${value.category_id}/${values.slug}/${values._id}.html`} >{values.product_name}</NavLink>
                                        
                                    </li>
                                )
                            }
                        })
                        }
                    </ul>
                </li>
            )
            
        })
        
        return (
            <header id="header">

                <div className="header-container">
                    <div className="header-logo col-lg-2 col-md-2 col-sm-2 col-2">
                        <NavLink to="/">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt="Highland Coffee" />
                        </NavLink>
                    </div>
                    <div className="header-menu col-lg-10 col-md-10 col-sm-10 col-10">
                        <div className="header-tool">

                            <div className="header-tool-language">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-vn.jpg" alt="none" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-en.jpg" alt="none"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="test-user">
                                <ul className="div-for-header-user">
                                <div className="header-avatar">
                                    <img src="https://cf.shopee.vn/file/2a6502c770fe88648ab97c319317bdff_tn" alt="none" />

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

                        </div>
                        <div className="menu-li-resp">
                            {/* <span>Menu</span> */}
                            </div>
                        <div className="header-menu-small">
                            <button className="btnX">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            
                            <ul className="menu-ul">
                            
                            <li className="menu-li">
                                <NavLink to="/cafe" className="menu-li-a">quán cà phê</NavLink>
                            </li>
                            <li className="menu-li li-menu-dr">
                                    <button className="none-for-dropdown">
                                    <i className="fa fa-chevron-right fa-right" aria-hidden="true"></i>
                                    <i className="fa fa-chevron-down fa-down" aria-hidden="true"></i>

                                    </button>
                                <NavLink to="/menu" className="menu-li-a">thực đơn
                                
                                </NavLink>
                                <div className="menu-li-content hien-ra-di">
                                    <ul className="menu-li-content-ul">
                                        <Slider {...settings}>
                                            {item}
                                        </Slider>
                                        
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-li li-menu-dr">
                            <button className="none-for-dropdown">
                                    <i className="fa fa-chevron-right fa-right" aria-hidden="true"></i>
                                    <i className="fa fa-chevron-down fa-down" aria-hidden="true"></i>

                                    </button>
                                <NavLink to="/news" className="menu-li-a">tin tức</NavLink>
                                <div className="menu-li-content hien-ra-di">
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
                                        <div className="hover-item-news col-lg-6 tu-hao-sinh-ra-hidden">
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
                            <li className="menu-li li-menu-dr">
                            <button className="none-for-dropdown">
                                    <i className="fa fa-chevron-right fa-right" aria-hidden="true"></i>
                                    <i className="fa fa-chevron-down fa-down" aria-hidden="true"></i>

                                    </button>
                                <NavLink to="/responsibility" className="menu-li-a">trách nhiệm cộng đồng</NavLink>
                                <div className="menu-li-content hien-ra-di">
                                    <div className="hover-div-containers">
                                        <div className="hover-item-news col-lg-9">
                                            <ul>
                                                <li className="news-hover-li news-hover-li-test col-lg-4">
                                                    <a href="https://www.highlandscoffee.com.vn/vn/tin-tuc-su-kien.html">giá
                      trị văn hóa việt</a>
                      <button className="none-for-dropdown1">
                                    <i className="fa fa-chevron-right fa-right" aria-hidden="true"></i>
                                    <i className="fa fa-chevron-down fa-down" aria-hidden="true"></i>

                                    </button>
                                                    <ul className="tncd-small-ul">
                                                        <li className="tncd-small-li">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            <a href="#">đương
                          đại hóa trang đông hồ</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="news-hover-li news-hover-li-test col-lg-4">
                                                    <a href="https://www.highlandscoffee.com.vn/vn/tin-khuyen-mai.html">cộng
                      đồng</a>
                      <button className="none-for-dropdown1">
                                    <i className="fa fa-chevron-right fa-right" aria-hidden="true"></i>
                                    <i className="fa fa-chevron-down fa-down" aria-hidden="true"></i>

                                    </button>
                                                    <ul className="tncd-small-ul">
                                                        <li className="tncd-small-li">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            <a href="#">lớp học
                          cho em</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="hover-item-news col-lg-2  tu-hao-sinh-ra-hidden" style={{ float: 'right' }}>
                                            <div className="news-container">
                                                <h3 className="title-for-tncd">
                                                    <a href="#">đương đại hóa tranh đông hồ</a>
                                                </h3>
                                                <a href="#">
                                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/KV_Highlands_CSR_1.jpg" alt="none"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-li li-menu-dr">
                            <button className="none-for-dropdown">
                                    <i className="fa fa-chevron-right fa-right" aria-hidden="true"></i>
                                    <i className="fa fa-chevron-down fa-down" aria-hidden="true"></i>

                                    </button>
                                <NavLink to="/about" className="menu-li-a">về chúng tôi</NavLink>
                                <div className="menu-li-content hien-ra-di">
                                    <div className="hover-div-containers">
                                        <div className="hover-item-news col-lg-9">
                                            <ul>
                                                <li className="news-hover-li col-lg-4">
                                                <NavLink to="/about/origin">
                                                    khởi nguồn
                                                </NavLink>
                                                </li>
                                                <li className="news-hover-li col-lg-4">
                                                <NavLink to="/about/customer-service">dịch vụ khách hàng</NavLink>
                                                </li>
                                                <li className="news-hover-li col-lg-4">
                                                    <NavLink to="/about/career">nghề nghiệp
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="hover-item-news col-lg-2 tu-hao-sinh-ra-hidden" style={{ float: 'right' }}>
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
                                <NavLink to="/contact" className="menu-li-a">liên hệ</NavLink>
                            </li>
                            <li className="menu-li menu-li-search-display-none">
                                <a className="menu-li-a">
                                    <i className="fa fa-search f-search" aria-hidden="true"></i>
                                </a>
                                    
                                <div className="menu-li-content" style={{backgroundColor: 'transparent'}}>
                                    <div className="header-tool-li-input">
                                        <input type="text" placeholder="Từ khóa" />
                                        <button>
                                            <i className="fa fa-search" aria-hidden="true" style={{ color: '#000' }} />
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-li menu-li-search-hidden" style={{padding: '15px', background: '#ccc'}}>
                                <div className="input-hidden-container" style={{position: 'relative'}}>
                                <input placeholder="Từ khóa" className="input-hidden"/>
                                <NavLink to="/result" style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px'}} >
                                <i className="fa fa-search" aria-hidden="true"></i>
                                </NavLink>
                                </div>
                            </li>
                        </ul>

                        </div>
                    </div>
                </div>
            </header>

        )
    }
}
export default Header;