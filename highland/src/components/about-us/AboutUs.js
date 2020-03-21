import React, { Component } from 'react';
import classes from './AboutUs.css'

export default class AboutUs extends Component {
    render() {
        return (
            <div className="content">
                    <div className="section-1-abu">
                        <div className="div-img-abu div-img-1-abu col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-ORIGIN.png" />
                            {/* <div className="background1-abu" /> */}
                        </div>
                        <div className="div-content-abu div-content-1-abu col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="div-content-container-abu div-content-container-1-abu">
                                <h1><a href="https://www.highlandscoffee.com.vn/vn/khoi-nguon.html" target="_blank">khởi nguồn</a>
                                </h1>
                                <h4>Thương hiệu bắt nguồn từ cà phê Việt Nam</h4>
                                <p>Highlands Coffee® được sinh ra từ niềm đam mê bất tận với hạt cà phê Việt Nam. Qua một chặng
                                đường dài,
                                chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong không gian
                                thoải mái và
                                lịch sự với mức giá hợp lý.
          <br /> Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc mà còn
          mang trên mình một sứ mệnh văn hóa phản ánh một phần nếp sống hiện đại của người Việt Nam.</p>
                                <button className="btn-abu btn-1-abu">
                                    xem chi tiết
        </button>
                            </div>
                        </div>
                    </div>
                    <div className="section-2-abu">
                        <div className="div-img-abu div-img-2-abu">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/About_Customer_service_2.jpg" />
                            {/* <div className="background2-abu" /> */}
                        </div>
                        <div className="div-content-abu div-content-2-abu">
                            <div className="div-content-container-abu div-content-container-2-abu">
                                <h1><a href="#">dịch vụ khách hàng</a></h1>
                                <h4>Chào mừng bạn đến với Highlands Coffee ®</h4>
                                <p>Chúng tôi mong muốn mang đến cho bạn những trải nghiệm đáng nhớ mỗi lần đến Highlands Coffee®.
                                Hãy chia sẻ với chúng tôi để chúng tôi có thể mang đến cho bạn những trải nghiệm tuyệt vời hơn
          thế.</p>
                                <button className="btn-abu btn-2-abu">
                                    xem chi tiết
        </button>
                            </div>
                        </div>
                    </div>
                    <div className="section-3-abu">
                        <div className="div-img-abu div-img-3-abu">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg" />
                            <div className="background3-abu" />
                        </div>
                        <div className="div-content-abu div-content-3-abu">
                            <div className="div-content-container-abu div-content-container-3-abu">
                                <h1><a href="#">nghề nghiệp</a></h1>
                                <h4>Hãy khởi đầu sự nghiệp cùng với Highlands Coffee®</h4>
                                <p>Với sứ mệnh trở thành thương hiệu cà phê Việt Nam dẫn đầu, Highlands Coffee® luôn tìm kiếm những ứng cử viên tiềm năng có chung niềm đam mê và nỗ lực cùng chúng tôi vươn tới thành công. Chúng tôi luôn chào đón các bạn gia nhập vào đội ngũ chuyên nghiệp của gia đình Highlands Coffee®.</p>
                                <button className="btn-abu btn-2-abu">
                                    xem chi tiết
        </button>
                            </div>
                        </div>
                    </div>


            </div>
        )
    }
}
