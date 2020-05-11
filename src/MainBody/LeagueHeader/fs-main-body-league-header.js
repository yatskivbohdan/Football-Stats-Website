import React from 'react'

import { NavLink } from 'react-router-dom'

import './fs-main-body-league-header.css'

export default function LeagueHeader ({id, toggleSideBar}) {
  return (
    <nav className="league-header-container">
      <ul className="menu">
        <li>
          <button className="menu-button" onClick={() => toggleSideBar()}><div className="menu-item-content">Teams</div></button>
        </li>
        <li>
          <NavLink className="menu-item" activeClassName = "header-menu-selected" to={"/" + id}><div className="menu-item-content">Overview</div></NavLink>
        </li>
        <li >
          <NavLink className="menu-item" to={"/" + id + "/games"} activeClassName="header-menu-selected"><div className="menu-item-content">Matches</div></NavLink>
        </li>
      </ul>
    </nav>
  );
}
