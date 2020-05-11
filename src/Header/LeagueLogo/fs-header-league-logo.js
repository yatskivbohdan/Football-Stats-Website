import React from 'react';

import './fs-header-league-logo.css';

const LeagueLogo =({logo}) => (
  <li className="header-menu-league-part">
    <img className="league-logo" src={logo}></img>
  </li>
);

export default LeagueLogo;
