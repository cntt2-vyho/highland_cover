import React, { Component } from 'react';
import classes from './Sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar col-lg-3 col-md-3 col-lg-3 col-3">
                <div className="sidebar-title">
                    <div className="sidebar-div-img">
                         <img src="" />
                    </div>
                    <div className="sidebar-small-title">
                        Highland Coffee

                    </div>

                </div>
                <div className="sidebar-content">
                    <ul className="sidebar-ul">
                        <li className="sidebar-li">
                            <span>
                                news
                            </span>
                        </li>
                    </ul>

                </div>

            </div>
        )
    }
}
