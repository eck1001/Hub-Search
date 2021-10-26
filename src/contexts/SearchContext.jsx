/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchContext = React.createContext({});

const SearchContextProvider = props => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
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
const withSearchContext = Component => props => (
  <SearchContextProvider>
    <Component {...props} />
  </SearchContextProvider>
);

export { SearchContext, SearchContextProvider, withSearchContext };
