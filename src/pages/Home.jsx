import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

function Home({ className }) {
  return <div className={`${className} Home`}></div>;
}

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: "",
};

export default styled(Home)`
box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: red;
`;
