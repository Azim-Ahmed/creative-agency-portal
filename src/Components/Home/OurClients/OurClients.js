import React from "react";
import { Col, Container, Row } from "reactstrap";
const clients = [
  {
    img: "https://i.ibb.co/KN2TfN1/airbnb.png",
  },
  {
    img: "https://i.ibb.co/BrKxwDv/google.png",
  },
  {
    img: "https://i.ibb.co/gDzJvjp/uber.png",
  },
  {
    img: "https://i.ibb.co/mNpT6ZZ/netflix.png",
  },
  {
    img: "https://i.ibb.co/VT013MJ/slack.png",
  },
];

const OurClients = () => {
  return (
    <Container>
      <Row className="pt-3 mt-4 mb-4 text-center sm-offset-2">
        {clients.map((client, i) => (
          <Col className="ml-3 my-3" md={{ size: 2 }} sm={{ size: 12 }} key={i}>
            <img
              style={{
                height: "40px",
              }}
              src={client.img}
              alt=""
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurClients;
