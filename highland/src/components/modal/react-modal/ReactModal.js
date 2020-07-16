import React, { Component } from 'react';

import classes from './ReactModal.css'
import { connect } from 'react-redux';

var _ = require('lodash');


class ReactModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false,
            product: {},
            arrayOption: [],

            toppingList: [], topping: [],
            count: 1,
            total: 0,

            priceForSize: 0,
            priceForTopping: 0
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }

    // componentDidMount() {
    //     if (this.props.isIced == true) {
    //         this.setState({
    //             isIced: true
    //         })
    //     }

    //     this.props.addItem.options.map(value1 => {
    //         value1.option_items.items.map(value2 => {
    //             if (value2.price.value == 0 && value1.name == "Chọn Size") {
    //                 this.setState({
    //                     size: value2
    //                 });
    //             }
    //             else if (value2.is_default == true && value1.name == 'Chọn Đá/Nóng - Iced/Hot') {
    //                 this.setState({
    //                     isIced: true
    //                 });
    //             }

    //         })
    //     })

    //     if (this.props.editItem.object) {
    //         this.setState({
    //             status: 'edit',
    //             object: this.props.editItem.object,
    //             name: this.props.editItem.name,
    //             id: this.props.editItem.id,
    //             type: this.props.editItem.type,
    //             options: this.props.editItem.options,
    //             priceForSize: this.props.editItem.priceForSize,
    //             image: this.props.editItem.object.photos[1].value,
    //             total: this.props.editItem.total,
    //             base_price: this.props.editItem.object.base_price,
    //             priceForTopping: this.props.editItem.priceForTopping,
    //             topping: this.props.editItem.topping,
    //             toppingList: this.props.editItem.toppingList,
    //             price: this.props.editItem.object.price.value,
    //             size: this.props.editItem.size,

    //             index: this.props.index,

    //             isIced: this.props.isIced ? this.props.isIced : null

    //         });
    //     }

    //     else {



    //         this.setState({
    //             status: 'add',
    //             object: this.props.addItem,
    //             name: this.props.addItem.product_name,
    //             id: this.props.addItem._id,

    //             options: this.props.addItem.options,
    //             price: this.props.addItem.price.value,
    //             priceForSize: 0,
    //             size: this.props.size,
    //             image: this.props.addItem.photos[1].value
    //         })



    //     }
    // }

    componentDidMount() {
        
        this.setState({
            product: this.props.addItem,
            image: this.props.addItem.photos[1].value,
            priceText: this.props.addItem.price.text,
            arrayOption: this.props.addItem.options,
        });

        this.props.addItem.options.map(value1 => {
            value1.option_items.items.map(value2 => {
                if (value2.price.value == 0 && value1.name == "Chọn Size") {
                    this.setState({
                        size : value2,
                        priceForSize : value2.price.value
                    });
                }
                else if (value2.is_default == true && value1.name == 'Chọn Đá/Nóng (Iced/Hot)') {
                   this.setState({
                    isIced: true
                   });
                }

            })
        })
    }

    changPrice(x) {
        if (x) {
            return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
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

    total() {
        var total;

        total = (this.state.price + this.state.priceForSize + (this.state.priceForTopping ? this.state.priceForTopping : 0)) * this.state.count;
        return total
    }

    isChangeArray = (event, values) => {
        //console.log(this.state.toppingList)

        var list1 = this.state.topping ? this.state.topping : [];
        if (event.target.checked == true) {
            list1.push(event.target.value)
        }
        else {
            var index = list1.indexOf(event.target.value);
            if (index !== -1) {
                list1.splice(index, 1)
            }
        }



        var list = this.state.toppingList ? this.state.toppingList : [];
        var price = this.state.priceForTopping ? this.state.priceForTopping : 0;

        if (event.target.checked == true) {
            list.push(values);
            price += parseInt(values.price.value)
        }
        else {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id === values.id) { // nếu là sinh viên cần xóa
                    list.splice(i, 1); // thì xóa
                    price -= parseInt(values.price.value)
                }
            }
        }
        this.setState({ toppingList: list, topping: list1, priceForTopping: price });
    }

    isChangeSize(values) {

        this.setState({
            size: values,
            priceForSize: values.price.value

        })

    }

    isChangeIced(event) {


        if (event.target.value == 'Đá/Iced') {
            this.setState({
                isIced: true
            })
        }
        else {
            this.setState({
                isIced: false
            })
        }



    }

    printArrayTopping(array) {
        var text = array.join(' + ');
        return text;
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    addToCart() {
        let data = this.state;
        data.total = this.total()


        const arr = JSON.parse(localStorage.getItem('data')) || [];
        var datas = [...arr];

        if (this.props.editItem.object) {
            if (data.count == 0) {

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

        this.props.getModalData(data);


    }

    isContain = (topping) => {
        const { toppingList } = this.state;
        if (toppingList.some(top => top.product_name === topping.product_name))
            return true;
        else return false;
    }


    render() {
        console.log(this.state);

        const { product, image, priceText, arrayOption, count } = this.state;


        const item = arrayOption.map((value, key) => {
            if (value.name == 'Chọn Size') {
                return (
                    <div className="modal-div-size" key={key}>
                        <h3 style={{ display: 'block', padding: '10px 0' }}> {value.name}</h3>
                        <div className="modal-size-container">
                            {value.option_items.items.map((values, keys) => {
                                return (
                                    <label key={keys} className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        {values.name}
                                        {values.price.value ? ' (+' + this.changPrice(values.price.value) + ')' : null}
                                        <input type="radio" name="size" className="modal-input-radio" onChange={() => this.isChangeSize(values)}
                                            defaultChecked={values.is_default}
                                            value={values.price.value} />
                                        <span className="checkmark"></span>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                )
            }
            else
                if (value.name == 'Thêm/Extra') {
                    return (
                        <div className="modal-div-size">
                            <h3 style={{ display: 'block' }}> {value.name}</h3>
                            <div className="modal-size-container">
                                {value.option_items.items.map((values, key) => {
                                    return (
                                        <label key={key}>
                                            {values.name}
                                            {values.price ? ' (+' + this.changPrice(values.price.value) + ')' : null}
                                            <input type="checkbox" name="topping" className="modal-input-radio"
                                                onChange={(event) => this.isChangeArray(event, values)}
                                                value={values.name} />
                                            <span className="checkmark"></span>

                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }
                else
                    if (value.name == 'Chọn Đá/Nóng (Iced/Hot)') {
                        return (
                            <div className="modal-div-size" key={key}>
                                <h3 style={{ display: 'block', padding: '10px 0' }}> {value.name}</h3>
                                <div className="modal-size-container">
                                    {value.option_items.items.map((values, keys) => {
                                        return (
                                            <label key={keys} className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                {values.name}
                                                {values.price.value ? ' (+' + this.changPrice(values.price.value) + ')' : null}
                                                <input type="radio" name="isIced" className="modal-input-radio" onChange={(event) => this.isChangeIced(event)}
                                                value={values.name} 
                                                defaultChecked={values.is_default}/>
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
                            <img src={image} alt={product.name} />
                        </div>
                        <div className="modal-div-name col-lg-9 col-md-9 col-sm-6 col-6">
                            <h3>{product.name}</h3>
                            <p>
                                Giá mặc định : {priceText}
                            </p>
                            <p>
                                {product.name}
                            </p>
                            <p>{this.printArrayTopping(this.state.topping)}</p>
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
                                <button className="btn-minus" onClick={() => this.minus(count)}></button>

                                <input name="count" value={count} onChange={(event) => this.isChange(event)} />
                                <button className="btn-plus" onClick={() => this.plus(count)}></button>
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
        editItem: state.editItem,
        index: state.index,
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
