import React, { Component } from 'react';

import classes from './ReactModal.css'
import { connect } from 'react-redux';

var _ = require('lodash');


class ReactModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            object: {},
            options: [],

            name: '',
            id: '',
            base_price: '',
            note: '',
            size: {},

            toppingList: [], topping: [],
            count: 1,
            total: 0,
            type: [],

            priceForSize: 0,
            priceForTopping: 0,

            index: ''
        }

    }

    componentDidMount() {

        if (this.props.editItem.object) {
            this.setState({
                object: this.props.editItem.object,
                name: this.props.editItem.name,
                id: this.props.editItem.id,
                type: this.props.editItem.type,
                options: this.props.editItem.options,
                base_price: this.props.editItem.base_price,
                size: this.props.editItem.size,
                priceForSize: this.props.editItem.priceForSize,
                image: this.props.editItem.object.image,
                total: this.props.editItem.total,
                base_price: this.props.editItem.object.base_price,
                priceForTopping: this.props.editItem.priceForTopping,
                topping: this.props.editItem.topping,
                toppingList: this.props.editItem.toppingList,

                index: this.props.index

            });
        }

        else {
            var price = this.props.size.price;

            this.setState({
                object: this.props.addItem,
                name: this.props.addItem.product_name,
                id: this.props.addItem._id,
                type: this.props.addItem.type,
                options: this.props.addItem.options,
                base_price: this.props.addItem.base_price,
                size: this.props.size,
                priceForSize: price,
                image: this.props.addItem.image
            })

        }
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

    total() {
        var total = (this.state.base_price + this.state.priceForSize + this.state.priceForTopping) * this.state.count;
        return total;
    }

    isChangeArray = (event, values) => {

        var list1 = this.state.topping;
        if (event.target.checked == true) {
            list1.push(event.target.value)
        }
        else {
            var index = list1.indexOf(event.target.value);
            if (index !== -1) {
                list1.splice(index, 1)
            }
        }



        var list = this.state.toppingList;
        var price = this.state.priceForTopping

        if (event.target.checked == true) {
            list.push(values);
            price += parseInt(values.price)
        }
        else {
            for (var i = 0; i < list.length; i++) {
                if (list[i].product_id === values.product_id) { // nếu là sinh viên cần xóa
                    list.splice(i, 1); // thì xóa
                    price -= parseInt(values.price)
                }
            }
        }
        this.setState({ toppingList: list, topping: list1, priceForTopping: price });
    }

    isChangeSize(values) {
        console.log(values);
        this.setState({
            size: values,
            priceForSize: values.price

        })

    }

    printArrayTopping(array) {
        var text = array.join(' + ');
        return text;
    }

    addToCart() {
        let data = {
            name: this.state.name,
            id: this.state.id,
            note: this.state.note,
            size: this.state.size,
            toppingList: this.state.toppingList,
            count: this.state.count,

            object: this.state.object,
            options: this.state.options,

            total: this.total(),
            type: this.state.type,
            topping: this.state.topping,
            priceForSize: this.state.priceForSize,
            priceForTopping: this.state.priceForTopping

        }

        const arr = JSON.parse(localStorage.getItem('data')) || [];
        var datas = [...arr];

        if (this.props.editItem.object) {
            if(data.count == 0) {

            }
            else {
                datas.map((value, key) => {
                    if (key == this.state.index && !(_.isEqual(value, data))) {
                        datas[key] = data;
                    }
                })
            }
        }
        else {
            var flag = false;
            datas.map((value, key) => {

                if (_.isEqual(value, data)) {
                    flag = true;
                    datas[key].count += data.count;
                }
            });
            if (!flag) {
                datas = [...arr, data]
            }
        }
        localStorage.setItem('data', JSON.stringify(datas));

        this.props.getModalData(datas);


    }

    isContain = (topping) => {
        const { toppingList } = this.state;
        if (toppingList.some(top => top.product_name === topping.product_name))
            return true;
        else return false;
    }


    render() {

        const item = this.state.options.map((value, key) => {
            if (value.name == 'Size') {
                return (
                    <div className="modal-div-size" key={key}>
                        <h3 style={{ display: 'block' }}> {value.name}</h3>
                        <div className="modal-size-container">
                            {value.items.map((values, keys) => {
                                return (
                                    <label key={keys}>
                                        {values.val}
                                        {values.price ? ' (+' + this.changPrice(values.price) + ')' : null}
                                        <input type="radio" name="size" className="modal-input-radio" onChange={() => this.isChangeSize(values)}
                                            defaultChecked={(_.isEqual(this.state.size, values)) ? (_.isEqual(this.state.size, values)) : (keys == value.default_index)}
                                            value={values.val} />
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
                            {value.items.map((values, key) => {
                                return (
                                    <label key={key}>
                                        {values.product_name}
                                        {values.price ? ' (+' + this.changPrice(values.price) + ')' : null}
                                        <input type="checkbox" name="topping" className="modal-input-radio"
                                            //checked={_.isEqual(value)}
                                            onChange={(event) => this.isChangeArray(event, values)}
                                            defaultChecked={this.isContain(values)}
                                            value={values.product_name} />
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
            <div className="modal-container-small" >
                <div className="modal-title">
                    <h2>checkout product order</h2>
                </div>
                <div className="modal-product-detail-container">
                    <div className="modal-product-detail">
                        <div className="modal-div-img col-lg-3 col-md-3 col-sm-6 col-6">
                            <img src={this.state.image} alt={this.state.name} />
                        </div>
                        <div className="modal-div-name col-lg-9 col-md-9 col-sm-6 col-6">
                            <h3>{this.state.name}</h3>
                            <p>
                                {this.state.size.val}
                            </p>
                            <p>{this.printArrayTopping(this.state.topping)}</p>
                        </div>
                    </div>
                    <div className="modal-div-loai">
                        <h3>loại</h3>
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
                        <div className="modal-div-count col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="modal-div-count-container">
                                <button className="btn-minus" onClick={() => this.minus(this.state.count)}></button>

                                <input name="count" value={this.state.count} onChange={(event) => this.isChange(event)} />
                                <button className="btn-plus" onClick={() => this.plus(this.state.count)}></button>
                            </div>

                        </div>

                        <div className="modal-div-add col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => this.addToCart()}>
                            <button className="col-lg-6 col-md-6 col-sm-6 col-6">
                                thêm vào giỏ
                                    </button>
                            <span className="col-lg-6 col-md-6 col-sm-12 col-12">
                                {this.changPrice(this.total()) ? this.changPrice(this.total()) : this.changPrice(this.state.total)}
                            </span>
                        </div>

                    </div>



                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        addItem: state.addItem,
        size: state.size,
        editItem: state.editItem,
        index: state.index
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getModalData: (modalData) => {
            dispatch({ type: "GET_MODAL_DATA", modalData })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactModal);
