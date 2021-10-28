import React, { useContext } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import SearchBarResultsItem from "./SearchBarResultsItem";
import { SearchContext, RADIO_BUTTONS } from "../contexts/SearchContext";

function SearchBarResults({ className }) {
  const { searchResults, radioSelection } = useContext(SearchContext);

  let sortedSearchResults = null;
  if(radioSelection === RADIO_BUTTONS.most_stars){
    sortedSearchResults = JSON.parse(JSON.stringify(searchResults)); // clones object

    /**
     * We want high to low sorting with 'unknown'(s) on the bottom of the sorted list.
     * Alg High Level Summary:
     *  - Positive return values move the first element down the list.
     *  - Negative return values move the second element down the list.
     *  - The list is rendered top -> bottom.
     *  - We want max stars on top (decending in value) e.i index == 0, 
     */
    const SORT_BEFORE = 1;
    const SORT_AFTER = -1;
    sortedSearchResults.sort( (firstItem, secondItem)  => {
      if(firstItem.stars === 'unknown') {
        return SORT_BEFORE;
      }
      if(secondItem.stars === 'unknown') {
        return SORT_AFTER;
      }
      return secondItem.stars - firstItem.stars;
    });
  }

  const searchBarResultItems = (sortedSearchResults || searchResults).map((resultItem) => {
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
