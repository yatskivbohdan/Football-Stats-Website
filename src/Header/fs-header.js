import React from 'react';

import './fs-header.css'
import HeaderMenu from './fs-header-menu'
import Search from './fs-header-search'


export default class Header extends React.Component {
    constructor() {
        super();

    }
    
    render() {
        return (
            <div className="fs-header">
               <div className="header-conatiner">
                    <HeaderMenu></HeaderMenu>
               </div>
               <Search></Search>
            </div>
        );
    }
}
