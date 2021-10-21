import React, { useContext } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar";
import { ThemeContext } from "../contexts/ThemeContext";
import SearchBarCriteria from "../components/SearchBarCriteria";

function Search({ className }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={className}>
      <header>
        <SearchBar theme={theme} />
        <SearchBarCriteria theme={theme} />
      </header>
    </div>
  );
}

Search.propTypes = {
  className: PropTypes.string,
};

Search.defaultProps = {
  className: "",
};

export default styled(Search)`
  width: 100vw;
  height: 100vh;
  background-color: white;

  header {
    display:flex;
    justify-content: space-around;
  }
`;
