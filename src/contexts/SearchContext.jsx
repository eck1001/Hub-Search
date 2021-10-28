/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchContext = React.createContext({});

const RADIO_BUTTONS = {
  best_match: "Best_Match",
  most_stars: "Most_stars",
};

const CHECKBOX_BUTTONS = {
  c_plus_plus: "C++",
  java: "Java",
  php: "PHP",
  javascript: "JavaScript",
  html: "HTML",
  python: "python",
  css: "CSS",
  ruby: "Ruby",
  c: "C",
};

const CHECKBOX_INITIAL_STATE = {
  c_plus_plus: true,
  java: true,
  php: true,
  javascript: true,
  html: true,
  python: true,
  css: true,
  ruby: true,
  c: true,
};

const SearchContextProvider = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [radioSelection, setRadioSelection] = useState(
    RADIO_BUTTONS.best_match
  );
   /** NOTE: When using objects to update state, you must assign a new object not a mutated original
   * To update individual properties use the spread operator
   */
  const [checkboxSelection, setCheckboxSelection] = useState(
    CHECKBOX_INITIAL_STATE
  );

  const toggleCheckboxSelection = checkboxKey => {
    const prevState = checkboxSelection[checkboxKey];

    const nextCheckboxSelection = { ...checkboxSelection}; // cloned object
    nextCheckboxSelection[checkboxKey] = !prevState;

    setCheckboxSelection(nextCheckboxSelection);
  }

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        radioSelection,
        setRadioSelection,
        checkboxSelection,
        setCheckboxSelection,
        toggleCheckboxSelection
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

SearchContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/** HOC - for exporting a pre-wrapped component.
 *  Allows context consumption on the same component that created the provider.
 *  EX:
 *      export default withSearchContext(MyComponentUsingThisContext);
 */
const withSearchContext = (Component) => (props) =>
  (
    <SearchContextProvider>
      <Component {...props} />
    </SearchContextProvider>
  );

export {
  SearchContext,
  SearchContextProvider,
  withSearchContext,
  RADIO_BUTTONS,
  CHECKBOX_BUTTONS,
};
