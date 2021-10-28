import React, { useContext } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import SearchBarResultsItem from "./SearchBarResultsItem";
import { SearchContext } from "../contexts/SearchContext";

function SearchBarResults({ className }) {
  const { searchResults } = useContext(SearchContext);

  const searchBarResultItems = searchResults.map((resultItem) => {
    const { name, id } = resultItem;

    return <SearchBarResultsItem
      name={name}
      id={id}
      key={id}
    />;
  });

  return (
    <div className={className}>
      <div className="scroll-container">
        {searchBarResultItems}
        <div className="whitespace" />
      </div>
      <hr />
    </div>
  );
}

SearchBarResults.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.instanceOf(ThemeContext),
};

SearchBarResults.defaultProps = {
  className: "",
};

export default styled(SearchBarResults)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px 20px;
  border: 4px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;

  .scroll-container {
    overflow: scroll;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    height: 95%;
    padding: 0 10%;
  }

  hr {
    width: 100%;
    margin: 0;
    border-radius: 1px;
  }
  .whitespace {
    width: 100%;
    height: 10px;
  }
`;
