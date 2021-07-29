import "../tabProgressTracker.css"
import NumberButtons from "./numberButtons"
import { useState, useEffect } from "react"
import axios from "axios"

export default function TabProgressTracker() {
  const [users, setUsers] = useState([])
  // const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4001/users").then((response) => {
      setUsers(response.data)
    })
  },[])

  return (
    <>
      <div className="mainDiv">
        {/* --------Div for three buttons at top-------------- */}
        <div className="topButtons">
          <img
            src="/photos/takeScreenshot.png"
            alt="button for take screenshot"
            className="imgWidth"
          />
          <img
            src="/photos/helpCenter.png"
            alt="button for take help centre"
            className="imgWidth"
          />
          <img
            src="/photos/moreProjects.png"
            alt="button for take more projects"
            className="imgWidth"
          />
        </div>
        {/* div for inner container */}
        <div className="innerContainer2">
          <div className="innerContainer">
            <img src="/photos/beginnerCourse.png" alt="beginner course" style={{ width: "20%" }} />
            <span>
              <img src="/photos/exportIcon.png" alt="export icon"></img>
              <img src="/photos/exportSpreadSheet.png" alt="exportSpreadSheet" />
            </span>
          </div>

          {console.log(users)}
          {/* div for students */}
          {users.map((user) => {
            return (
              <div className="studentsDiv">
                {/* div for name and projects completed */}

                <div className="completedProjects">
                  <h4>
                    {user.first_name.toUpperCase() + " "}
                    {user.last_name.toUpperCase()}
                  </h4>
                  <h6>0/15 Projects Completed</h6>
                </div>

                {/* Insert Number Buttons here */}
                <NumberButtons num="1" />
                <NumberButtons num="2" />
                <NumberButtons num="3" />
                <NumberButtons num="4" />
                <NumberButtons num="5" />
                <NumberButtons num="6" />
                <NumberButtons num="7" />
                <NumberButtons num="8" />
                <NumberButtons num="9" />
                <NumberButtons num="10" />
                <NumberButtons num="11" />
                <NumberButtons num="12" />
                <NumberButtons num="13" />
                <NumberButtons num="14" />
                <NumberButtons num="15" />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}