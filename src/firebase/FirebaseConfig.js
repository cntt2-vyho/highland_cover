import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBBagu-mxoP2msJVLqsohwR-Tx4IAOWVlA",
  authDomain: "highland-a1203.firebaseapp.com",
  databaseURL: "https://highland-a1203.firebaseio.com",
  projectId: "highland-a1203",
  storageBucket: "highland-a1203.appspot.com",
  messagingSenderId: "887936709761",
  appId: "1:887936709761:web:22058a15e32b46379b4980",
  measurementId: "G-08PZGW3S5S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var db = firebase.firestore();