import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import {
  SearchContext,
  RADIO_BUTTONS,
  CHECKBOX_BUTTONS,
} from "../contexts/SearchContext";

function SearchBarCriteria({ className }) {
  const [open, setOpen] = useState(true);
  const {
    radioSelection,
    setRadioSelection,
    toggleCheckboxSelection,
  } = useContext(SearchContext);

  const handleCheckBoxChange = (event) => {
    const { id: key } = event.target;
    toggleCheckboxSelection(key);
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
              value={CHECKBOX_BUTTONS.javascript}
              id="javascript"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="javascript">{CHECKBOX_BUTTONS.javascript}</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value={CHECKBOX_BUTTONS.php}
              id="php"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="php">{CHECKBOX_BUTTONS.php}</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value={CHECKBOX_BUTTONS.java}
              id="java"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="java">{CHECKBOX_BUTTONS.java}</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value={CHECKBOX_BUTTONS.c_plus_plus}
              id="c_plus_plus"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="c++">{CHECKBOX_BUTTONS.c_plus_plus}</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value={CHECKBOX_BUTTONS.html}
              id="html"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="html">{CHECKBOX_BUTTONS.html}</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value={CHECKBOX_BUTTONS.python}
              id="python"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="python">{CHECKBOX_BUTTONS.python}</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value={CHECKBOX_BUTTONS.css}
              id="css"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="css">{CHECKBOX_BUTTONS.css}</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value={CHECKBOX_BUTTONS.ruby}
              id="ruby"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="ruby">{CHECKBOX_BUTTONS.ruby}</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="filterBy"
              value={CHECKBOX_BUTTONS.c}
              id="c"
              defaultChecked
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="c">{CHECKBOX_BUTTONS.c}</label>
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
    min-height: 450px;

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
