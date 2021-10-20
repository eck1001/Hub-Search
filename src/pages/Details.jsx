import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

function Details({ className }) {
  return <div className={`${className} Details`}></div>;
}

Details.propTypes = {
  className: PropTypes.string,
};

Details.defaultProps = {
  className: "",
};

export default styled(Details)`
box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: red;
`;
