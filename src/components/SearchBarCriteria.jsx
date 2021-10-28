import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import { SearchContext, RADIO_BUTTONS } from "../contexts/SearchContext";

function SearchBarCriteria({ className }) {
  const [open, setOpen] = useState(true);
  const { radioSelection, setRadioSelection } = useContext(SearchContext);

  const handleCheckBoxChange = (event) => {
    console.log(event);
  };

  const handleRadioBoxChange = (event) => {
    setRadioSelection(event.target.value);
  };

  return (
    <div className={`${className} ${open ? "open" : ""}`}>
      <span className="title" onClick={() => setOpen(!open)}>
        Filter & Sort ...
      </span>
      <Filter className="filter" onClick={() => setOpen(!open)} />
      <div className="on-open-container">
        <div className="sort-container">
          <div className="radio-field">
            <input
              type="radio"
              name="sortBy"
              value={RADIO_BUTTONS.best_match}
              id="best-match"
              checked={radioSelection === RADIO_BUTTONS.best_match}
              onChange={handleRadioBoxChange}
            />
            <label htmlFor="best-match">Best Match</label>
          </div>
          <div className="radio-field">
            <input
              type="radio"
              name="sortBy"
              value={RADIO_BUTTONS.most_stars}
              id="most-stars"
              checked={radioSelection === RADIO_BUTTONS.most_stars}
              onChange={handleRadioBoxChange}
            />
            <label htmlFor="most-stars">Most Stars</label>
          </div>
        </div>
        <hr />
        <div className="filter-container">
          <p>Language</p>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value="Javascript"
              id="javascript"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="javascript">Javascript</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value="PHP"
              id="php"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="php">PHP</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value="Java"
              id="java"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="java">Java</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value="C++"
              id="c++"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="c++">C++</label>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

SearchBarCriteria.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.instanceOf(ThemeContext),
};

SearchBarCriteria.defaultProps = {
  className: "",
};

export default styled(SearchBarCriteria)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 225px;
  min-height: 50px;
  height: 50px;
  padding: 12px 20px;
  border: 4px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow: hidden;

  &.open {
    min-height: 300px;

    .title {
      /* display: none; */
      transition-delay: unset;
      opacity: 0;
    }

    .filter {
      transform-origin: top;
      transform: scaleY(0.5);
    }

    .on-open-container {
      opacity: 1;
    }
  }

  .on-open-container {
    transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
  }

  .title {
    transition-delay: 0.4s;
    opacity: 1;
    cursor: pointer;
  }

  .filter {
    position: absolute;
    top: 12px;
    right: 20px;
    max-height: 16px;
    cursor: pointer;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .radio-field,
  .checkbox-field {
    display: flex;
    align-items: center;
    height: 30px;

    label {
      cursor: pointer;
      padding-left: 10px;
    }

    input {
      cursor: pointer;
      margin: 0;

      &:after {
        content: "";
        visibility: visible;
        display: inline-block;
        position: relative;
        top: -2px;
        left: -1px;
        width: 100%;
        height: 100%;
        border: 2px solid black;
        background-color: white;
      }
    }

    input[type="radio"] {
      &:after {
        border-radius: 100%;
      }

      &:checked:after {
        background-color: ${(props) => props.theme.golden};
      }
    }

    input[type="checkbox"] {
      &:checked:after {
        background-color: ${(props) => props.theme.mint};
      }
    }
  }

  hr {
    width: 95%;
    border-radius: 1px;
  }
`;
