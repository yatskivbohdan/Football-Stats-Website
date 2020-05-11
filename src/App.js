import React from 'react';

import './App.css';
import Header from'./Header/fs-header';
import MainBody from './MainBody/fs-main-body';
import Footer from './Footer/fs-footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <MainBody></MainBody>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
