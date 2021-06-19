import React, { Component } from 'react'
import { execPOST } from '../Form';
import { NavLink } from 'react-router-dom';

export default class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }


  save = () => {

    var categoryData = {
      name: this.state.name
    };

    execPOST('https://highland-a1203.firebaseio.com/category.json', categoryData);
  };


  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });

  };


  render() {
    return (
      <div className="content-for-form">

        <div className="admin-content" style={{ margin: '45px 10%' }}>
          <div className="form-title">
            <h1>New category</h1>
          </div>

          <div className="form-content">

            <div className="form-text col-lg-6 col-md-6 col-sm-12 col-12">

              <div className="form-content-small">
                <div class="form-group">
                  <label for="">name</label>
                  <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" />
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
