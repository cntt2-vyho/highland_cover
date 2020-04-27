import React, { Component } from 'react';
import classes from './Modal.css';

import { connect } from 'react-redux';

class Modal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            object: {},

            note: '',
            size: '',
            topping: [],
            type: [],
            count: 1,
            name: '',
            id: '',
            option: []
        }
    }
    componentDidMount() {
        this.setState({
            object: this.props.editItem,
            name: this.props.editItem.product_name,
            id: this.props.editItem._id,
            type: this.props.editItem.type,
            option: this.props.editItem.options

        })
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

    }
    plus(count) {
        this.setState({
            count: count + 1
        })
        return count;
    }
    minus(count) {
        if (count == 0) {
            count = 0;
        }
        else {
            this.setState({
                count: count - 1
            })
        }
        return count;
    }

    changPrice(x) {
        return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

    }


    render() {
        console.log(this.state);


        const item = this.state.option.map(value => {
            if (value.name == 'Size') {
                return (
                    <div className="modal-div-size">
                        <h3 style={{ display: 'block' }}> {value.name}</h3>
                        <div className="modal-size-container">
                            {value.items.map(values => {
                                return (
                                    <label>
                                        {values.val}
                                        {values.price ? ' (+' + this.changPrice(values.price) + ')' : null}
                                        <input type="radio" name={value.name} className="modal-input-radio" onChange={(event) => this.isChange(event)} defaultChecked={values.default_index} />
                                        <span className="checkmark"></span>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                )
            }
            if (value.name == 'Topping') {
                return (
                    <div className="modal-div-size">
                        <h3 style={{ display: 'block' }}> {value.name}</h3>
                        <div className="modal-size-container">
                            {value.items.map(values => {
                                return (
                                    <label>
                                        {values.product_name}
                                        {values.price ? ' (+' + this.changPrice(values.price) + ')' : null}
                                        <input type="checkbox" name={value.name} className="modal-input-radio" onChange={(event) => this.isChange(event)} />
                                        <span className="checkmark"></span>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                )
            }
        })

        return (
            <div className="content-for-modal">

                <div className="modal-container">
                    <button className="modal-container-button" onClick={() => this.props.changeEditStatus()}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <div className="modal-container-small">
                        <div className="modal-title">
                            <h2>
                                checkout product order
                        </h2>

                        </div>

                        <div className="modal-product-detail-container">


                            <div className="modal-product-detail">
                                <div className="modal-div-img col-lg-3 col-md-3 col-sm-6 col-6">
                                    <img src={this.state.object.image} alt={this.state.object.product_name} />

                                </div>
                                <div className="modal-div-name col-lg-9 col-md-9 col-sm-6 col-6">
                                    <h3>{this.state.object.product_name}</h3>
                                    <p>
                                        {this.state.size}
                                    </p>
                                    <p>{this.state.topping}</p>

                                </div>


                            </div>



                            <div className="modal-div-loai">
                                <h3>
                                    loại</h3>
                                <div className="modal-div-loai-container">
                                    <p>người ta để trống nên mình cũng để trống</p>

                                </div>

                            </div>

                            {item}

                            <div className="modal-div-notes">
                                <div className="modal-div-notes-container">
                                    <span></span>
                                    <input type="text" placeholder="Ghi chú" onChange={(event) => this.isChange(event)} name="note" />
                                </div>

                            </div>

                            <div className="modal-div-count-add">
                                <div className="modal-div-count col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="modal-div-count-container">
                                        <button className="btn-minus" onClick={() => this.minus(this.state.count)}></button>

                                        <span name="count">{this.state.count}</span>
                                        <button className="btn-plus" onClick={() => this.plus(this.state.count)}></button>
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

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        idEdit: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({ type: "CHANGE_EDIT_STATUS" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
