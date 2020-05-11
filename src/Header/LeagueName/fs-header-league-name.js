import React from 'react';

import './fs-header-league-name.css';

const LeagueName =({text, href}) => (
  <li className="header-menu-league-part">
    <p className="league-name" >{text}</p>
  </li>
);

export default LeagueName;
