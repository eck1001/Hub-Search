import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

function SearchBarResultsItem({ className }) {
  return (
    <Link className={className} to={`/details/1`}>
      Results
    </Link>
  );
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
  cursor: pointer;
  color: unset;
  text-decoration: unset;
`;
