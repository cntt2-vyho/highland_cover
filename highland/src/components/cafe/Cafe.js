import React, { Component } from 'react';
import classes from './Cafe.css';

export default class Cafe extends Component {
    render() {
        return (
            <div className="content">
                <div className="cafe-container">
                    <h1 className="find-cafe">
                        tìm quán cà phê
  </h1>
                    <form className="div-content">
                        <div className="select-div col-lg-2 col-md-2 col-sm-4 col-12">
                            <i className="fa fa-caret-down" aria-hidden="true" />
                            <select name="country" id="country">
                                <option value>Việt Nam</option>
                            </select>
                        </div>
                        <div className="select-div col-lg-2 col-md-2 col-sm-4 col-12">
                            <i className="fa fa-caret-down" aria-hidden="true" />
                            <select name="city">
                                <option value>TP. Hồ Chí Minh</option>
                            </select>
                        </div>
                        <div className="select-div col-lg-2 col-md-2 col-sm-4 col-12">
                            <i className="fa fa-caret-down" aria-hidden="true" />
                            <select name="district">
                                <option value>Chọn quận/ huyện</option>
                            </select>
                        </div>
                        <div className="select-div col-lg-2 col-md-2 col-sm-4 col-12">
                            <i className="fa fa-caret-down" aria-hidden="true" />
                            <select name="extension">
                                <option value>Tiện ích</option>
                            </select>
                        </div>
                        <div className="select-div col-lg-3 col-md-2 col-sm-4 col-12">
                            <input type="text" className="input-search" placeholder="Nhập tên đường hoặc quán ..." />
                        </div>
                        <div className="select-div col-lg-1 col-md-2 col-sm-4 col-12">
                            <button className="btn-search">
                                <i className="fa fa-search" aria-hidden="true" />
                                <span>tìm kiếm</span>
                            </button>
                        </div>
                    </form>
                    <div className="div-map">
                        <div className="list col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="result">
                                <h4>
                                    Tìm được 116 quán
        </h4>
                            </div>
                            <ul className="result-ul">
                                <li>
                                    <h3 className="list-title">
                                        <a href="#">
                                            highland hoàng hoa thám
            </a>
                                    </h3>
                                    <p className="list-address">
                                        459 tôn đức thắng, liên chiểu, đà nẵng
          </p>
                                    <div className="list-isOpen">
                                        <button className="open">
                                            open
            </button>
                                        <button className="close">
                                            close
            </button>
                                    </div>
                                    <span className="timeopen">
                                        7:00 - 23:00
          </span>
                                    <a href="#" className="wififree">
                                        <i className="fa fa-wifi" aria-hidden="true" />
                                        <span>Wifi miễn phí</span>
                                    </a>
                                    <a href="#" className="payforcard">
                                        <i className="fa fa-credit-card-alt" aria-hidden="true" />
            Thanh toán bằng thẻ
          </a>
                                </li>
                                <li>
                                    <h3 className="list-title">
                                        <a href="#">
                                            highland hoàng hoa thám
            </a>
                                    </h3>
                                    <p className="list-address">
                                        459 tôn đức thắng, liên chiểu, đà nẵng
          </p>
                                    <div className="list-isOpen">
                                        <button className="open">
                                            open
            </button>
                                        <button className="close">
                                            close
            </button>
                                    </div>
                                    <span className="timeopen">
                                        7:00 - 23:00
          </span>
                                    <a href="#" className="wififree">
                                        <i className="fa fa-wifi" aria-hidden="true" />
                                        <span>Wifi miễn phí</span>
                                    </a>
                                    <a href="#" className="payforcard">
                                        <i className="fa fa-credit-card-alt" aria-hidden="true" />
            Thanh toán bằng thẻ
          </a>
                                </li>
                                <li>
                                    <h3 className="list-title">
                                        <a href="#">
                                            highland hoàng hoa thám
            </a>
                                    </h3>
                                    <p className="list-address">
                                        459 tôn đức thắng, liên chiểu, đà nẵng
          </p>
                                    <div className="list-isOpen">
                                        <button className="open">
                                            open
            </button>
                                        <button className="close">
                                            close
            </button>
                                    </div>
                                    <span className="timeopen">
                                        7:00 - 23:00
          </span>
                                    <a href="#" className="wififree">
                                        <i className="fa fa-wifi" aria-hidden="true" />
                                        <span>Wifi miễn phí</span>
                                    </a>
                                    <a href="#" className="payforcard">
                                        <i className="fa fa-credit-card-alt" aria-hidden="true" />
            Thanh toán bằng thẻ
          </a>
                                </li>
                                <li>
                                    <h3 className="list-title">
                                        <a href="#">
                                            highland hoàng hoa thám
            </a>
                                    </h3>
                                    <p className="list-address">
                                        459 tôn đức thắng, liên chiểu, đà nẵng
          </p>
                                    <div className="list-isOpen">
                                        <button className="open">
                                            open
            </button>
                                        <button className="close">
                                            close
            </button>
                                    </div>
                                    <span className="timeopen">
                                        7:00 - 23:00
          </span>
                                    <a href="#" className="wififree">
                                        <i className="fa fa-wifi" aria-hidden="true" />
                                        <span>Wifi miễn phí</span>
                                    </a>
                                    <a href="#" className="payforcard">
                                        <i className="fa fa-credit-card-alt" aria-hidden="true" />
            Thanh toán bằng thẻ
          </a>
                                </li>
                                <li>
                                    <h3 className="list-title">
                                        <a href="#">
                                            highland hoàng hoa thám
            </a>
                                    </h3>
                                    <p className="list-address">
                                        459 tôn đức thắng, liên chiểu, đà nẵng
          </p>
                                    <div className="list-isOpen">
                                        <button className="open">
                                            open
            </button>
                                        <button className="close">
                                            close
            </button>
                                    </div>
                                    <span className="timeopen">
                                        7:00 - 23:00
          </span>
                                    <a href="#" className="wififree">
                                        <i className="fa fa-wifi" aria-hidden="true" />
                                        <span>Wifi miễn phí</span>
                                    </a>
                                    <a href="#" className="payforcard">
                                        <i className="fa fa-credit-card-alt" aria-hidden="true" />
            Thanh toán bằng thẻ
          </a>
                                </li>
                                <li>
                                    <h3 className="list-title">
                                        <a href="#">
                                            highland hoàng hoa thám
            </a>
                                    </h3>
                                    <p className="list-address">
                                        459 tôn đức thắng, liên chiểu, đà nẵng
          </p>
                                    <div className="list-isOpen">
                                        <button className="open">
                                            open
            </button>
                                        <button className="close">
                                            close
            </button>
                                    </div>
                                    <span className="timeopen">
                                        7:00 - 23:00
          </span>
                                    <a href="#" className="wififree">
                                        <i className="fa fa-wifi" aria-hidden="true" />
                                        <span>Wifi miễn phí</span>
                                    </a>
                                    <a href="#" className="payforcard">
                                        <i className="fa fa-credit-card-alt" aria-hidden="true" />
            Thanh toán bằng thẻ
          </a>
                                </li>
                                <li>
                                    <h3 className="list-title">
                                        <a href="#">
                                            highland hoàng hoa thám
            </a>
                                    </h3>
                                    <p className="list-address">
                                        459 tôn đức thắng, liên chiểu, đà nẵng
          </p>
                                    <div className="list-isOpen">
                                        <button className="open">
                                            open
            </button>
                                        <button className="close">
                                            close
            </button>
                                    </div>
                                    <span className="timeopen">
                                        7:00 - 23:00
          </span>
                                    <a href="#" className="wififree">
                                        <i className="fa fa-wifi" aria-hidden="true" />
                                        <span>Wifi miễn phí</span>
                                    </a>
                                    <a href="#" className="payforcard">
                                        <i className="fa fa-credit-card-alt" aria-hidden="true" />
            Thanh toán bằng thẻ
          </a>
                                </li>
                                <li>
                                    <h3 className="list-title">
                                        <a href="#">
                                            highland hoàng hoa thám
            </a>
                                    </h3>
                                    <p className="list-address">
                                        459 tôn đức thắng, liên chiểu, đà nẵng
          </p>
                                    <div className="list-isOpen">
                                        <button className="open">
                                            open
            </button>
                                        <button className="close">
                                            close
            </button>
                                    </div>
                                    <span className="timeopen">
                                        7:00 - 23:00
          </span>
                                    <a href="#" className="wififree">
                                        <i className="fa fa-wifi" aria-hidden="true" />
                                        <span>Wifi miễn phí</span>
                                    </a>
                                    <a href="#" className="payforcard">
                                        <i className="fa fa-credit-card-alt" aria-hidden="true" />
            Thanh toán bằng thẻ
          </a>
                                </li>
                            </ul>
                        </div>
                        <div className="map col-lg-9 col-md-12 col-sm-12 col-12" id="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.062652425278!2d108.15732981468396!3d16.06223828888518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219246b64ae89%3A0xc9270347fa1b00cd!2zNDU5IFTDtG4gxJDhu6ljIFRo4bqvbmcsIEhvw6AgS2jDoW5oIE5hbSwgTGnDqm4gQ2hp4buDdSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1584258807910!5m2!1svi!2s" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} className="map-iframe" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
