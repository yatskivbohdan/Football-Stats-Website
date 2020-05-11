import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './fs-main-body-standings.css';

function createData(position, logo,team, games, win, draw, loss, scored, missed, points) {
  return {position, logo, team ,games, win, draw, loss, scored, missed, points };
}

function parseRows(result) {
  var rows = [];
  for (let team of result.standings[0].table){
    rows.push(createData(team.position, team.team.crestUrl, team.team.name, team.playedGames, team.won, team.draw, team.lost, team.goalsFor, team.goalsAgainst, team.points))
  } 
  return rows;
}

export default class LeagueStandings extends React.Component{
  constructor({id}) {
    super();
    this.state = {
      id: id,
      error: null,
      isLoaded: false,
      rows: [],
    };
  }

  componentDidMount() {
    fetch('http://api.football-data.org/v2/competitions/' + this.state.id + '/standings', { 
      method: 'get', 
      headers: new Headers({
			'X-Auth-Token': 'f197b7b02f4244c4b7080c704dbf4a25'
		}), 
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          rows: parseRows(result),
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
      <TableContainer className="standings-container" >
        <p>Standings</p>
        <Table className="standings-table" size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
            <TableCell align="left">#</TableCell>
            <TableCell>Teams</TableCell>
              <TableCell align="right">MP</TableCell>
              <TableCell align="right">W&nbsp;</TableCell>
              <TableCell align="right">D&nbsp;</TableCell>
              <TableCell align="right">L&nbsp;</TableCell>
              <TableCell align="center">G&nbsp;</TableCell>
              <TableCell align="right">Pts&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow key={row.name}>
                  <TableCell align="left">{row.position}</TableCell>
                <TableCell component="th" scope="row">
                  <div classname="th-content">
                    <img className="standings-logo" src={row.logo}></img>
                    <a>&nbsp;&nbsp;{row.team}</a>
                  </div>
                </TableCell>
                <TableCell align="right">{row.games}</TableCell>
                <TableCell align="right">{row.win}</TableCell>
                <TableCell align="right">{row.draw}</TableCell>
                <TableCell align="right">{row.loss}</TableCell>
                <TableCell align="center">{row.scored}:{row.missed}</TableCell>
                <TableCell align="right">{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
