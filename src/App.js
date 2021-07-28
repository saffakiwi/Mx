
import './App.css';
import React from 'react';
import Homepage from './componentshm/components/home.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Projects from './Project.js';
import AppDrawer from './componentssp/appDrawer';
import ProView from './componentspf/proView'
import { useEffect, useState } from "react"
import axios from "axios"
import TabProgressTracker from './componentssp/tabProgressTracker';
import TabStudentProfiles from './componentssp/tabStudentProfiles';
import Dashboard from './Drawer.js';

function App() {
  const [users, setUsers] = useState([])
  const [userInfo, setUserInfo] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:4001/users')
    .then((res) => {
      setUsers(res.data)
    })
    .then('users: ' + users)

  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path='/dashboard'>
          <AppDrawer/>
          </Route>
            <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

