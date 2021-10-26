import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import { ReactComponent as MagnifyingGlass } from "../assets/MagnifyingGlass.svg";
import { request } from "@octokit/request";
import { SearchContext } from "../contexts/SearchContext";

function SearchBar({ className }) {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchResults } = useContext(SearchContext);

  const fetchRepositories = async () => {
    try {
      /**
       * Octokit request DOCS: https://github.com/octokit/request.js
       * Constructing a search query: https://docs.github.com/en/rest/reference/search#constructing-a-search-query
       */
      const results = await request("GET /search/repositories", {
        q: searchInput,
      });
      const { items } = results.data;

      // const name; - name
      // const author; - owner:login
      // const language; - language
      // const stars; - stargazers_count
      // const description - description

      // TODO: filter these items to only data that is needed.
      setSearchResults(items);

      console.log(items);
    } catch (error) {
      /**
       * Limitations of GitHUb API:
       * https://docs.github.com/en/rest/reference/search#limitations-on-query-length
       */
      alert(
        "Invalid Query, Rate Limit Reached, or General Error while fetching data"
      );
      console.error("Error Fetching Repositories", error);
    }
  };

  const handleChange = (event) => {
    const input = event.currentTarget.value;

    setSearchInput(input);
  };

  useEffect(() => {
    if (searchInput) {
      fetchRepositories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <div className={className}>
      <input
        type="search"
        placeholder="Search Here ..."
        className="search-bar"
        name="search-bar"
        onChange={handleChange}
        value={searchInput}
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
