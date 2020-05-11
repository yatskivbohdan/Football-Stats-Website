import React from 'react';

import './fs-header.css';
import HeaderMenu from './HeaderMenu/fs-header-menu';
import Search from './Search/fs-header-search';

export default class Header extends React.Component {
  render() {
    return (
      <header className="fs-header">
        <div className="header-conatiner">
          <HeaderMenu></HeaderMenu>
        </div>
        <Search></Search>
      </header>
    );
  }
}
