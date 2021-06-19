import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="content-for-contact">
                <div className="contact-container">
                    <div className="contact-content">
                        <h1>liên hệ với chúng tôi</h1>
                        <h3>chúng tôi có thể giúp gì cho bạn?</h3>
                        <form action>
                            <div className="form-group-for-contact">
                                <label htmlFor="name" className="label" title="Vui lòng nhập họ tên liên lạc">họ tên:</label>
                                <div className="input-container">
                                    <i className="fa fa-user-o input-icon" aria-hidden="true" />
                                    <input type="text" className="input-item" />
                                </div>
                            </div>
                            <div className="form-group-for-contact">
                                <label htmlFor="email" className="label">email:</label>
                                <div className="input-container">
                                    <i className="fa fa-envelope-o input-icon" aria-hidden="true" />
                                    <input type="text" className="input-item" />
                                </div>
                            </div>
                            <div className="form-group-for-contact">
                                <label htmlFor="content" className="label">nội dung liên lạc:</label>
                                <div className="input-container">
                                    <i className="fa fa-pencil-square-o input-icon" aria-hidden="true" />
                                    <textarea cols={30} rows={10} className="input-item textarea"  />
                                </div>
                            </div>
                            
                            <button className="send-btn">gửi</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
