import React, { Component } from 'react';
import classes from './Sidebar.css'
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar col-lg-2 col-md-2 col-lg-2 col-2">
                <div className="sidebar-content">
                    <ul className="sidebar-ul">
                        <li className="sidebar-li sidebar-li-for-title">
                            <NavLink to="/">
                                <div className="sidebar-div-img">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt />
                                </div>
                                <span className="sidebar-span-for-title">
                                    Highland Coffee
                                </span>
                            </NavLink>
                        </li>
                        <li className="sidebar-li">
                            <NavLink to="/cafe">
                                <span className="sidebar-span-for-cafe">
                                    cafe
                                </span>
                            </NavLink>
                        </li>
                        <li className="sidebar-li">
                            <NavLink to="/news">
                                <span className="sidebar-span-for-news">
                                    news
                                </span>
                            </NavLink>
                        </li>
                        <li className="sidebar-li">
                            <NavLink to="/menu">
                                <span className="sidebar-span-for-categories">
                                    categories
                            </span>
                            </NavLink>
                        </li>
                        <li className="sidebar-li">
                            <NavLink to="/products">
                                <span className="sidebar-span-for-products">
                                    products
                            </span>
                            </NavLink>
                        </li>
                        <li className="sidebar-li">
                            <NavLink to="/responsibility">
                                <span className="sidebar-span-for-responsibility">
                                    social responsibility
                            </span>
                            </NavLink>
                        </li>
                        <li className="sidebar-li sidebar-li-last">
                            <NavLink to="/about">
                                <span className="sidebar-span-for-about">
                                    about us
                            </span>
                            </NavLink>
                        </li>
                    </ul>

                </div>

            </div>
        )
    }
}
