import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
<<<<<<< HEAD:src/dashBoard.js
import AppDrawer from './componentssp/appDrawer';
import ProView from './componentspf/proView.js'
=======
import AppDrawer from "./componentssp/appDrawer"
import ProView from '../componentspf/proView'
>>>>>>> e3d638a7d59501f5c8345c54df1b36452d7b9eef:src/dashBoard123.js
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  useParams,
  useRouteMatch
} from "react-router-dom";

function DashBoard() {
  const [users, setUsers] = useState([])
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4001/users")
    .then((response) => {
      setUsers(response.data)
    })

  }, )

  return (
    <div>

     <Router>
        <Switch>
          <Route path='/users/:user_id' exact component={ProView} />
          <Route path='/progresstracker'>
            <AppDrawer user={users}/>
          </Route>
        </Switch>
      </Router>
  
    </div>
  )
}
export default DashBoard 