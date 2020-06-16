import React, { Component } from 'react';
import classes from './Cart.css';

import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import ReactModal from './../modal/react-modal/ReactModal';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            total: 0,
            shipfee: 0,

            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        const array1 = JSON.parse(localStorage.getItem('data')) || [];
        const array2 = this.props.modalData;

        // console.log('local', array1);
        // console.log('modal', array2);
        // if(array2.object ) {
        //     console.log('co');
        // }
        // else {
        //     console.log('khong');
        // }

        this.setState({
            array: array1
        })
        var total = 0;
        array1.map(value => {
            total += value.total

        })
        this.setState({ total: total })
    }

    // componentWillUpdate(nextProps, nextState) {
    //     // if (nextProps.match.params.id !== nextState.matchId) {
    //     //     this.componentDidMount();
    //     // }
    //     console.log('---------------------------');
    //     console.log(nextProps);
    //     console.log(nextState);
    // }


    changPrice(x) {
        if (x) {
            return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }


    }
    printArrayTopping(array) {
        var text = array.join(' + ');
        if (array == null) {
            return null;
        }
        else {
            return <p>{text}</p>
        }
    }

    openModal = (values, key) => {
        this.setState({ modalIsOpen: true });
        this.props.getEditData(values);
        this.props.getKey(key);
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }



    render() {
        const item = this.state.array.map((values, key) => {
            return (
                <li key={key} onClick={() => this.openModal(values, key)} className="cart-item">
                    <div className="div-product-details-right">
                        <div className="div-product-details-right-count">
                            {values.count}
                        </div>
                        <div className="name-size-right-container">
                            <div className="name-size-right">
                                <p className="this-is-name">
                                    {values.name}
                                </p>
                                <p>{values.size.val}</p>
                                {this.printArrayTopping(values.topping)}

                            </div>
                            <div className="quantity">
                                {this.changPrice(values.total)}
                            </div>
                        </div>
                        {/* <div className="div-product-details-right-remove">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </div> */}
                    </div>

                </li>
            )
        })
        return (
            <div className="cart-detail col-lg-4 col-md-12 col-sm-12 col-12">

                <div className="card-detail-container">
                    <NavLink to="/payment">
                        <div className="div-xemgiohang">
                            <h3>Xem giỏ hàng ( + {this.state.array.length} món )</h3>
                        </div>
                    </NavLink>

                    <ul className="force-overflow-order" style={{ display: 'block' }}>
                        {item}
                        <div>
                            <Modal onRequestClose={this.closeModal} isOpen={this.state.modalIsOpen}>
                                <div className="modal-container">
                                    <button className="modal-container-button" onClick={this.closeModal}>
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                    <ReactModal />
                                </div>

                            </Modal>
                        </div>
                    </ul>
                    <div className="totall" style={{ display: 'block' }}>
                        <div className="div-voucher">
                            <input type="text" placeholder="Nhập mã giảm giá tại đây" />
                            <button className="btn-voucher">áp dụng</button>
                        </div>
                        <div className="div-ship">
                            <h3 className="ship">vận chuyển </h3>
                            <h3 className="ship-fee">
                                <strong>{this.changPrice(this.state.shipfee)}</strong>
                            </h3>
                        </div>
                    </div>
                    <div className="total">
                        <h2 className="total-small">thành tiền</h2>
                        <h2 className="total-fee">
                            <strong>{this.changPrice(this.state.total)}</strong>
                        </h2>
                    </div>



                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        modalData: state.modalData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getEditData: (editItem) => {
            dispatch({ type: "GET_EDIT_DATA", editItem })
        },
        getKey: (index) => {
            dispatch({ type: "GET_KEY", index })
        },
        turnOffAll: () => {
            dispatch({ type: "TURN_OFF_ALL" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);