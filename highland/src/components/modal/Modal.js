import React, { Component } from 'react';
import classes from './Modal.css';

export default class Modal extends Component {
    render() {
        return (
            <div className="content-for-modal">
                <div className="modal-container">
                    <div className="modal-title">
                        <h2>
                            checkout product order
                        </h2>

                    </div>

                    <div className="modal-product-detail-container">


                        <div className="modal-product-detail">
                            <ul>
                                <li className="modal-div-img">
                                    <img src="https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/5e4f9e4316bd0a0018d2e250_Tr%C3%A0%20cam%20v%C3%A0ng%20copy.jpg" />

                                </li>
                                <li className="modal-div-name">
                                    <h3>Trà Cam Vàng</h3>
                                    <p>Vừa</p>
                                    <p>Trân châu trắng</p>

                                </li>
                            </ul>


                        </div>



                        <div className="modal-div-loai">
                            <h3>
                                loại
                        </h3>
                            <div className="modal-div-loai-container">
                                <p>người ta để trống nên mình cũng để trống</p>

                            </div>

                        </div>



                        <div className="modal-div-size">
                            <h3>size</h3>
                            <div className="modal-size-containner">

                                <label>
                                    <input type="radio" defaultChecked="checked" name="size" className="modal-input-radio"/>
                                    <span>
                                        Lớn
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name="size" className="modal-input-radio" />
                                    <span>
                                        Vừa
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name="size" className="modal-input-radio" />
                                    <span>
                                        Nhỏ
                                    </span>
                                </label>


                            </div>


                        </div>
                        <div className="modal-div-topping">
                            <h3>
                                topping
                        </h3>
                            <div className="modal-topping-container">

                                <label>
                                    <input type="radio" defaultChecked="checked" name="topping" className="modal-input-radio" />
                                    <span>
                                        trân châu trắng
                                    </span>
                                </label>


                                <label>
                                    <input type="radio" name="topping" className="modal-input-radio" />
                                    <span>
                                        thạch vải
                                    </span>
                                </label>


                            </div>

                        </div>

                        <div className="modal-div-notes">
                            <div className="modal-div-notes-container">
                                <span></span>
                                <input type="text" placeholder="Ghi chú" />
                            </div>

                        </div>

                        <div className="modal-div-count-add">
                            <div className="modal-div-count col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="modal-div-count-container">
                                    <button className="btn-plus"></button>
                                    <span> 1 </span>
                                    <button className="btn-minus"></button>
                                </div>

                            </div>

                            <div className="modal-div-add col-lg-6 col-md-6 col-sm-12 col-12">
                                <button className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    thêm vào giỏ
                                </button>
                                <span className="col-lg-6 col-md-6 col-sm-12 col-12">65. 000 Đ</span>
                            </div>

                        </div>



                    </div>





                </div>

            </div>

        )
    }
}
