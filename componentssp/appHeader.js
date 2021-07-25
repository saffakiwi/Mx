import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(() => ({
  appBar: {
    position: "absolute",
    width: "100%",
    zIndex: "1400",
  },
}))

export default function AppHeader() {
  const classes = styles()
  return (
    <div>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Button onClick={() => alert("Welcome to LEVEL UP WORKS!")}>
            <img src="./photos/logo.png" alt="level up works logo" />
          </Button>
          <div className="flag" style={{ position: "absolute", right: "2%" }}>
            <Button onClick={() => alert("Clicked NZ Flag!")}>
              <img src="./photos/nzFlag.png" alt="level up works logo" />
            </Button>
            <Button onClick={() => alert("Clicked Maori Flag!")}>
              <img src="./photos/maoriFlag.png" alt="level up works logo" />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
