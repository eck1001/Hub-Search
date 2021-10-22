import React, { useContext } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar";
import { ThemeContext } from "../contexts/ThemeContext";
import SearchBarCriteria from "../components/SearchBarCriteria";
import SearchBarResults from "../components/SearchBarResults";

function Search({ className }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={className}>
      <SearchBar theme={theme}/>
      <SearchBarCriteria theme={theme} />
      <SearchBarResults theme={theme} className='search-bar-results'/>
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
  padding: 10px 5%;
  background-color: white;
  display: grid;
  grid-template-areas: 
    "header header" 
    "body body";
  grid-template-columns: auto 225px;
  grid-template-rows: 50px auto;
  column-gap: 10%;
  row-gap: 10px;

  .search-bar-results {
    flex: 1;
    overflow: hidden; /* Needed, otherwise nested scroll containers will expand beyond flex boundry */
  }

  @media only screen and (max-device-width: 480px) {
    display:flex;
    flex-direction: column;
  }
`;
