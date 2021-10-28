/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchContext = React.createContext({});

const RADIO_BUTTONS = {
  best_match: "Best_Match",
  most_stars: "Most_stars",
};

const SearchContextProvider = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [radioSelection, setRadioSelection] = useState(
    RADIO_BUTTONS.best_match
  );

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        radioSelection,
        setRadioSelection,
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
};
