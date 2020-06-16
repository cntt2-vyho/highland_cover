import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div>
                ahihi
            </div>
        )
    }
}
// import React, { Component } from 'react';
// import classes from './Modal.css';

// import { connect } from 'react-redux';
// class Modal extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             object: {},
//             options: [],

//             name: '',
//             id: '',
//             base_price: '',
//             note: '',
//             size: {},
//             toppingList: [],
//             count: 1,
//             total: 0,
//             type: [],
//             topping: [],
//             priceForSize: 0,
//             priceForTopping: 0,
//         }
//     }

//     componentDidMount() {

//         // if(this.props.isAdd) {
//         var price = this.props.size.price;

//         this.setState({
//             object: this.props.addItem,
//             name: this.props.addItem.product_name,
//             id: this.props.addItem._id,
//             type: this.props.addItem.type,
//             options: this.props.addItem.options,
//             base_price: this.props.addItem.base_price,
//             size: this.props.size,
//             priceForSize: price,
//             image: this.props.addItem.image
//         })
//         // }
//         // else {
//         //     console.log(this.props.editItem);
//         //     this.setState({
//         //         name: this.props.editItem.name,
//         //         id: this.props.editItem.id,
//         //         note: this.props.editItem.note,
//         //         size: this.props.editItem.size,
//         //         toppingList: this.props.editItem.toppingList,
//         //         count: this.props.editItem.count,
//         //         total: this.props.editItem.total,
//         //         type: this.props.editItem.type,
//         //         topping: this.props.editItem.topping,
//         //         priceForSize: this.props.editItem.priceForSize,
//         //         priceForTopping: this.props.editItem.priceForTopping,

//         //         options: this.props.editItem.options,
//         //         object: this.props.editItem.object
//         //     })

//         // }


//     }

//     isChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;


//         this.setState({
//             [name]: value
//         });

//     }
//     plus(count) {
//         this.setState({
//             count: count + 1
//         })
//         return count;
//     }
//     minus(count) {
//         if (count == 0) {
//             count = 0;
//         }
//         else {
//             this.setState({
//                 count: count - 1
//             })
//         }
//         return count;
//     }

//     changPrice(x) {
//         return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

//     }

//     total() {
//         var total = (this.state.base_price + this.state.priceForSize + this.state.priceForTopping) * this.state.count;
//         return total;
//     }

//     isChangeArray = (event, values) => {

//         var list1 = this.state.topping;
//         if (event.target.checked == true) {
//             list1.push(event.target.value)
//         }
//         else {
//             var index = list1.indexOf(event.target.value);
//             if (index !== -1) {
//                 list1.splice(index, 1)
//             }
//         }



//         var list = this.state.toppingList;
//         var price = this.state.priceForTopping

//         if (event.target.checked == true) {
//             list.push(values);
//             price += parseInt(values.price)
//         }
//         else {
//             for (var i = 0; i < list.length; i++) {
//                 if (list[i].product_id === values.product_id) { // nếu là sinh viên cần xóa
//                     list.splice(i, 1); // thì xóa
//                     price -= parseInt(values.price)
//                 }
//             }
//         }
//         this.setState({ toppingList: list, topping: list1, priceForTopping: price });
//     }

//     isChangeSize(values) {
//         this.setState({
//             size: values,
//             priceForSize: values.price

//         })

//     }

//     printArrayTopping(array) {
//         var text = array.join(' + ');
//         return text;
//     }

//     addToCart() {
//         let data = {
//             name: this.state.name,
//             id: this.state.id,
//             note: this.state.note,
//             size: this.state.size,
//             toppingList: this.state.toppingList,
//             count: this.state.count,

//             object: this.state.object,
//             options: this.state.options,

//             total: this.total(),
//             type: this.state.type,
//             topping: this.state.topping,
//             priceForSize: this.state.priceForSize,
//             priceForTopping: this.state.priceForTopping

//         }
//         // let datas = {...this.state, total: this.total()};

//         this.props.changeEditStatus();

//         this.props.getModalData(data);

//         this.props.isAdd();
//     }


//     render() {

//         const item = this.state.options.map((value, key) => {
//             if (value.name == 'Size') {
//                 return (
//                     <div className="modal-div-size" key={key}>
//                         <h3 style={{ display: 'block' }}> {value.name}</h3>
//                         <div className="modal-size-container">
//                             {value.items.map((values, keys) => {
//                                 return (
//                                     <label key={keys}>
//                                         {values.val}
//                                         {values.price ? ' (+' + this.changPrice(values.price) + ')' : null}
//                                         <input type="radio" name="size" className="modal-input-radio" onChange={() => this.isChangeSize(values)} defaultChecked={keys === value.default_index} value={values.val} />
//                                         <span className="checkmark"></span>
//                                     </label>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 )
//             }
//             if (value.name == 'Topping') {
//                 return (
//                     <div className="modal-div-size">
//                         <h3 style={{ display: 'block' }}> {value.name}</h3>
//                         <div className="modal-size-container">
//                             {value.items.map((values, key) => {
//                                 return (
//                                     <label key={key}>
//                                         {values.product_name}
//                                         {values.price ? ' (+' + this.changPrice(values.price) + ')' : null}
//                                         <input type="checkbox" name="topping" className="modal-input-radio" onChange={(event) => this.isChangeArray(event, values)} value={values.product_name} />
//                                         <span className="checkmark"></span>
//                                     </label>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 )
//             }
//         })
//         return (
//             <div className="content-for-modal" >
//                 <div className="modal-container">
//                     <button className="modal-container-button" onClick={() => { this.props.changeEditStatus() }} >
//                         <i className="fa fa-times" aria-hidden="true"></i>
//                     </button>
//                     <div className="modal-container-small">
//                         <div className="modal-title">
//                             <h2>checkout product order</h2>
//                         </div>
//                         <div className="modal-product-detail-container">
//                             <div className="modal-product-detail">
//                                 <div className="modal-div-img col-lg-3 col-md-3 col-sm-6 col-6">
//                                     <img src={this.state.image} alt={this.state.name} />
//                                 </div>
//                                 <div className="modal-div-name col-lg-9 col-md-9 col-sm-6 col-6">
//                                     <h3>{this.state.name}</h3>
//                                     <p>
//                                         {this.state.size.val}
//                                     </p>
//                                     <p>{this.printArrayTopping(this.state.topping)}</p>
//                                 </div>
//                             </div>
//                             <div className="modal-div-loai">
//                                 <h3>loại</h3>
//                                 <div className="modal-div-loai-container">
//                                     <p>người ta để trống nên mình cũng để trống</p>

//                                 </div>
//                             </div>
//                             {item}
//                             <div className="modal-div-notes">
//                                 <div className="modal-div-notes-container">
//                                     <span></span>
//                                     <input type="text" placeholder="Ghi chú" onChange={(event) => this.isChange(event)} name="note" />
//                                 </div>
//                             </div>
//                             <div className="modal-div-count-add">
//                                 <div className="modal-div-count col-lg-6 col-md-6 col-sm-6 col-6">
//                                     <div className="modal-div-count-container">
//                                         <button className="btn-minus" onClick={() => this.minus(this.state.count)}></button>

//                                         <input name="count" value={this.state.count} onChange={(event) => this.isChange(event)} />
//                                         <button className="btn-plus" onClick={() => this.plus(this.state.count)}></button>
//                                     </div>

//                                 </div>

//                                 <div className="modal-div-add col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => this.addToCart()}>
//                                     <button className="col-lg-6 col-md-6 col-sm-6 col-6">
//                                         thêm vào giỏ
//                                     </button>
//                                     <span className="col-lg-6 col-md-6 col-sm-12 col-12">{this.changPrice(this.total())}</span>
//                                 </div>

//                             </div>



//                         </div>
//                     </div>
//                 </div>


//             </div >
//         )
//     }
// }
// const mapStateToProps = (state, ownProps) => {
//     return {
//         addItem: state.addItem,
//         isEdit: state.isEdit,
//         size: state.size,
//         // editItem: state.editItem,

//     }
// }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         changeEditStatus: () => {
//             dispatch({ type: "CHANGE_EDIT_STATUS" })
//         },
//         getModalData: (modalData) => {
//             dispatch({ type: "GET_MODAL_DATA", modalData })
//         },
//         isAdd: () => {
//             dispatch({ type: "IS_ADD" })
//         },
//         // turnOffAll : () => {
//         //     dispatch({ type: "TURN_OFF_ALL"})
//         // }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Modal);
