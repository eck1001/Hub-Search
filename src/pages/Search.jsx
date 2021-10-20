import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

function Search({ className }) {
  return <div className={`${className} Search`}></div>;
}

Search.propTypes = {
  className: PropTypes.string,
};

Search.defaultProps = {
  className: "",
};

export default styled(Search)`
box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: red;
`;
