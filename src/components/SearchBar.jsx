import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "@emotion/react";
import { ReactComponent as MagnifyingGlass } from "../assets/MagnifyingGlass.svg";

function SearchBar({ className }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    const input = event.currentTarget.value;

    setSearchInput(input);
  };

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
  width: 225px;
  height: 50px;
  padding: 12px 20px;
  border: 4px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;

  .search-bar {
      min-width: 120px;
      border: none;
  }

  .magnifying-glass{

  }
`;
