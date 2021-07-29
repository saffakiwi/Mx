import React from "react"
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { useState } from "react";
import Navigation from "./navigation";

const styles = makeStyles((theme) => ({
  drawerPaper: {
    width: "inherit",
    backgroundColor: "#43C0F6",
    textAlign: "center",
  },
  appbarHeader: {
    zIndex: 1400,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  drawerHeaderFlag: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flag: {
    margin: "20px",
  },
  myMainDiv: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    width: "100%",
  },
  myMainContent: {
    flexGrow: 1,
    // this is to set the content
    padding: theme.spacing(8.5, 0, 0, 0),
  },
  tabLinks: {
    textDecoration: "none",
  },
  tabLinksText: {
    color: "#FFF",
    fontFamily: "OpenSans-Bold",
    fontSize: "",
  },
  bottomPush: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
    backgroundColor: "#f5f5f5",
    minWidth: "100%",
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
}))

export default function MyMain(props) {
  const [drawerState, setDrawerState] = useState(false)
  const [drawerWidth, setDrawerWidth] = useState("70px")
  const [profilePic, setProfilePic] = useState("hidden")
  const [bottomDirection, setBottomDirection] = useState("column")
  const [bottomTop, setBottomTop] = useState("180px")
  const [caret, setCaret] = useState("/openCaretRight.png")
  const [caretColor, setCaretColor] = useState("#43C0F6")
  const classes = styles()
  // -----------conditional rendering
  const [page, setPage] = useState("")

  // ------Conditional rendering function
  const handleClick = (prop) => {
    setPage(prop)
  }

  function toggleDrawerState() {
    if (drawerState == false) {
      setDrawerState(true)
      setDrawerWidth("250px")
      setProfilePic("visible")
      setBottomTop("250px")
      setBottomDirection("row")
      setCaret("/openCaretLeft.png")
      setCaretColor("#b2e4fa")
    } else {
      setDrawerState(false)
      setDrawerWidth("70px")
      setProfilePic("hidden")
      setBottomTop("110px")
      setBottomDirection("column")
      setCaret("/openCaretRight.png")
      setCaretColor("#43C0F6")
    }
  }
  return (
    // <Router>
    <div style={{ display: "flex" }}>
      <AppBar position="fixed" color="default" className={classes.appbarHeader}>
        <Toolbar className={classes.drawerHeader}>
          <div>
            <img src="/Leveluplogo.png" alt="level up works logo" />
          </div>
          <div className={classes.drawerHeaderFlag}>
            <div className={classes.flag}>
              <img src="/NZflag.png" alt="level up works logo" />
            </div>
            <div>
              <img src="/maoriFlag.png" alt="level up works logo" />
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        style={{ width: drawerWidth }}
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
        anchor={"left"}
        open={drawerState}
      >
        <List>
          <img
            src="/userBig.png"
            alt="teacher profile pic"
            style={{ marginTop: "100px", visibility: profilePic }}
          />
          {/* <Link to="/progresstracker" className={classes.tabLinks}> */}
          <ListItem button value="b1" onClick={() => handleClick("b1")}>
            <ListItemIcon>
              <img src="/progressDark.png" alt="sidenav icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.tabLinksText }} primary="PROGRESS TRACKER" />
          </ListItem>
          {/* </Link> */}

          {/* <Link to="/studentProfiles" className={classes.tabLinks}> */}
          <ListItem button value="b2" onClick={() => handleClick("b2")}>
            <ListItemIcon>
              <img src="/userGraduate.png" alt="sidenav icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.tabLinksText }} primary="STUDENT PROFILES" />
          </ListItem>
          {/* </Link> */}

          {/* <Link to="/helpRequests" className={classes.tabLinks}> */}
          <ListItem button>
            <ListItemIcon>
              <img src="/helpIcon.png" alt="sidenav icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.tabLinksText }} primary="HELP REQUESTS" />
          </ListItem>
          {/* </Link> */}

          {/* <Link to="/projects" className={classes.tabLinks}> */}
          <ListItem button value="b3" onClick={() => handleClick("b3")}>
            <ListItemIcon>
              <img src="/projectSubmissions2.png" alt="sidenav icon" />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.tabLinksText }}
              primary="PROJECT SUBMISSIONS"
            />
          </ListItem>
          {/* </Link> */}

          {/* <Link to="/projectLibrary" className={classes.tabLinks}> */}
          <ListItem button>
            <ListItemIcon>
              <img src="/libraryLight.png" alt="sidenav icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.tabLinksText }} primary="PROJECT LIBRARY" />
          </ListItem>
          {/* </Link> */}
          {/* ------------------ CARET --------------------- */}
          <button
            style={{
              float: "right",
              border: "none",
              backgroundColor: caretColor,
              padding: "0 5px",
            }}
          >
            <img src={caret} alt="caret " onClick={toggleDrawerState} />
          </button>
          {/*------------Bottom Navigation---------------- */}
          <div className={classes.bottomDiv} style={{ top: bottomTop }}>
            <BottomNavigation
              showLabels
              className={classes.bottomNav}
              style={{ flexDirection: bottomDirection }}
            >
              <BottomNavigationAction
                label="Profile"
                icon={<img src="/userIcon.png" alt="profile" />}
                className={classes.bottomNavAction}
              />
              <BottomNavigationAction
                label="Settings"
                icon={<img src="/settingIcon.png" alt="settings" />}
                className={classes.bottomNavAction}
              />
              <BottomNavigationAction
                label="Logout"
                icon={<img src="/logoutIcon.png" alt="logout" />}
                className={classes.bottomNavAction}
              />
            </BottomNavigation>
          </div>
        </List>
        {/*------------- Footer ------------------*/}
        <div className={classes.bottomPush}>
          <img src="/copyright.png" alt="copyright" className={classes.copyrightPic} />
        </div>
      </Drawer>

      {/* ----------Conditional rendering ---------------- */}
      <div className={classes.myMainDiv}>
        <div className={classes.myMainContent}>
          <Navigation page={page} />
        </div>
      </div>
      {/* -------------- Routes ------------------- */}
      {/* <Switch>
          <Route exact path="/progresstracker">
            <div className={classes.myMainDiv}>
              <div className={classes.myMainContent}>
                <TabProgressTracker user={props.user} />
              </div>
            </div>
          </Route>

          <Route exact path="/studentProfiles">
            <div className={classes.myMainDiv}>
              <div className={classes.myMainContent}>
                <TabStudentProfiles user={props.user} />
              </div>
            </div>
          </Route>

          <Route exact path="/helpRequests">
            <div className={classes.myMainDiv}>
              <div className={classes.myMainContent}>
                <TabProgressTracker user={props.user} />
              </div>
            </div>
          </Route>

          <Route exact path="/projects">
            <div className={classes.myMainDiv}>
              <div className={classes.myMainContent}>
                <Projects />
              </div>
            </div>
          </Route>

          <Route exact path="/projectLibrary">
            <div className={classes.myMainDiv}>
              <div className={classes.myMainContent}>
                <TabProgressTracker user={props.user} />
              </div>
            </div>
          </Route>
        </Switch> */}
    </div>
    // </Router>
  )
}
