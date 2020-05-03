import React from 'react';

import './App.css';
import Header from'./Header/fs-header'
import MainBody from './MainBody/fs-main-body'
import Footer from './Footer/fs-footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  );
}

export default App;
