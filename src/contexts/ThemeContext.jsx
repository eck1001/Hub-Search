/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({});

const ThemeContextProvider = props => {
  const [lightTheme, setLightTheme] = useState(true);

  const borderColor = '#000000';
  const golden = '#FFE600';
  const mint = '#00FFB2';

  return (
    <ThemeContext.Provider
      value={{
        lightTheme,
        setLightTheme,
        borderColor,
        golden,
        mint,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/** HOC - for exporting a pre-wrapped component.
 *  Allows context consumption on the same component that created the provider.
 *  EX:
 *      export default withThemeContext(MyComponentUsingThisContext);
 */
const withThemeContext = Component => props => (
  <ThemeContextProvider>
    <Component {...props} />
  </ThemeContextProvider>
);

export { ThemeContext, ThemeContextProvider, withThemeContext };
