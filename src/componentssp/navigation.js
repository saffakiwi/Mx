import TabProgressTracker from "./tabProgressTracker"
import TabStudentProfiles from "./tabStudentProfiles"
import Projects from "../Project"
import React from "react"

export default function Navigation({ page }) {
  if (page === "b1") {
    return <TabProgressTracker />
  } else if (page === "b2") {
    return <TabStudentProfiles />
  } else if (page === "b3") {
    return <Projects />
  }
  return <div></div>
}
