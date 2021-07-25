import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import AppDrawer from "./componentssp/appDrawer"
import ProView from './componentspf/proView.js'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  useParams,
  useRouteMatch
} from "react-router-dom";

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
    <div className="App">
     <Router>
        <Switch>
          <Route path='/users/:user_id' exact component={ProView} />
          <Route path='/'>
            <AppDrawer user={users}/>
          </Route>
        </Switch>
      </Router>
  
    </div>
  )
}
export default App
