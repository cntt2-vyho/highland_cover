import React, { Component } from 'react';
import classes from './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <ul class="footer-ul">
            <li class="footer-li">
                <ul class="footer-ul-item">
                    <li class="footer-li-item">
                        <a href="#">
                            <i class="fa fa-facebook fff" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="footer-li-item">
                        <a href="#">
                            <i class="fa fa-youtube fff" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="footer-li-item">
                        <a href="#">
                            <i class="fa fa-instagram fff" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="footer-li">
                <span>© 2018 Highlands Coffee. All rights reserved</span>
            </li>
            <li class="footer-li symbol">
                <i class="fa fa-paper-plane-o symbol-i" aria-hidden="true"></i>
                <span>
                    Đăng ký để nhận bản tin
                </span>
            </li>
            <li class="footer-li symbol">
                <i class="fa fa-envelope-o symbol-i" aria-hidden="true"></i>
                <span>
                    customerservice@highlandscoffee.com.vn
                </span>
            </li>
        </ul>
    </div>
    )
  }
}
export default Footer;