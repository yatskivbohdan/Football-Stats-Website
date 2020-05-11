import React from 'react';

import PL from '../../assets/start-page-back/epl.png'
import LA from '../../assets/start-page-back/laliga.png'
import BL1 from '../../assets/start-page-back/bundes.png'
import SA from '../../assets/start-page-back/sa.png'
import FL1 from '../../assets/start-page-back/ligue1.png'

import { Link } from 'react-router-dom';
import './fs-start-page.css';


export default class StartPage extends React.Component {
  constructor({leagues}){
    super();
    this.state = {leagues: leagues};          
  }

  render() {
    return(
      <div className="start-page">
        <Link className="league-back-container" to="/epl"><img className="league-back" src={PL}></img></Link>
        <Link className="league-back-container" to="/la"><img className="league-back" src={LA}></img></Link>
        <Link className="league-back-container" to="/bl"><img className="league-back" src={BL1}></img></Link>
        <Link className="league-back-container" to="/sa"><img className="league-back" src={SA}></img></Link>
        <Link className="league-back-container" to="/li1"><img className="league-back" src={FL1}></img></Link>
      </div>
    );
  }
}
