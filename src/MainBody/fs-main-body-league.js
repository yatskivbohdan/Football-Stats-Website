import React from 'react';
import LeagueStandings from './fs-main-body-standings';

export default class League extends React.Component{
    constructor({id}){
        super();
        this.state = {
          id: id,
        };
      }
    render() {
        return (
            <div className="main-body">
                <LeagueStandings id={this.state.id}/>
                <div className="league-scorers"></div>
            </div>
            
        );
     }
}
