import React, { Component } from 'react'
import { execPOST } from '../Form';
import classes from './SizeForm.css'
import { NavLink } from 'react-router-dom';

export default class SizeForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      small: '',
      medium: '',
      large: ''
    }
  }
  save = () => {
    const sizedata = {
      small : this.state.small,
      medium : this.state.medium,
      large : this.state.large
    }
    execPOST('https://highland-a1203.firebaseio.com/size.json', sizedata)
  }

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
            <h1>New Size</h1>
          </div>

          <div className="form-content">

            <div className="form-text col-lg-6 col-md-6 col-sm-12 col-12">

              <div className="form-content-small">
                <div class="form-group">
                  <label for="">small</label>
                  <input type="text" name="small"  className="form-control"  aria-describedby="helpId"  onChange={(event) => this.isChange(event)} />
                </div>
                <div class="form-group">
                  <label for="">medium</label>
                  <input type="text" name="medium"  className="form-control"  aria-describedby="helpId"  onChange={(event) => this.isChange(event)} />
                </div>
                <div class="form-group">
                  <label for="">large</label>
                  <input type="text" name="large"  className="form-control" aria-describedby="helpId" onChange={(event) => this.isChange(event)}  />
                </div>
                  <NavLink to="/admin" onClick={() => this.save()} className="save-btn">
                    save
                  </NavLink>


              </div>


            </div>


          </div>




        </div>

      </div>
    )
  }
}
