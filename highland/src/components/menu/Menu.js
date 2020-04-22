import React, { Component } from 'react';
import classes from './Menu.css';
import { NavLink } from 'react-router-dom';


import { db } from '../../firebase/FirebaseConfig';


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayCategory: []
        }
    }
    componentDidMount() {
        var list = [];
        db.collection("categories").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    list.push(doc.data());
                    this.setState({
                        arrayCategory: list
                    })
                });
            });
    }

    render() {


        const item = this.state.arrayCategory.map((value, key) => {
            if (key % 2 == 0) {
                return (
                    <div className="section1">
                        <div className="section-container">

                            <div className="div-img1 col-lg-6 col-md-6 col-sm-12 col-12">
                                <img src={value.image} alt={value.category_name} />
                            </div>
                            <div className="content1 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="content-container1">
                                    <h1><a href="https://www.highlandscoffee.com.vn/vn/khoi-nguon.html" >{value.category_name}</a>
                                    </h1>
                                    <p>{value.description}</p>
                                    <NavLink to={`/menu/products/${value.slug}/${value.category_id}.html`} id="khamphathem1">
                                        khám phá thêm</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="section4">
                        {/* <a href={"/details/" +this.chuyenDoiURL(this.props.name) +"."+this.props.newsId+".html" }></a> 
                        <Route path="/details/:slug.:id.html" component={Details} />*/}
                        <div className="section-container">
                            <div className="div-img4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <img src={value.image} alt={value.category_name} />
                            </div>
                            <div className="content4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="content-container4">
                                    <h1><a href="https://www.highlandscoffee.com.vn/vn/freeze.html">{value.category_name}</a>
                                    </h1>
                                    <p>{value.description}</p>
                                    <NavLink to={`/menu/products/${value.slug}/${value.category_id}.html`} className="khamphathem4">
                                        khám phá thêm
          </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        return (
            <div className="content">
                {/* <div className="section1">
                    <div className="section-container">
                        
                        <div className="div-img1 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD_3.png" />
                        </div>
                        <div className="content1 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="content-container1">
                                <h1><a href="https://www.highlandscoffee.com.vn/vn/khoi-nguon.html" >cà phê</a>
                                </h1>
                                <p>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica thượng hạng được trồng trên những vùng cao
                                nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào
                                giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.</p>
                                <NavLink to="/menu/products" id="khamphathem1">
                                    khám phá thêm</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className="section-container">
                        <div className="div-img2 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-FREEZE_1.png" alt="none"/>
                        </div>
                        <div className="content2 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="content-container2">
                                <h1><a href="https://www.highlandscoffee.com.vn/vn/freeze.html">freeze</a>
                                </h1>
                                <p>Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế
                                từ những nguyên liệu thuần túy của Việt Nam.
          </p>
                                <NavLink to="/menu/products" id="khamphathem2">
                                    khám phá thêm
          </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section3">
                    <div className="section-container">
                    <div className="div-img3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png" />
                        </div>
                        <div className="content3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="content-container3">
                                <h1><a href="https://www.highlandscoffee.com.vn/vn/khoi-nguon.html">trà</a>
                                </h1>
                                <p>Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.
          </p>
                                <NavLink to="/menu/products" className="khamphathem3">
                                    khám phá thêm
          </NavLink>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="section4">
                    <div className="section-container">
                        <div className="div-img4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/banh-mi-thit-nuong-vn.png" alt="none" />
                        </div>
                        <div className="content4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="content-container4">
                                <h1><a href="https://www.highlandscoffee.com.vn/vn/freeze.html">bánh mì</a>
                                </h1>
                                <p>Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh mì ngon, giòn, nóng hổi tại Highlands Coffee. Một kết hợp hoàn hảo giữa lớp nhân chua, cay, mặn, ngọt quyện với lớp vỏ bánh mì giòn tan, mịn màng tạo ra tầng tầng lớp lớp dư vị cho thực khách.
          </p>
                                <NavLink to="/menu/products" className="khamphathem4">
                                    khám phá thêm
          </NavLink>
                            </div>
                        </div>
                    </div>
                </div> */}
                {item}
            </div>

        )
    }
}
