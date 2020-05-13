import React from 'react';

import {PieChart} from 'react-minimal-pie-chart';
import './fs-main-body.css'
import League from './fs-main-body-league'
import StartPage from './fs-start-page'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
 

 


export default class MainBody extends React.Component {
    constructor() {
        super();

        this.state={
            page: 0,

        }
    }
    
    render() {
        return (   
            <div className="main-body-container">
                <Router>
                    <Switch>    
                        <Route path="/epl" component={()=><League id="PL"/>}/>
                        <Route path="/la" component={()=><League id="PD"/>}/>
                        <Route path="/bl" component={()=><League id="BL1"/>}/>
                        <Route path="/sa" component={()=><League id="SA"/>}/>
                        <Route path="/li1" component={()=><League id="FL1"/>}/>
                        <Route path="/" component={StartPage}></Route>
                        
                    </Switch>
                </Router>
            </div>
            );
              
    }
}


/*<div className="pie-chart">
//<PieChart data={data}/>
const data=[
    {
    color: '#FFD000',
    title: 'Draw',
    value: 10
    },
    {
    color: '#C13C37',
    title: 'Loss',
    value: 15
    },
    {
    color: '#228B22',
    title: 'Win',
    value: 20
    }
];
//</div>
//<LeagueScorers></LeagueScorers>*/