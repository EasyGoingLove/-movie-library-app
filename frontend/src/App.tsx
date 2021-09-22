import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';

import Header from './components/Header/Header';
import Movies from './pages/Movies/Movies';

const App = () => {
  return (
    <Router>
      <Header/> 
      <Switch>
          <Route path="/searchedMovies">
            <Movies/>
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
