import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";
import { UserContext } from "../../../App";
import Spinners from "../../Spinners/Spinners";

const ServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://rocky-mesa-50833.herokuapp.com/serviceList?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services, loggedInUser.email]);

  const handleDelete = (id) => {
    fetch("https://rocky-mesa-50833.herokuapp.com/delete/?id=" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
        }
      });
  };

  return (
    <Container>
      <div className="d-flex NavLink_section my-3 justify-content-between">
        <p>
          <Link to="/">
            <img
              className="logoStyle"
              src="https://i.ibb.co/kmzR5Ly/logo.png"
              alt=""
            />
          </Link>
        </p>
        <p>Customer</p>
        <p>{loggedInUser.name}</p>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div>
            <Link className="NavLinkStyle" to="/">
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
        <div className="col-md-8 sm-offset-2">
          <div className="row">
            {services.length ? (
              services.map((list, i) => (
                <div
                  key={i}
                  className="col-md-6 col-lg-4 sm-offset-2 col-sm-12"
                >
                  <Card>
                    <CardImg
                      top
                      style={{ height: "150px" }}
                      width="100%"
                      src={`data:image/png;base64,${list.photo.img}`}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>{list.course}</CardTitle>
                      <CardText>
                        {" "}
                        <small>{list.description}</small>{" "}
                      </CardText>

                      <Button
                        onClick={() => handleDelete(list._id)}
                        color="info"
                      >
                        Cancel
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              ))
            ) : (
              <Spinners />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceList;
