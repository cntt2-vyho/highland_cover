import React, { Component, Fragment } from 'react';


import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';


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
        const array = JSON.parse(localStorage.getItem('data')) || [];

        this.setState({
            array: array
        })
        var total = 0;
        array.map(value => {
            total += value.total

        })
        this.setState({ total: total })
    }

    componentWillUpdate(nextProps, nextState) {
        // if (nextProps.match.params.id !== nextState.matchId) {
        //     this.componentDidMount();
        // }
        // if(this.props.modalData) {
        //     this.componentDidMount()
        // }
    }


    changPrice(x) {
        if (x) {
            return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }


    }
    printArrayTopping(array) {

        var text = array.join(' + ');
        if (array.length != 0) {
            return <p>{text}</p>
        }
    }

    openModal = (values, key) => {
        this.setState({ modalIsOpen: true });
        this.props.getEditData(values);
        this.props.getKey(key);
        this.props.isIced(values.isIced)
        //console.log('Cart : ', values);
        this.props.status('edit')
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    printIced(values) {
        //console.log(values);
        if (values.isIced == true) {
            return <p>Đá/Iced</p>
        }
        else if (values.isIced == false) {
            return <p>Nóng/Hot</p>
        }
    }



    render() {
        const {array} = this.state
        
        const item = array.map((values, key) => {
            return (
                <li key={key} onClick={() => this.openModal(values, key)} className="cart-item">
                    <div className="div-product-details-right">
                        <div className="div-product-details-right-count">
                            {values.count}
                        </div>
                        <div className="name-size-right-container">
                            <div className="name-size-right">
                                <p className="this-is-name">
                                    {values.product.name}
                                </p>
                                <p>{values.size ? values.size.name : null}</p>
                                {/* {values.toppingList ? this.printArrayTopping(values.topping) : null} */}
                                {this.printArrayTopping(values.topping)}
                                {this.printIced(values)}

                            </div>
                            <div className="quantity">
                                {this.changPrice(values.total)}
                            </div>
                        </div>
                    </div>

                </li>
            )
        })
        return (
            <Fragment>
                <ul className="force-overflow-order" style={{ display: 'block' }}>
                    {item}
                    {/* <div>
                        <Modal onRequestClose={this.closeModal} isOpen={this.state.modalIsOpen}>
                            <div className="modal-container">
                                <button className="modal-container-button" onClick={this.closeModal}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </button>
                                <ReactModal />
                            </div>

                        </Modal>
                    </div> */}
                </ul>
                <div className="totall" style={{ display: 'block' }}>
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
            </Fragment>


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
        },
        isIced: (isIced) => {
            dispatch({ type: "IS_ICED", isIced })
        },
        status: (status) => {
            dispatch({ type: "STATUS" , status})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);