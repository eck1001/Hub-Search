/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext, useMemo, useRef } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import { ReactComponent as MagnifyingGlass } from "../assets/MagnifyingGlass.svg";
import { SearchContext, CHECKBOX_BUTTONS } from "../contexts/SearchContext";
import debounce from "lodash.debounce";
import { searchRepositories } from "../models/SearchModel";

function SearchBar({ className }) {
  const [fetchError, setFetchError] = useState(null);
  const { searchResults, setSearchResults, checkboxSelection } = useContext(SearchContext);
  const searchInput = useRef(null);

  const handleChange = (event) => {
    const query = event.target.value;
    querySearchRepositories(query);
  }

  const querySearchRepositories = (query) => {

    if (!query) {
      return;
    }

    const INITIAL_FILTER = "";
    const languageFilter = Object.keys(checkboxSelection).reduce(
      (accumulator, key) => {
        if (checkboxSelection[key]) {
          return accumulator + ` language:${CHECKBOX_BUTTONS[key]}`;
        }
        return accumulator;
      },
      INITIAL_FILTER
    );

    query += languageFilter;

    searchRepositories(query)
      .then((results) => {
        console.debug(results);
        setSearchResults(results);
      })
      .catch((error) => setFetchError(error));
  };

  /**
   * Memoize prevents the need to call debounce on each render.
   * Also, eliminating the need to use `UseCallback` to maintain the same `handleChange` function instance.
   */
  const THREE_HUNDRED_MILLISECONDS = 300;
  const debouncedHandleChange = useMemo(
    () => debounce(handleChange, THREE_HUNDRED_MILLISECONDS),
    [checkboxSelection]
  );

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      /* Cancel queued debounced calls */
      debouncedHandleChange.cancel();
      handleChange(event);
    }
  };

  useEffect( () => {
    if(!searchResults){
      return;
    }
    /* New query with updated filters */
    const {value: query } = searchInput.current;
    querySearchRepositories(query);

  }, [checkboxSelection])
  /**
   * Cancel queued debounce calls on un-mount
   */
  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    };
  }, []);

  return (
    <div className={className}>
      <input
        type="search"
        placeholder="Search Here ..."
        className="search-bar"
        name="search-bar"
        onChange={debouncedHandleChange}
        onKeyDown={handleKeyDown}
        ref={searchInput}
      />
      <MagnifyingGlass className="magnifying-glass" />
    </div>
  );
}

SearchBar.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.instanceOf(ThemeContext),
};

SearchBar.defaultProps = {
  className: "",
};

export default styled(SearchBar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 12px 20px;
  border: 4px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;

  .search-bar {
    min-width: 120px;
    border: none;
  }
`;
