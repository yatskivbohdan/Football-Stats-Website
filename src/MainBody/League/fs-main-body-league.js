import React from 'react';

import LeagueStandings from '../Standings/fs-main-body-standings';
import LeagueScorers from '../Scorers/fs-main-body-scorers'; 
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import SideNav from '../SideNav/fs-main-body-sidenav';
import LeagueHeader from '../LeagueHeader/fs-main-body-league-header';
import './fs-main-body-league.css';
import { Route, Switch} from 'react-router-dom';
import LeagueGames from '../Games/fs-main-body-games';

export default class League extends React.Component {
  constructor({id, name, apiId, twitter}) {
    super();
    this.state = {
      id: id,
      name: name,
      apiId: apiId,
      twitter: twitter,
      sidebar : false,
      currMatchday: 1,
    };
    this.toggleSideBar = this.toggleSideBar.bind(this);               
  }
    
  toggleSideBar() {
    this.setState({sidebar: !this.state.sidebar});
  }

  render() {
    return (
      <div className="main-body" id={this.state.id}>
        <LeagueHeader id={this.state.id} league={this} toggleSideBar={this.toggleSideBar}></LeagueHeader>
          <div className="main-container">
            {this.state.sidebar && <SideNav id={this.state.id} apiId={this.state.apiId}></SideNav>}
            <Switch>
              <Route path={"/" + this.state.id + "/games"} component={()=>
                <LeagueGames id={this.state.apiId} md={this.state.currMatchday}></LeagueGames>
              }/>
              <Route path={"/" + this.state.id } component={() =>
                <div className="league-overview">
                  <LeagueStandings id={this.state.apiId}/>
                  <div className="outer-container">
                    <div className="right-container">
                      <div className="twitter-embed">
                        <p>Latest news</p>
                        <TwitterTimelineEmbed
                          sourceType="profile"
                          screenName={this.state.twitter}
                          theme="dark"
                          options={{height: 400}}
                        />
                      </div>
                      <LeagueScorers id={this.state.apiId}/>
                    </div>
                  </div>
                </div>}
              />
            </Switch>
          </div>
      </div>
    );
  }
}
