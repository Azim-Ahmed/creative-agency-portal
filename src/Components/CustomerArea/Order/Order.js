import React, { useContext, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Form, FormGroup, Input, Container } from "reactstrap";
import { Button } from "reactstrap";
import { ServiceContext, UserContext } from "../../../App";
import "./Order.css";

const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [servicesData, setServicesData] = useContext(ServiceContext);

  const { _id } = useParams();

  const matchedCourse = servicesData.find((course) => course._id === _id);
  console.log(matchedCourse);

  const [newCustomer, setNewCustomer] = useState({
    name: loggedInUser.name,
    email: loggedInUser.email,
    course: matchedCourse.name,
    photo: matchedCourse.img,
    description: matchedCourse.desc,
  });
  const handleInput = (e) => {
    const category = { ...newCustomer };
    category[e.target.name] = e.target.value;

    setNewCustomer(category);
    console.log(newCustomer);
  };

  const handleAll = () => {
    fetch("https://rocky-mesa-50833.herokuapp.com/customerOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCustomer),
    }).then((result) => {
      alert("Course Added To Your List");
    });
  };

  return (
    <Container>
      <div className="d-flex my-3 p-3 NavLink_section justify-content-between">
        <p>
          <Link to="/">
            <img
              className="logoStyle"
              src="https://i.ibb.co/kmzR5Ly/logo.png"
              alt=""
            />
          </Link>
        </p>
        <p>Order</p>
        <p>{loggedInUser.name}</p>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div>
            <Link className="NavLinkStyle" to={`/order/${_id}`}>
              <p className="    mb-3">
                <i className="fas fa-cart-plus mr-2"></i>
                Order{" "}
              </p>
            </Link>
          </div>
          <div>
            <NavLink className="NavLinkStyle" to="/servicelist">
              <p className="   ">
                <i className="fas fa-list-ul mr-2"></i>
                Service List
              </p>
            </NavLink>
          </div>
          <div>
            <NavLink className="NavLinkStyle" to="/review">
              <p className="   ">
                <i className="fal fa-comment-alt-check mr-2"></i>
                Review
              </p>
            </NavLink>
          </div>
        </div>
        <div className="col-md-8 sm-offset-3 w-75">
          <Form className="w-75 justify-content-start">
            <FormGroup>
              <Input
                type="text"
                name="name"
                defaultValue={loggedInUser.name}
                className="inputForOrder"
                onBlur={handleInput}
                placeholder="Name/Company Name"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="email"
                defaultValue={loggedInUser.email}
                className="inputForOrder"
                onBlur={handleInput}
                placeholder="Enter Your Email"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="course"
                defaultValue={matchedCourse.name}
                className="inputForOrder"
                onBlur={handleInput}
                placeholder="Which Course you want admit"
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="text"
                name="description"
                defaultValue={matchedCourse.desc}
                onBlur={handleInput}
                id="exampleDatetime"
                placeholder="Project Details"
              />
            </FormGroup>
            <FormGroup>
              <Input
                onBlur={handleInput}
                type="number"
                name="price"
                placeholder="Price"
              />
            </FormGroup>

            <Link to="/servicelist">
              <Button
                onClick={handleAll}
                type="submit"
                size="md"
                color="warning"
              >
                Order
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Order;
