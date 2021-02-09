import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ServiceContext, UserContext } from "../../../App";
import Spinners from "../../Spinners/Spinners";

import "./Services.css";

const Services = () => {
  const [servicesData, setServicesData] = useContext(ServiceContext);
  const [loggedInUser] = useContext(UserContext);

  const [admin, setAdmin] = useState();

  useEffect(() => {
    fetch(
      "https://rocky-mesa-50833.herokuapp.com/getadmin?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.length == 0) {
          setAdmin(false);
        } else {
          setAdmin(true);
        }
      });
  }, []);

  useEffect(() => {
    fetch("https://rocky-mesa-50833.herokuapp.com/frontcourse")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, [servicesData]);

  return (
    <section>
      <div className="text-center mt-5">
        <h2>
          Provide awsome <span style={{ color: "green" }}>services</span>
        </h2>
      </div>

      <div className="d-flex  justify-content-center">
        <div className="row w-75 mt-5 pt-5 ">
          {servicesData.length ? (
            servicesData.map((service, i) => (
              <>
                {!admin && (
                  <Link
                    to={`/order/${service._id}`}
                    key={i}
                    className="servicesArea col-md-6 col-sm-12 col-lg-4 text-center"
                  >
                    <img
                      className="mb-3 mt-3"
                      style={{ height: "70px" }}
                      src={`data:image/png;base64,${service.img.img}`}
                      alt=""
                    />
                    <h5>{service.name}</h5>
                    <p className="text-secondary">{service.desc}</p>
                  </Link>
                )}
                {admin && (
                  <div className="servicesArea col-md-6 col-sm-12 col-lg-4 text-center">
                    <img
                      className="mb-3 mt-3"
                      style={{ height: "70px" }}
                      src={`data:image/png;base64,${service.img.img}`}
                      alt=""
                    />
                    <h5>{service.name}</h5>
                    <p className="text-secondary">{service.desc}</p>
                  </div>
                )}
              </>
            ))
          ) : (
            <Spinners className="text-center" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
