import { GET_STANDINGS, GET_SCORERS } from './types'

const getStandings = (result) => {
    return {
        type: GET_STANDINGS,
        payload: parseStandingsRows(result),
    };
};

const getScorers = (result) =>  {
  return {
      type: GET_SCORERS,
      payload: parseScorersRows(result),
  };
};

function createScorersData(position, player, team, goals) {
  return {position, player, team, goals};
}

function parseScorersRows(result) {
  var rows = [];
  let count = 1;
  for (let player of result.scorers) {
    rows.push(createScorersData(count, player.player.name, player.team.name, player.numberOfGoals));
    count ++;
  } 
  return rows;
}

function createStandingsData(position, logo,team, games, win, draw, loss, scored, missed, points) {
  return {position, logo, team ,games, win, draw, loss, scored, missed, points };
}

function parseStandingsRows(result) {
  var rows = [];
  for (let team of result.standings[0].table){
      rows.push(createStandingsData(team.position, team.team.crestUrl, team.team.name, team.playedGames, team.won, team.draw, team.lost, team.goalsFor, team.goalsAgainst, team.points))
  } 
return rows;
}


export { getStandings, getScorers };