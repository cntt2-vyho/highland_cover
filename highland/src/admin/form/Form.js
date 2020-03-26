import React, { Component } from 'react';
import classes from './Form.css';
import axios from 'axios';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageurl : '',
            name: '',
            description: '',
            size: ''
        }
    }

    // save = () => {

    //     var productData = {
    //         title: this.state.title,
    //         price: this.state.price,
    //         category: this.state.category,
    //         imageURL: this.state.imageURL,
    //         suppliers: this.state.suppliers,
    //         description: this.state.description
    //     };

    //     execPOST('https://highland-a1203.firebaseio.com', productData);
    // };


    render() {
        return (
            <div className="content-for-form">

                <div className="admin-content" style={{ margin: '45px 10%' }}>
                    <div className="form-title">
                        <h1>New Product</h1>
                    </div>

                    <div className="form-content">

                        <div className="form-text col-lg-6 col-md-6 col-sm-12 col-12">

                            <div className="form-content-small">
                                <div class="form-group">
                                    <label for="">image url</label>
                                    <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                                </div>
                                <div class="form-group">
                                    <label for="">name</label>
                                    <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                                </div>
                                <div class="form-group">
                                    <label for="">desciption</label>
                                    <textarea />
                                </div>
                                <div class="form-group">
                                    <label for="">size</label>
                                    <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                                </div>
                                <div class="form-group">
                                    <label for="">category</label>
                                    <select className="form-group-select" >
                                        <option>cà phê</option>
                                        <option>freeze</option>
                                        <option>trà</option>
                                        <option>bánh mì</option>
                                        <option>khác</option>

                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">detail categories</label>
                                    <select className="form-group-select">
                                        <option>cà phê phin</option>
                                        <option>cà phê espresso</option>
                                    </select>
                                </div>

                            </div>


                        </div>


                        <div className="form-text col-lg-6 col-md-6 col-sm-12 col-12">

                            <div className="form-content-small">
                                <div class="form-group">
                                    <label for="">image url</label>
                                    <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                                </div>
                                <div class="form-group">
                                    <label for="">name</label>
                                    <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                                </div>
                                <div class="form-group">
                                    <label for="">desciption</label>
                                    <input type="date" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                                </div>
                                <div class="form-group">
                                    <label for="">time</label>
                                    <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                                </div>

                            </div>


                        </div>


                    </div>




                </div>

            </div>
        )
    }
}
export const execPOST = (url, body) => {
    return fetch(url, {
    mode:'no-cors',
    method: "POST",
    headers: {
      "Content-Type": "application/json"
   },
    body: JSON.stringify(body)
  });
};