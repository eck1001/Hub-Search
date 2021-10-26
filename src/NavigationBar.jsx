import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import styled from '@emotion/styled';
import Routes from './Routes';

function NavigationBar() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default styled(NavigationBar)``;
