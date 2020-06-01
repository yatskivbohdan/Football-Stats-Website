import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './fs-main-body-scorers.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { getScorers } from '../../actions/creators'

class LeagueScorers extends React.Component {
  // constructor({id}) {
  //   super();
  //   this.state = {
  //     id: id,
  //     error: null,
  //     isLoaded: false,
  //     rows: [],
  //   };
  // }

  componentDidMount() {
    fetch('http://api.football-data.org/v2/competitions/' + this.props.id + '/scorers', {  
      headers: new Headers({
      'X-Auth-Token': 'f197b7b02f4244c4b7080c704dbf4a25'
    }), 
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.props.getScorers(result);
      }
    );
  }
  
  render() {
    const {scorers} = this.props;
    return (
      <TableContainer className="scorers-container" >
        <p>Top scorers</p>
        <Table className="scorers-table" size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
            <TableCell align="left">#</TableCell>
            <TableCell>Player</TableCell>
              <TableCell align="left">Team</TableCell>
              <TableCell align="left">Goals&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scorers.map((row) => (
              <TableRow key={row.name}>
                  <TableCell align="left">{row.position}</TableCell>
                <TableCell align="left">{row.player}</TableCell>
                <TableCell align="left">{row.team}</TableCell>
                <TableCell align="center">{row.goals}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  scorers: state.scorers,
});

const mapDispatchToProps = (dispatch) => ({
  getScorers: (result) => dispatch(getScorers(result))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueScorers)