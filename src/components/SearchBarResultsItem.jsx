import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";

function SearchBarResultsItem({ className }) {
  return <div className={className}>Results</div>;
}

SearchBarResultsItem.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.instanceOf(ThemeContext),
};

SearchBarResultsItem.defaultProps = {
  className: "",
};

export default styled(SearchBarResultsItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 6px 10px;
  border: 4px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;
`;
