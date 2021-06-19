import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as firebase from 'firebase/app';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            openCategoryId: -1,
            isClicked: false,
            openMenuId: -1,
            isMenuClicked: false,

        }
        this.menuList = [
            {
                "title": "",
                "image": "",
                "link": ""
            }
        ]
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    getData() {

    }
    onClickCategory = (index) => {
        const { isClicked } = this.state;
        this.setState({
            openCategoryId: (!isClicked) ? index : -1,
            isClicked: !isClicked
        })
    }
    getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return width;
    }


    logout() {
        firebase.auth().signOut();
    }

    render() {

        return (
            <header id="header">

                <div className="header-container">
                    <div className="header-logo">
                        <NavLink to="/">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt="Highland Coffee" />
                        </NavLink>
                    </div>
                    <div className="header-menu">
                        <div className="menu-li-resp">
                            {/* <span>Menu</span> */}
                        </div>
                        <div className="header-menu-small">
                            <button className="btnX">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>

                            <ul className="menu-ul">


                                <li className="menu-li li-menu-dr">
                                    <button className="none-for-dropdown">
                                        <i className="fa fa-chevron-right fa-right" aria-hidden="true"></i>
                                        <i className="fa fa-chevron-down fa-down" aria-hidden="true"></i>

                                    </button>
                                    <NavLink to="/order" className="menu-li-a">thực đơn

                                    </NavLink>

                                </li>
                                
                                <li className="menu-li li-menu-dr">
                                    <button className="none-for-dropdown">
                                        <i className="fa fa-chevron-right fa-right" aria-hidden="true"></i>
                                        <i className="fa fa-chevron-down fa-down" aria-hidden="true"></i>

                                    </button>
                                    <NavLink to="/about" className="menu-li-a">về chúng tôi</NavLink>

                                </li>
                                <li className="menu-li">
                                    <NavLink to="/contact" className="menu-li-a">liên hệ</NavLink>
                                </li>
                                <li className="menu-li li-menu-dr">
                                    <ul className="div-for-header-user">
                                        <div className="header-avatar">
                                            <img src="https://cf.shopee.vn/file/442b353ea766547b168fd10c493d9306_tn" alt="none" />

                                        </div>

                                        <div className="header-username">
                                            <span>
                                                vyvyho111
                                            </span>
                                        </div>



                                    </ul>
                                    <div className="hover-user-header">
                                        <button className="hover-user-header-p1" onClick={() => this.logout()}>log out</button>

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