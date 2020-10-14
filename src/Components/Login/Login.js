import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { Container } from 'reactstrap';



const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

     let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const loggedInUser = { name: displayName, email }
      setLoggedInUser(loggedInUser)
        history.replace(from)
      // ...
    }).catch(function (error) {

      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode, email, credential, errorMessage);

    });
  }

  return (
    <Container>

      <div style={{ textAlign: "center" }}>

       
      </div>
      <div className="SignIn-wrapper text-center " >
            <div className="SignIn-Header text-enter  m-auto " >
                <img src="https://i.imgur.com/U7HMLBC.png" alt="" />
            </div>
            <div className="SignIn-body  " >
                <div className="w-50 mx-auto p-5 text-center mt-5   " >
                    <h1 className="mb-5" >Login With</h1>
                    <button style = {{color : "green", width : "300px", borderRadius : "8px"}} onClick={handleGoogleSignIn}>  <i className="fab fa-google"></i>    Continue with google
        </button>
                    <p className="mt-4" >Don't have an acount  <a href="/" >Create an acount</a> </p>
                </div>
            </div>
        </div>
    </Container>
  );
};

export default Login;