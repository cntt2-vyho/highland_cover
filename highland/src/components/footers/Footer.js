import React, { Component } from 'react';
import classes from './Footer.css';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul className="footer-ul">
                    <li className="div-for-viewmap">
                        <NavLink to="/cafe" id="viewmap">
                            view map

                </NavLink></li>
                    <li className="footer-li">
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
                    <li className="footer-li">
                        <span>© 2018 Highlands Coffee. All rights reserved</span>
                    </li>
                    <li className="footer-li symbol">
                        <a href="#">
                            <span className="symbol-footer-span symbol-footer-span-1">
                                Đăng ký để nhận bản tin
                            </span>
                        </a>
                    </li>
                    <li className="footer-li symbol">
                        <a href="#">
                            <span className="symbol-footer-span symbol-footer-span-2">
                                customerservice@highlandscoffee.com.vn
                            </span>
                        </a>
                    </li>
                </ul>
            </div >

        )
    }
}
