import React from 'react';

import './fs-main-body.css';
import League from './League/fs-main-body-league';
import StartPage from './StartPage/fs-start-page';

import {Switch, Route} from 'react-router-dom';
 
export default class MainBody extends React.Component {
  constructor() {
    super();
    this.state = {
      leagues: [
        {
          id: "epl",
          name: "Premier League(England)",
          twitter: "premierleague",
          apiId: "PL"
        },
        {
          id: "la",
          name: "La Liga(Spain)",
          twitter: "LaLigaEN",
          apiId: "PD"
        },
        {
          id: "bl",
          name: "Bundesliga(Germany)",
          twitter: "Bundesliga_EN",
          apiId: "BL1"
        },
        {
          id: "sa",
          name: "Serie A(Italy)",
          twitter: "SerieA_EN",
          apiId: "SA"
        },
        {
          id: "li1",
          name: "Ligue 1(France)",
          twitter: "Ligue1_ENG",
          apiId: "FL1"
        },
      ]
    }
  }
  
  render() {
    return (   
      <div className="main-body-container">
        <Switch> 
          {this.state.leagues.map((league)=> (<Route path={"/" + league.id} component={()=><League id={league.id} name={league.name} apiId={league.apiId} twitter={league.twitter} img={league.img}/>}/>))}   
          <Route path="/" component={()=><StartPage leagues={this.state.leagues}/>}/>      
        </Switch>
      </div>
    );         
  }
}
