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
          <Route path="/searchedMovies" render={(props:any) => <Movies {...props}/>}/>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/" component={Home}/>
        </Switch>

    </Router>
  );
}

export default App;
