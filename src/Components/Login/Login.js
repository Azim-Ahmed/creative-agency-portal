import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";

import { Container, Row, Button, Col } from "reactstrap";
import { UserContext } from "../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;
        const loggedInUse = { name: displayName, email, photo: photoURL };

        fetch(
          "https://rocky-mesa-50833.herokuapp.com/getadmin?email=" +
            loggedInUse.email
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.length == 0) {
              console.log(data.length);
              setLoggedInUser(loggedInUse);
              history.replace(from);
            } else {
              setLoggedInUser(loggedInUse);
              history.replace("/servicelistforadmin");
            }
          });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, email, credential, errorMessage);
      });
  };

  return (
    <Container>
      <Row className="my-5 text-center">
        <Col className="mb-3" md={{ size: 6, offset: 3 }} sm={{ size: 12 }}>
          <Link to="/">
            <img
              className="my-5 mx-3 login_image_size"
              src="https://i.ibb.co/kmzR5Ly/logo.png"
              alt="logo"
            />
          </Link>
          <div className="bg-warning login_section_background">
            <h1 className="mb-5 text-center">Login With</h1>
            <Button
              className="bg-info text-white p-2"
              block
              lg
              onClick={handleGoogleSignIn}
            >
              {" "}
              <i className="fab mr-1 fa-google"></i> Continue with google
            </Button>
            <p className="mt-4">
              Don't have an acount{" "}
              <a onClick={handleGoogleSignIn} href="/login">
                Create an account
              </a>{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
