import React, { Component } from 'react';
import classes from './Form.css';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';


export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageurl : '',
            product_name: '',
            baseprice: '',
            description: '',
            slug: '',
            size_id: '',
            category: '',
            detailcategories: '',
            arraySize : []
        }
    }
    componentDidMount() {
        Axios.get('https://highland-a1203.firebaseio.com/size.json')
        .then(response => {
            const data = response.data;

                const objects = Object.values(response.data);
                const keys = Object.keys(data);

                objects.map((values, key) => {
                    values.id = keys[key];
                });
                this.setState({ arraySize: objects });
        })
    }
    

    save = () => {

        var productData = {
            imageurl: this.state.imageurl,
            product_name: this.state.product_name,
            baseprice: this.state.baseprice,
            description: this.state.description,
            slug: this.state.slug,
            size: this.state.size,
            category: this.state.category,
            detailcategories: this.state.detailcategories
        };

        execPOST('https://highland-a1203.firebaseio.com/products.json', productData);
    };


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({ [name]: value });
    
    };


    render() {
        const size = this.state.arraySize.map((value, key) =>{
            return(
            <option key={key}>{value.id}</option>
            )
        })
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
                                    <input type="text" name="imageurl"  onChange={(event) => this.isChange(event)}  className="form-control"  aria-describedby="helpId" />
                                </div>
                                <div class="form-group">
                                    <label for="">name</label>
                                    <input type="text" name="product_name"  onChange={(event) => this.isChange(event)} className="form-control"aria-describedby="helpId" />
                                </div>
                                <div class="form-group">
                                    <label for="">base price</label>
                                    <input type="text" name="baseprice"   onChange={(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" />
                                </div>
                                <div class="form-group">
                                    <label for="">desciption</label>
                                    <textarea  name="description"  onChange={(event) => this.isChange(event)}   />
                                </div>
                                <div class="form-group">
                                    <label for="">slug</label>
                                    <input type="text" name="slug"  onChange={(event) => this.isChange(event)} className="form-control"aria-describedby="helpId" />
                                </div>
                                <div class="form-group">
                                    <label for="">size id</label>
                                    <select className="form-group-select" name="size_id"  onChange={(event) => this.isChange(event)}  >
                                    {size}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">category</label>
                                    <select className="form-group-select" name="category"  onChange={(event) => this.isChange(event)} >
                                        <option>cà phê</option>
                                        <option>freeze</option>
                                        <option>trà</option>
                                        <option>bánh mì</option>
                                        <option>khác</option>

                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">detail categories</label>
                                    <select className="form-group-select" name="detailcategories"  onChange={(event) => this.isChange(event)} >
                                        <option>cà phê phin</option>
                                        <option>cà phê espresso</option>
                                    </select>
                                </div>

                                <NavLink to="/admin/form" onClick={() => this.save()} className="save-btn">  save </NavLink>

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