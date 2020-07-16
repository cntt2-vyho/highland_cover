import React, { Component } from 'react';
import classes from './Menu.css';
import { NavLink } from 'react-router-dom';


import { db } from '../../firebase/FirebaseConfig';


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayCategory: []
        }
    }
    componentDidMount() {
        var list = [];
        db.collection("data").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    list.push(doc.data());
                    this.setState({
                        arrayCategory: list
                    })
                });
            });
    }

    render() {

        const item = this.state.arrayCategory.map((value, key) => {
            return (
                <div className="section1" key={key}>
                    <div className="section-container">

                        <div className="div-img1 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src='https://images.foody.vn/res/g1/7939/s570x570/081c3d09-5685-43a7-bdb8-70aa7d8bd6a0.jpg' alt={value.dish_type_name} />
                        </div>
                        <div className="content1 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="content-container1">
                                <h1><NavLink to={`/menu/${value.slug}/${value.dish_type_id}.html`}>
                                    {value.dish_type_name.split("/")[0]}
                                    </NavLink>
                                </h1>
                                <p>{value.description}</p>
                                <NavLink to={`/menu/${value.slug}/${value.dish_type_id}.html`} id="khamphathem1">
                                    khám phá thêm</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            )
            
        })
        return (
            <div className="content">
                
                {item}
            </div>

        )
    }
}
