
import './App.css';
import React from 'react';
import Homepage from './componentshm/components/home.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Projects from './Project.js';
import AppDrawer from './componentssp/appDrawer';
import ProView from './componentspf/proView'
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [users, setUsers] = useState([])
  const [userInfo, setUserInfo] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:4001/users")
    .then((response) => {
      setUsers(response.data)
    })

  }, )

  return (
    <Router>
      <Switch>
        <Route path='/users/:user_id' exact component={ProView} />
        <Route path='/progresstracker'>
          <AppDrawer user={users} /> 
            </Route> 
            <Route exact path="/projects">
          <Projects />
        </Route>
            <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

