import React from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: yellow;
`;

class Spinners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="sweet-loading text-center">
        <RingLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
export default Spinners;
