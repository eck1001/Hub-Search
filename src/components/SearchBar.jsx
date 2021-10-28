/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext, useMemo } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import { ReactComponent as MagnifyingGlass } from "../assets/MagnifyingGlass.svg";
import { SearchContext } from "../contexts/SearchContext";
import debounce from "lodash.debounce";
import { searchRepositories } from "../models/SearchModel";

function SearchBar({ className }) {
  const [fetchError, setFetchError] = useState(null);
  const { setSearchResults } = useContext(SearchContext);

  console.log(fetchError);

  const handleChange = (event) => {
    const query = event.target.value;

    // TODO: query input validation here

    if (query) {
      searchRepositories(query)
        .then((results) => setSearchResults(results))
        .catch((error) => setFetchError(error));
    }
  };

  /**
   * Memoize prevents the need to call debounce on each render.
   * Also, eliminating the need to use `UseCallback` to maintain the same `handleChange` function instance.
   */
  const THREE_HUNDRED_MILLISECONDS = 300;
  const debouncedHandleChange = useMemo(
    () => debounce(handleChange, THREE_HUNDRED_MILLISECONDS),
    []
  );

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
