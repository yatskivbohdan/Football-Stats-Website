import React from 'react';

import PL from '../assets/start-page-back/epl.png'
import LA from '../assets/start-page-back/laliga.png'
import BL from '../assets/start-page-back/bundes.png'
import SA from '../assets/start-page-back/sa.png'
import L1 from '../assets/start-page-back/ligue1.png'


import './fs-main-body.css'


const StartPage = () => (
    <div className="start-page">
        <a className="league-back-container" href={"/epl"} ><img className="league-back" src={PL}></img></a>
        <a className="league-back-container" href={"/la"} ><img className="league-back" src={LA}></img></a>
        <a className="league-back-container" href={"/bl"} ><img className="league-back" src={BL}></img></a>
        <a className="league-back-container" href={"/sa"} ><img className="league-back" src={SA}></img></a>
        <a className="league-back-container" href={"/li1"} ><img className="league-back" src={L1}></img></a>
    </div>
    
    );

export default StartPage;