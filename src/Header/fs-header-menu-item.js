import React from 'react';

const LeagueLogo =({logo}) => (
    <li className="header-menu-league-part">
        <img className="league-logo" src={logo}></img>
    </li>
);

const LeagueName =({text, href}) => (
    <li className="header-menu-league-part">
        <a className="league-name" href={href}>{text}</a>
    </li>
);

export{LeagueLogo};
export{LeagueName}
