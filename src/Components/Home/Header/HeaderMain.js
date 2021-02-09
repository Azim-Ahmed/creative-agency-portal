import React from "react";
import { Button, Col, Row } from "reactstrap";

const HeaderMaain = () => {
  return (
    <Row
      style={{
        height: "600px",
      }}
      className="d-flex mt-4 align-items-center"
    >
      <Col md={5}>
        <h1
          style={{
            color: "#3A4256",
          }}
        >
          LET'S GROW YOUR
          <br />
          BRAND TO THE <br />
          NEXT LEVEL
        </h1>
        <p>
          We are here to brush up your skill and maintain the actual quality .
          Want to hear more from us? stay in touch
        </p>
        <Button outline={true} color="primary">
          HIRE US
        </Button>
      </Col>
      <Col md={{ size: 6, offset: 1 }} sm={12}>
        <img
          src="https://i.ibb.co/Jjckyyr/Frame.png"
          alt="Banner "
          className="img-fluid"
        />
      </Col>
    </Row>
  );
};

export default HeaderMaain;
