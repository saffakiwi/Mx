
import './App.css';
import React from 'react';
import Homepage from './componentshm/components/home.js'
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom'
import Projects from './Project.js';
import AppDrawer from './componentssp/appDrawer.js';
import TabStudentProfiles from './componentssp/tabStudentProfiles';

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
        <Route exact path="/appDrawer">
          <AppDrawer/>
        </Route>
        <Route exact path="/studentProfiles">
          <TabStudentProfiles/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

