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
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    axios
      .get("http://localhost:4001/users")
      .then((res) => {
        setUsers(res.data)
      })
      .then()
  }, [])

  return (
    <Router>
      <Switch>
         <Route path="/users/:user_id" exact component={ProView} />
        <Route exact path="/dashboard/:user_id">
          <MyMain users={users} />
        </Route>
        <Route exact path="/">
          <Homepage setCurrentUser={setCurrentUser}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
