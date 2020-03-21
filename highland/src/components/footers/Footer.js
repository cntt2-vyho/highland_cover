import React, { Component } from 'react';
import classes from './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul className="footer-ul">
                    <li className="footer-li col-md-12 col-sm-12 col-12">
                        <ul className="footer-ul-item">
                            <li className="footer-li-item">
                                <a href="#">
                                <i class="fa fa-facebook fff" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="footer-li-item">
                                <a href="#">
                                    <i className="fa fa-youtube fff" aria-hidden="true" />
                                </a>
                            </li>
                            <li className="footer-li-item">
                                <a href="#">
                                    <i className="fa fa-instagram fff" aria-hidden="true" />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer-li col-md-12 col-sm-12 col-12">
                        <span>© 2018 Highlands Coffee. All rights reserved</span>
                    </li>
                    <li className="footer-li symbol col-md-12 col-sm-12 col-12">
                        <a href="#">

                            <span className="symbol-footer-span">
                                Đăng ký để nhận bản tin
                            </span>
                            <i className="fa fa-paper-plane-o symbol-i" aria-hidden="true" />
                        </a>
                    </li>
                    <li className="footer-li symbol col-md-12 col-sm-12 col-12">
                        <a href="#">

                            <span className="symbol-footer-span">
                                customerservice@highlandscoffee.com.vn
                            </span>
                            <i className="fa fa-envelope-o symbol-i" aria-hidden="true" />
                        </a>
                    </li>
                </ul>
            </div>

        )
    }
}
