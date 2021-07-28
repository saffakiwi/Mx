import React from "react"
import "../tabProgressTracker.css"
import { Card, Grid } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import ProView from "../componentspf/proView"


export default function TabStudentProfiles(props) {
  const history = useHistory()

  const handleClick = (id) => {
    history.push('/users/' + id)
  }

  return (
    <div className="mainDiv">
      <div className="innerContainer3">
        <div className="studentOuterDiv">
          {props.user.map((user) => {
            return (
              <Grid>
                <Card className="studentInnerDiv" key={user.user_id}>
                  <a><img src={user.profile_pic} onClick={() => handleClick(user.user_id)} alt="student info" className="studentPic" /></a>
                  <h5 className="studentName">
                    {user.first_name.toUpperCase() + " "}
                    {user.last_name.toUpperCase()}
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
