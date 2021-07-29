import TabProgressTracker from "./tabProgressTracker"
import TabStudentProfiles from "./tabStudentProfiles"

import React from "react"

export default function Navigation({ page }) {
  if (page === "b1") {
    return <TabProgressTracker />
  } else if (page === "b2") {
    return <TabStudentProfiles />
  
  }
  return <div></div>
}
