import React, { Component } from 'react';
import classes from './Table.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arayProducts: []
        }
    }


    componentDidMount() {
        axios.get('https://highland-a1203.firebaseio.com/products.json')
        .then((response) => {
            const data = response.data;

            const objects = Object.values(response.data);
            const keys = Object.keys(data);

            objects.map((values, key) => {
                values.id = keys[key];
            });
            this.setState({ arayProducts: objects });

        });

    }


    render() {

        const datas = this.state.arayProducts.map((values, key) => {
            return (<tr key={key}>
                <td>
                    <img width="80" height="80" src={values.imageurl} alt />
                </td>
                <td>{values.name}</td>
                <td>{values.description}</td>
                <td>{values.size}</td>
                <td>{values.category}</td>
                <td>{values.detailcategories}</td>
                <td>
                    <NavLink className="btn btn-primary" to="/home/menu">Edit</NavLink>
                    <button className="btn btn-warning" >Delete</button>
                </td>
            </tr>)
        });


        return (
            <div className="table-container">


                <div className="table-content">
                    <div className="table-title">
                        <h1>
                            Products Database</h1>

                    </div>
                    <div className="table-forNewandSearch">
                        <ul>
                            <li>
                                <input placeholder="Search anything here..." />
                                <button>
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </li>
                            <li>
                                <NavLink to="/admin/form">
                                    New Products
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="table-content-container">

                        <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                                        <thead>
                                            <tr role="row">

                                                <th className="sorting_asc" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '100px' }}>imageurl</th>

                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '90px' }}>name</th>

                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Office: activate to sort column ascending" style={{ width: '110px' }}>desciption</th>

                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Office: activate to sort column ascending" style={{ width: '100px' }}>size</th>

                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Age: activate to sort column ascending" style={{ width: '66px' }}>category</th>

                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Age: activate to sort column ascending" style={{ width: '66px' }}>detail categories</th>

                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Start date: activate to sort column ascending" style={{ width: '132px' }}></th></tr>
                                        </thead>
                                        <tbody>
                                            {datas}
                                        </tbody>
                                    </table>

                    </div>
                </div>





            </div>
        )
    }
}
