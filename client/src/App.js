import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import AppDrawer from "./components/appDrawer"
import Sample from "./components/sample"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      setUsers(response.data)
    })
  }, [])

  return (
    <div className="App">
      {/* {users.map((user) => {
        return (
          <div>
            <h1 key={user.id}>{user.first_name}</h1>
            <img src={user.profile_pic} alt="sample pic"></img>
          </div>
        )
      })} */}
      <AppDrawer user={users} />
    </div>
  )
}
export default App
