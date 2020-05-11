import React from 'react';

import SearchLogo from '../../assets/header-icons/search.png';
import './fs-header-search.css';

export default class Search extends React.Component {
  render() {
    return(
      <div className="search-container">
        <input className="search-form" type="text" placeholder="Search.."></input>
        <img className="search-icon" src={SearchLogo}></img>
      </div>
    );
  }
}
