import React from 'react';

import { LeagueLogo, LeagueName } from './fs-header-menu-item';
import PlLogo from '../assets/header-icons/pl.png'
import LaLigaLogo from '../assets/header-icons/laliga.png'
import BlLogo from '../assets/header-icons/bundes.png'
import SerieALogo from '../assets/header-icons/sa.png'
import Ligue1Logo from '../assets/header-icons/ligue1.png'

export default class HeaderMenu extends React.Component{
    constructor() {
        super();

        this.state = {
            items: [
                {
                    id: 0,
                    text: 'Home',
                    href: "/"

                    
                },{
                    id: 1,
                    text: 'EPL',
                    logo: PlLogo,
                    href: "/epl"
                }, {
                    id: 2,
                    text: 'LaLiga',
                    logo: LaLigaLogo,
                    href: "/la"
                }, {
                    id: 3,
                    text: 'Bundesliga',
                    logo: BlLogo,
                    href: "/bl"
                
                }, {
                    id: 4,
                    text: 'Serie A',
                    logo: SerieALogo,
                    href: "/sa"
                },{
                    id: 5,
                    text: 'Ligue 1',
                    logo: Ligue1Logo,
                    href: "/li1"
            },

        ]}
    }

    render() {
        return (
            <div className="header-menu">
                  {this.state.items.map((item)=> (
                    <ul className="header-menu-league">
                        <LeagueLogo logo={item.logo}></LeagueLogo>
                        <LeagueName text={item.text} href={item.href}></LeagueName>
                    </ul>
                    
            ))}
            </div>
                   
                    
         
        );
    }
};