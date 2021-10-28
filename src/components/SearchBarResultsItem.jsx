import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

function SearchBarResultsItem({ className, name, id }) {
  return (
    <Link className={className} to={`/details/${id}`}>
      {name}
    </Link>
  );
}

SearchBarResultsItem.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.instanceOf(ThemeContext),
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

SearchBarResultsItem.defaultProps = {
  className: "",
};

export default styled(SearchBarResultsItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6px 10px;
  border: 4px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;
  overflow-wrap: anywhere;
  cursor: pointer;
  color: unset;
  text-decoration: unset;
`;
