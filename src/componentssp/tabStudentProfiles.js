import React from "react"
import "../tabProgressTracker.css"
import { Card, Grid } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


export default function TabStudentProfiles() {
  const history = useHistory()
  const [users, setUsers] = useState([])
  // const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4001/users").then((response) => {
      setUsers(response.data)
    })
  } )
  // -------------------------------------
  const handleChange = (id) => {
    axios.get("http://localhost:4001/users", {}).then((res) => {
      history.push("/users/" + id)
      console.log(id)
    }, )
  }
  // ------------------------
  return (
    <div className="mainDiv">
      <div className="topButtons">
        <img
          src="../photos/takeScreenshot.png"
          alt="button for take screenshot"
          className="imgWidth"
        />
        <img src="../photos/helpCenter.png" alt="button for take help centre" className="imgWidth" />
        <img
          src="../photos/moreProjects.png"
          alt="button for take more projects"
          className="imgWidth"
        />
      </div>
      <div className="innerContainer3">
        <div className="studentOuterDiv">
          {users.map((users) => {
            return (
              <Grid>
                <Card className="studentInnerDiv" key={users.user_id}>
                  <a>
                    <img
                      src={'/' + users.profile_pic}
                      onClick={() => handleChange(users.user_id)}
                      alt="student info"
                      className="studentPic"
                    />
                  </a>
                  <h5 className="studentName">
                    {users.first_name.toUpperCase() + " "}
                    {users.last_name.toUpperCase()}
                  </h5>
                </Card>
              </Grid>
            )
          })}
        </div>
      </div>
    </div>
  )
}
