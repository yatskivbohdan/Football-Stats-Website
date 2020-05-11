import React from 'react';

import LeagueLogo from '../LeagueLogo/fs-header-league-logo';
import LeagueName from '../LeagueName/fs-header-league-name';
import PlLogo from '../../assets/header-icons/pl.png';
import LaLigaLogo from '../../assets/header-icons/laliga.png';
import BlLogo from '../../assets/header-icons/bundes.png';
import SerieALogo from '../../assets/header-icons/sa.png';
import Ligue1Logo from '../../assets/header-icons/ligue1.png';
import { NavLink } from 'react-router-dom';
import './fs-header-menu.css';

export default class HeaderMenu extends React.Component{
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 0,
          text: 'Home',
          href: "/home"    
        }, 
        {
          id: 1,
          text: 'EPL',
          logo: PlLogo,
          href: "/epl"
        }, 
        {
          id: 2,
          text: 'LaLiga',
          logo: LaLigaLogo,
          href: "/la"
        }, 
        {
          id: 3,
          text: 'Bundesliga',
          logo: BlLogo,
          href: "/bl"
            
        }, 
        {
          id: 4,
          text: 'Serie A',
          logo: SerieALogo,
          href: "/sa"
        },
        {
          id: 5,
          text: 'Ligue 1',
          logo: Ligue1Logo,
          href: "/li1"
        },
      ]
    }
  }

  render() {
    return (
      <div className="header-menu"> 
        {this.state.items.map((item)=> (
          <NavLink className="header-menu-league-container" activeClassName="selected" to={item.href}>
            <ul className="header-menu-league">
              <LeagueLogo logo={item.logo}></LeagueLogo>
              <LeagueName text={item.text} href={item.href}></LeagueName>
            </ul>
          </NavLink>
        ))}
      </div>
    );
  }
}
