import React, { Component } from 'react';
import './Login.css';

import { Link } from 'react-router-dom';

import * as firebase from 'firebase/app';

import notification from '../../notification';
import 'antd/dist/antd.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null

        }
    }



    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })

    }

    user() {
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
        }
    }

    providerData() {
        var user = firebase.auth().currentUser;

        if (user != null) {
            user.providerData.forEach(function (profile) {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
            });
        }
    }

    updateProfile() {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

    updateEmail() {
        var user = firebase.auth().currentUser;

        user.updateEmail("user@example.com").then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

    sendEmailVerification() {
        var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function () {
            // Email sent.
        }).catch(function (error) {
            // An error happened.
        });
    }

    updatePassword() {
        var user = firebase.auth().currentUser;
        var newPassword = user.getASecureRandomPassword();

        user.updatePassword(newPassword).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

    sendPasswordResetEmail() {
        var auth = firebase.auth();
        var emailAddress = "user@example.com";

        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // Email sent.
        }).catch(function (error) {
            // An error happened.
        });
    }

    delete() {
        var user = firebase.auth().currentUser;

        user.delete().then(function () {
            // User deleted.
        }).catch(function (error) {
            // An error happened.
        });
    }

    reauthenticateWithCredential() {
        var user = firebase.auth().currentUser;
        var credential;

        // Prompt the user to re-provide their sign-in credentials

        user.reauthenticateWithCredential(credential).then(function () {
            // User re-authenticated.
        }).catch(function (error) {
            // An error happened.
        });
    }

    createUserWithEmailAndPassword() {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    signInWithEmailAndPassword() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
            notification.success('Login success')
            console.log(result);
        })
        .catch(function (error) {
            //  Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    console.log('Wrong password.');
                } else if (errorCode === 'auth/user-not-found') {
                    console.log('user not found')
                } else {
                    console.log(errorMessage);
                }
                //console.log(error);
        });

        let jwtToken = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                user.getIdToken().then(function (idToken) {  // <------ Check this line
                    console.log(idToken); // It shows the Firebase token now
                    return idToken;
                });
            }
        });
    }

    signOut() {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
    }


    render() {
        const { error, email, password } = this.state;
        return (
            <div className="mt-8 content">
                <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
                <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
                    {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
                    <div className="">
                        <label htmlFor="userEmail" className="block">
                            Email:
          </label>
                        <input
                            type="email"
                            className="my-1 p-1 w-full"
                            name="email"
                            value={email}
                            placeholder="E.g: faruq123@gmail.com"
                            id="userEmail"
                            onChange={(event) => this.isChange(event)}
                        />
                        <label htmlFor="userPassword" className="block">
                            Password:
          </label>
                        <input
                            type="password"
                            className="mt-1 mb-3 p-1 w-full"
                            name="password"
                            value={password}
                            placeholder="Your Password"
                            id="userPassword"
                            onChange={(event) => this.isChange(event)}
                        />
                        <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick={() => { this.signInWithEmailAndPassword() }}>
                            Sign in
          </button>
                    </div>
                    <p className="text-center my-3">or</p>
                    <button
                        className="bg-red-500 hover:bg-red-600 w-full py-2 text-white">
                        Sign in with Google
        </button>
                    <p className="text-center my-3">
                        Don't have an account?{" "}
                        <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                            Sign up here
          </Link>{" "}
                        <br />{" "}
                        <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
                            Forgot Password?
          </Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default Login;