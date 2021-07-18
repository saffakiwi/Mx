import React from "react"
import "../tabProgressTracker.css"
import { Card, Container, Grid } from "@material-ui/core"

export default function TabStudentProfiles(props) {
  return (
    <div className="mainDiv">
      <div className="innerContainer3">
        <div className="studentOuterDiv">
          {props.user.map((user) => {
            return (
              <Grid>
                <Card className="studentInnerDiv" key={user.user_id}>
                  <img src={user.profile_pic} alt="student info" className="studentPic" />
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
