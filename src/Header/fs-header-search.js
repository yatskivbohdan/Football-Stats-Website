import React from 'react';

import SearchLogo from '../assets/header-icons/search.png'

export default class Search extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="search-container">
                <input className="search-form" type="text" placeholder="Search.."></input>
                <img className="search-icon" src={SearchLogo}></img>
            </div>
        );
    }
}