import "./App.css"
import React from "react"
import Homepage from "./componentshm/components/home.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import MyMain from "../src/componentssp/myMain"
import ProView from "./componentspf/proView"
import { useEffect, useState } from "react"
import axios from "axios"
import TabProgressTracker from "./componentssp/tabProgressTracker"

function App() {
  const [users, setUsers] = useState([])
  // const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4001/users")
      .then((res) => {
        setUsers(res.data)
      })
      .then("users: " + users)
  }, [])

  return (
    <Router>
      <Switch>
         <Route path="/users/:user_id" exact component={ProView} />
        <Route exact path="/dashboard">
          <MyMain users={users} />
          <TabProgressTracker />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
