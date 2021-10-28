import { Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy, useContext } from 'react';
import { ThemeContext } from "./contexts/ThemeContext";

/** NOTE: The code split occurs on the import path.
 * Importing multiple components from the same index.js file will ONLY create 1 bundle.
 * Importing a component from `index.js` results in an promise not a dynamic import, causing an error.
 * Lazy loading will allow Webpack to Code Split, this is easily done on routes.
 */
const Details = lazy(() => import('./pages/Details'));
const Search = lazy(() => import('./pages/Search'));

export default function Routes() {
  const theme = useContext(ThemeContext);
  /**
   * Switch is used to prevent multiple route hits (when exact isn't used).
   * Route ordering matters, more specific routes should be first in the switch.
   */
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/details/:id">
          <Details theme={theme} />
        </Route>
        <Route exact path="/">
          <Search theme={theme} />
        </Route>
      </Switch>
    </Suspense>
  );
}
