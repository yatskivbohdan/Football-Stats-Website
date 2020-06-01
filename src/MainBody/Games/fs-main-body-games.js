import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import LiveImg from "../../assets/live.svg"
import './fs-main-body-games.css'



function createData(matchday, date, status, homeTeam, awayTeam, homeGoals, awayGoals) {
  return {matchday, date, status, homeTeam, awayTeam, homeGoals, awayGoals};
}

function parseRows(result) {
  let rows = [];
  for (let match of result.matches) {
      rows.push(createData(match.matchday, match.utcDate, match.status, match.homeTeam.name, match.awayTeam.name, match.score.fullTime.homeTeam, match.score.fullTime.awayTeam));
  }  
  return rows;
}


export default class LeagueGames extends React.Component{
  constructor({id, md}) {
    super();
    this.state = {
      id: id,
      matchday: md,
      matches: [],
      options: (id=="BL1" ? this.createOptions(34) : this.createOptions(38)),
      isLoaded: false,
    };
  }

  createOptions(num) {
    var options = [];
    for (var i = 1; i <= num; i++) {
      options.push({value: i, display: i});
    }
    return options;
  }

  filtermatchday() {
    var matchlist = [];
    for(let match of this.state.matches) { 
      if (match.matchday==this.state.matchday)
        matchlist.push(match);
        
    }
    return matchlist;
  }

  componentDidMount() {
    fetch('http://api.football-data.org/v2/competitions/' + this.state.id + '/matches', { 
      headers: new Headers({
			'X-Auth-Token': 'f197b7b02f4244c4b7080c704dbf4a25'
		}), 
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          matches: parseRows(result),
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
      const matches = this.filtermatchday();
      return(
        <div className="match-list">
         <div className="head">
           <p>Select matchday</p>
          <select className="select-matchday"
              value={this.state.matchday}
              onChange={e =>
                this.setState({
                  matchday: e.target.value,})
              }>
              {this.state.options.map(option => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.display}
                </option>
              ))}
            </select> 
              <p className="matchday-heading">Matchday {this.state.matchday}</p>
              <p className="date">{this.state.isLoaded && matches[0].date.slice(0, 10)}</p>
           </div>
          <TableBody className="match-table">
            {this.state.isLoaded && matches.map((row)=>
              
              (
                <TableRow key={row.name}>
                  <TableCell className="team" align="right">{row.homeTeam}</TableCell>
                  <TableCell className="score" align="center">{row.homeGoals}</TableCell>
                  <TableCell className="score" align="center">{":"}</TableCell>
                  <TableCell className="score" align="center">{row.awayGoals}</TableCell>
                  <TableCell className="team" align="left">{row.awayTeam}</TableCell>
                  {(row.status == "IN_PLAY" || row.status == "PAUSED") && <TableCell className="live" align="left"><img src={LiveImg}/></TableCell>}
                  </TableRow>
              ))}
              
            </TableBody>
          
          </div>
        
      );
  }
}
