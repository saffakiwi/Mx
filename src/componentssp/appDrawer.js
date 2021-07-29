import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  AppBar,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core"
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom"
import TabProgressTracker from "./tabProgressTracker"
import TabStudentProfiles from "./tabStudentProfiles"
import Projects from "../Project"
import Navigation from '../Navigation';
import { findByDisplayValue } from "@testing-library/react";
import Container from "@material-ui/core/Container";

const styles = makeStyles((theme) => ({
  drawerPaper: {
    display: "flex",
    width: "inherit",
    marginTop: "60px 0",
    paddingTop: "80px",
    backgroundColor: "#43C0F6",
    textAlign: "center",
    flexShrink: 0,
  },
  link: {
    textDecoration: "none",
    color: "#FFF",
  },

  appHeader: {
    zIndex: "1400",
  },

  appHeaderToolbar: {
    display: "flex",
    flexDirection: "column",
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0, 0, 0, 8),
  },
  bottomDiv: {
    position: "relative",
    width: "100%",
  },
  bottomNav: {
    background: "#43C0F6",
  },
  bottomNavAction: {
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "#FFF",
  },
  bottomPush: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
    backgroundColor: "#f5f5f5",
    minWidth: "100%",
  },
  copyrightPic: {
    display: "block",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: "250px",
  },
}))

export default function AppDrawer() {
  const classes = styles()
  const [drawerState, setDrawerState] = useState(false)
  const [drawerWidth, setDrawerWidth] = useState("70px")
  const [userImage, setUserImage] = useState("hidden")
  const [caret, setCaret] = useState("./photos/openCaretRight.png")
  const [bottomDirection, setBottomDirection] = useState("column")
  const [bottomTop, setBottomTop] = useState("180px")

  const toggleDrawer = (open) => {
    if (drawerState === false) {
      setDrawerState(true)
      setDrawerWidth("280px")
      setUserImage("visible")
      setCaret("./photos/openCaretLeft.png")
      setBottomTop("250px")
      setBottomDirection("row")
    } else {
      setDrawerState(false)
      setDrawerWidth("70px")
      setUserImage("hidden")
      setCaret("./photos/openCaretRight.png")
      setBottomTop("110px")
      setBottomDirection("column")
    }
  }

  const [page, setPage] = useState();
  const handleChange = (prop) => {
    setPage(prop)
    }
  

  return (
  
      <div>
        <AppBar elevation="0" position="fixed" color="default" className={classes.appHeader}>
          <Toolbar>
            <div>
              <img src=".photos/logo.png" alt="level up works logo" />
            </div>
            <div className="flag">
              <div>
                <img src="./photos/logo.png" alt="level up works logo" />
              </div>
              </div>
              <div className="flag">
                <div>
                  <img src="./photos/nzFlag.png" alt="level up works logo" />
                </div>
                <div>
                  <img src="./photos/maoriFlag.png" alt="level up works logo" />
                </div>
              </div>
            </Toolbar>
          </AppBar>

          <Drawer
            style={{ width: drawerWidth }}
            classes={{ paper: classes.drawerPaper }}
            variant="persistent"
            anchor={"left"}
            open={drawerState}
          >
            <List>
              <img src="./photos/userBig.png" style={{ visibility: userImage }} />
                <ListItem button>
                  <ListItemIcon>
                    <img src="./photos/progressDark.png" alt="sidenav icon" />
                  </ListItemIcon>
                  <ListItemText>PROGRESS TRACKER</ListItemText>
                </ListItem>
              

                <ListItem button>
                  <ListItemIcon>
                    <img src="./photos/userGraduate.png" alt="sidenav icon" />
                  </ListItemIcon>
                  <ListItemText>STUDENT PROFILES</ListItemText>
                </ListItem>
             
                <ListItem button>
                  <ListItemIcon>
                    <img src="./photos/helpIcon.png" alt="sidenav icon" />
                  </ListItemIcon>
                  <ListItemText>HELP REQUESTS</ListItemText>
                </ListItem>
             

             
                <ListItem button>
                  <ListItemIcon>
                    <img src="./photos/projectSubmissions2.png" alt="sidenav icon" />
                  </ListItemIcon>
                  <ListItemText>PROJECT SUBMISSIONS</ListItemText>
                </ListItem>
            

              
                <ListItem button>
                  <ListItemIcon>
                    <img src="./photos/libraryLight.png" alt="sidenav icon" />
                  </ListItemIcon>
                  <ListItemText>PROJECT LIBRARY</ListItemText>
                </ListItem>
             

              {/* ------------Button for Caret-----------------*/}
              <Button onClick={() => toggleDrawer(true)}>
                <img src={caret} alt="caret" />
              </Button>

              {/*------------Bottom Navigation---------------- */}
              <div className={classes.bottomDiv} style={{ top: bottomTop }}>
                <BottomNavigation
                  showLabels
                  className={classes.bottomNav}
                  style={{ flexDirection: bottomDirection }}
                >
                  <BottomNavigationAction
                    label="Profile"
                    icon={<img src="./photos/userIcon.png" alt="profile" />}
                    className={classes.bottomNavAction}
                  />
                  <BottomNavigationAction
                    label="Settings"
                    icon={<img src="./photos/settingIcon.png" alt="settings" />}
                    className={classes.bottomNavAction}
                  />
                  <BottomNavigationAction
                    label="Logout"
                    icon={<img src="./photos/logoutIcon.png" alt="logout" />}
                    className={classes.bottomNavAction}
                  />
                </BottomNavigation>
              </div>
              </List>
          </Drawer>
          
            {/*------------- Footer ------------------*/}
            <div className={classes.bottomPush}>
              <img src="./photos/copyright.png" alt="copyright" className={classes.copyrightPic} />
            </div>
          
         
      </div>
  )
}
