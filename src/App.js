import "./App.css"
import React from "react"
import Homepage from "./componentshm/components/home.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Projects from "./Project.js"
import MyMain from "../src/componentssp/myMain"
import ProView from "./componentspf/proView"
import { useEffect, useState } from "react"
import axios from "axios"
import TabProgressTracker from './componentssp/tabProgressTracker';
import TabStudentProfiles from './componentssp/tabStudentProfiles';
import Dashboard from './Drawer.js';

function App() {
  const [users, setUsers] = useState([])
<<<<<<< HEAD
  const [userInfo, setUserInfo] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:4001/users')
    .then((res) => {
      setUsers(res.data)
    })
    .then('users: ' + users)

=======
  // const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4001/users")
      .then((res) => {
        setUsers(res.data)
      })
      .then("users: " + users)
>>>>>>> d260c3900504f872311af75ac4f6612f340b7793
  }, [])

  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route exact path='/dashboard'>
          <AppDrawer/>
          </Route>
            <Route exact path="/">
=======
        <Route path="/users/:user_id" exact component={ProView} />
        <Route exact path="/dashboard">
          <MyMain users={users} />
        </Route>
        <Route exact path="/">
>>>>>>> d260c3900504f872311af75ac4f6612f340b7793
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
