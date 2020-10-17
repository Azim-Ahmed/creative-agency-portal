import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

const NoMatch = () => {
    return (
        <Container>
        <div className="SignIn-wrapper text-center " >
              <div className="SignIn-Header text-enter  m-auto " >
                  <Link to="/"><img  src="https://i.ibb.co/kmzR5Ly/logo.png" alt="" /></Link>
              </div>
              <div className=" text-center mb-4" >
                  <div className="SignIn-body w-50 mx-auto p-5 text-center mt-5   " >
                      <h1 className="mb-5 text-strong" >No Component Area, 404 </h1>
                      <p className="mt-4" >Go to Home  <a href="/" > To  Create an account</a> </p>
                  </div>
              </div>
          </div>
      </Container>
    );
};

export default NoMatch;