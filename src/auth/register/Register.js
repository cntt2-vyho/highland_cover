import React, { Component } from 'react';
// import './Register.css';
import * as firebase from 'firebase/app';
import { connect } from 'react-redux';
import { userPostFetch } from '../../store/action';

class Register extends Component {


    constructor(props) {
        super(props);
        this.state = {
            displayname: '',
            email: '',
            password: '',
            error: null

        }
    }


    register(email, password) {
        let data = {
            displayname: this.state.displayname,
            email: this.state.email,
            password: this.state.password,
        }
        //this.props.userPostFetch(data);
        
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //     .then(function (result) {
        //         console.log(result);
        //     })
        //     .catch(function (error) {
        //         // Handle Errors here.
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         if (errorCode == 'auth/weak-password') {
        //             console.log('The password is too weak.');
        //         } else if (errorCode === 'The email address is badly formatted.') {
        //             console.log('The email address is badly formatted');
        //         } else {
        //             console.log(errorMessage);
        //         }
        //     });

        var provider = new firebase.auth.GoogleAuthProvider();
        this.auth.signInWithPopup(provider);



    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })

    }


    render() {
        const { email, password } = this.state;
        return (
            <div className="register-container">
                <div>
                    <h1 className="w3ls">Be a Member</h1>
                    <div className="content-w3ls">
                        <div className="content-agile1">
                            <h2 className="agileits1">Highland Official</h2>
                            <p className="agileits2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="content-agile2">

                            <div className="form-control w3layouts">
                                <input type="text" id="firstname" name="displayname" placeholder="Display Name" title="Please enter your Display Name" required onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-control w3layouts">
                                <input type="email" id="email" name="email" placeholder="mail@example.com" title="Please enter a valid email" required onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-control agileinfo">
                                <input type="password" className="lock" name="password" placeholder="Password" id="password1" required onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-control agileinfo">
                                <input type="password" className="lock" name="confirm-password" placeholder="Confirm Password" id="password2" required onChange={(event) => this.isChange(event)} />
                            </div>
                            <input type="button" className="register" defaultValue="Register" onClick={() => this.register(email, password)} />

                            <p className="wthree w3l">Fast Signup With Your Favourite Social Profile</p>
                            <ul className="social-agileinfo wthree2">
                                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a href="#"><i className="fa fa-youtube" /></a></li>
                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            </ul>
                        </div>
                        <div className="clear" />
                    </div>
                </div>

            </div>
        )
    }
}
export default Register;