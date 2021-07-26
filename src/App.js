
import './App.css';
import React from 'react';
import Homepage from './componentshm/components/home.js'
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom'
import Projects from './Project.js';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/projects">
          <Projects/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

