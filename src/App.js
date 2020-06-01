import React from 'react';

import './App.css';
import Header from'./Header/fs-header';
import MainBody from './MainBody/fs-main-body';
import Footer from './Footer/fs-footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import parseReducer from './reducers/parseReducer'

let store = createStore(parseReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header></Header>
          <MainBody></MainBody>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}


export default App;
