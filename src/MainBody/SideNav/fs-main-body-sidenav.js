import React from 'react';

import { Link } from 'react-router-dom';

import "./fs-main-body-sidenav.css";

function createData(name, logo, tla, website, founded, venue) {
  return {name, logo, tla, website, founded, venue};
}
  
function parseTeams(result) {
  var rows = [];
  for (let team of result.teams) {
    rows.push(createData(team.name, team.crestUrl, team.tla, team.website, team.founded, team.venue));
  } 
  return rows;
}

export default class SideNav extends React.Component{
  constructor({id, apiId}) {
    super();
    this.state = {
      id: id,
      apiId: apiId,
      error: null,
      isLoaded: false,
      teams: [],
    };       
  }

  componentDidMount() {
    fetch('http://api.football-data.org/v2/competitions/' + this.state.apiId + '/teams', { 
      headers: new Headers({
          'X-Auth-Token': 'f197b7b02f4244c4b7080c704dbf4a25'
        }), 
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          teams: parseTeams(result),
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }
    
  render() {
    return (
      <nav className="sidebar-container">
        <ul className="sidebar">
          {this.state.teams.map((team) => (
            <li>
              <Link className="sidebar-item" to={team.tla} title={team.name}>
                <div className="sidebar-item-content">
                  <img className="sidebar-logo" src={team.logo}></img>
                  <div className="sidebar-tla">{team.tla}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  } 
}
