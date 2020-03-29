import React, { Component } from 'react'
import { execPOST } from '../Form';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

export default class CategoriesDetailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailcategories: '',
            category_id: '',
            arrayCategory : []
        }
    }
    
    componentDidMount() {
        Axios.get('https://highland-a1203.firebaseio.com/category.json')
        .then(response => {
            const data = response.data;

                const objects = Object.values(response.data);
                const keys = Object.keys(data);

                objects.map((values, key) => {
                    values.id = keys[key];
                });
                this.setState({ arrayCategory: objects });
        })
    }

    save = () => {

        var detailcategories = {
            detailcategories: this.state.detailcategories,
            category_id: this.state.category_id
        };

        execPOST('https://highland-a1203.firebaseio.com/detailcategories.json', detailcategories);
    };


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({ [name]: value });
    
    };


    render() {

        const category = this.state.arrayCategory.map((value, key) =>{
            return(
            <option key={key}>{value.id} - {value.name}</option>
            )
        })


        return (
            <div className="content-for-form">

                <div className="admin-content" style={{ margin: '45px 10%' }}>
                    <div className="form-title">
                        <h1>New detail category</h1>
                    </div>

                    <div className="form-content">

                        <div className="form-text col-lg-6 col-md-6 col-sm-12 col-12">

                            <div className="form-content-small">
                            <div class="form-group">
                                    <label for="">category</label>
                                    <select className="form-group-select" name="category_id"  onChange={(event) => this.isChange(event)}  >
                                    {category}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">name</label>
                                    <input type="text" name="detailcategories"  onChange={(event) => this.isChange(event)}  className="form-control"  aria-describedby="helpId" />
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
