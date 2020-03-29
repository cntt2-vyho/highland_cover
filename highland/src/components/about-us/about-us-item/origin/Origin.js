import React, { Component } from 'react';
import classes from './Origin.css';
import { NavLink } from 'react-router-dom';

export default class Origin extends Component {
    render() {
        return (
            <div className="content-origin">
                <div className="div-img-origin">
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-ORIGIN.png" alt="none" />
                </div>
                <div className="div-content-origin">
                    <div className="div-content-container-origin">
                        <div className="div-content-container-main col-lg-8">
                            <div className="div-content-container-main-container">
                                <h1>khởi nguồn</h1>
                                <p>
                                    <b>
                                        Thương hiệu bắt nguồn từ cà phê Việt Nam
            </b>
                                </p>
                                <p>
                                    Từ tình yêu với Việt Nam và niềm đam mê cà phê, năm 1999, thương hiệu Highlands Coffee® ra đời với khát vọng
                                    nâng tầm di sản cà phê lâu đời của Việt Nam và lan rộng tinh thần tự hào, kết nối hài hoà giữa truyền thống
            với hiện đại.</p>
                                <p>
                                    Bắt đầu với sản phẩm cà phê đóng gói tại Hà Nội vào năm 2000, chúng tôi đã nhanh chóng phát triển và mở rộng
                                    thành thương hiệu quán cà phê nổi tiếng và không ngừng mở rộng hoạt động trong và ngoài nước từ năm 2002.
          </p>
                                <p>
                                    Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong
                                    không gian thoải mái và lịch sự. Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc
                                    mà còn mang trên mình một sứ mệnh văn hóa phản ánh một phần nếp sống hiện đại của người Việt Nam.
          </p>
                                <p>
                                    Đến nay, Highlands Coffee® vẫn duy trì khâu phân loại cà phê bằng tay để chọn ra từng hạt cà phê chất lượng
                                    nhất, rang mới mỗi ngày và phục vụ quý khách với nụ cười rạng rỡ trên môi. Bí quyết thành công của chúng tôi
                                    là đây: không gian quán tuyệt vời, sản phẩm tuyệt hảo và dịch vụ chu đáo với mức giá phù hợp.
          </p>
                            </div>
                        </div>
                        <div className="div-content-container-related col-lg-4">
                            <ul>
                                <li>
                                    <NavLink to="/about/customer-service">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/thumbs/370_crop_About_Customer_service_2.jpg" />
                                    </NavLink>
                                    <NavLink to="/about/customer-service">
                                        <span>dịch vụ khách hàng</span>
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
