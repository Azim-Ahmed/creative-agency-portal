import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import'./Login.css'

import { Container } from 'reactstrap';
import { UserContext } from '../../App';
import { useEffect } from 'react';



const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

     let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };


  //   const [ data, setData ] = useState([])
  //   useEffect(()=> {

  //     fetch('http://localhost:5000/getadmin?email=' + loggedInUser.email )
  //     .then(res => res.json())
  //     .then(date => setData(date))

  //   }, [])
  // console.log(data)
    
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email,photoURL } = result.user;
      const loggedInUse = { name: displayName, email,photo:photoURL }


      fetch('http://localhost:5000/getadmin?email=' + loggedInUse.email )
     .then(res => res.json())
      .then(data => {
        if (data.length == 0) {
          console.log(data.length);
         setLoggedInUser(loggedInUse)
         history.replace(from)
       }
          else {
              
            setLoggedInUser(loggedInUse)
              history.replace('/servicelistforadmin')
          }

    })
  })
    .catch(function (error) {

      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode, email, credential, errorMessage);

    });
  }


  return (
    <Container>
      <div className="SignIn-wrapper text-center " >
            <div className="SignIn-Header text-enter  m-auto " >
                <Link to="/"><img  src="https://i.ibb.co/kmzR5Ly/logo.png" alt="" /></Link>
            </div>
            <div className=" text-center mb-4" >
                <div className="SignIn-body w-50 mx-auto p-5 text-center mt-5   " >
                    <h1 className="mb-5" >Login With</h1>
                    <button className="btn-style py-2 px-5"  onClick={handleGoogleSignIn}>  <i className="fab mr-1 fa-google"></i>    Continue with google
        </button>
                    <p className="mt-4" >Don't have an acount  <a href="/" >Create an account</a> </p>
                </div>
            </div>
        </div>
    </Container>
  );
};

export default Login;