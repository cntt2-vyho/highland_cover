import React, { Component } from 'react';
import classes from './Form.css'

export default class Form extends Component {
    render() {
        return (
            <div className="content-for-form">
                <div className="admin-content" style={{ margin: '45px 10%' }}>


                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-title">
                        <h1>
                            New News</h1>
                        <div className="form-content">
                            <div class="form-group">
                                <label for="">image url</label>
                                <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                            </div>
                            <div class="form-group">
                                <label for="">title</label>
                                <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                            </div>
                            <div class="form-group">
                                <label for="">date</label>
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
