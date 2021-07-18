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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import TabProgressTracker from "./tabProgressTracker"
import TabStudentProfiles from "./tabStudentProfiles"

const styles = makeStyles((theme) => ({
  drawerPaper: {
    width: "inherit",
    marginTop: "60px 0",
    paddingTop: "80px",
    backgroundColor: "#43C0F6",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: "#FFF",
  },

  appHeader: {
    zIndex: "1400",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0.5, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2, -1),
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

export default function AppDrawer(props) {
  const classes = styles()
  const [drawerState, setDrawerState] = useState(false)
  const [drawerWidth, setDrawerWidth] = useState("70px")
  const [userImage, setUserImage] = useState("hidden")
  const [caret, setCaret] = useState("./photos/openCaretRight.png")
  const [bottomDirection, setBottomDirection] = useState("column")
  const [bottomTop, setBottomTop] = useState("180px")

  const toggleDrawer = (open) => {
    if (drawerState == false) {
      setDrawerState(true)
      setDrawerWidth("280px")
      setUserImage("visible")
      setCaret("./photos/openCaretLeft.png")
      setBottomTop("290px")
      setBottomDirection("row")
    } else {
      setDrawerState(false)
      setDrawerWidth("70px")
      setUserImage("hidden")
      setCaret("./photos/openCaretRight.png")
      setBottomTop("180px")
      setBottomDirection("column")
    }
  }

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <AppBar elevation="0" position="fixed" color="default" className={classes.appHeader}>
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

        <Drawer
          style={{ width: drawerWidth }}
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
          anchor={"left"}
          open={drawerState}
        >
          <List>
            <img src="./photos/userBig.png" style={{ visibility: userImage }} />
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <img src="./photos/progressDark.png" alt="sidenav icon" />
                </ListItemIcon>
                <ListItemText>PROGRESS TRACKER</ListItemText>
              </ListItem>
            </Link>

            <Link to="/studentProfiles" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <img src="./photos/userGraduate.png" alt="sidenav icon" />
                </ListItemIcon>
                <ListItemText>STUDENT PROFILES</ListItemText>
              </ListItem>
            </Link>

            <Link to="/helpRequests" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <img src="./photos/helpIcon.png" alt="sidenav icon" />
                </ListItemIcon>
                <ListItemText>HELP REQUESTS</ListItemText>
              </ListItem>
            </Link>

            <Link to="/projectSubmissions" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <img src="./photos/projectSubmissions2.png" alt="sidenav icon" />
                </ListItemIcon>
                <ListItemText>PROJECT SUBMISSIONS</ListItemText>
              </ListItem>
            </Link>

            <Link to="/projectLibrary" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <img src="./photos/libraryLight.png" alt="sidenav icon" />
                </ListItemIcon>
                <ListItemText>PROJECT LIBRARY</ListItemText>
              </ListItem>
            </Link>

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
          {/*------------- Footer ------------------*/}
          <div className={classes.bottomPush}>
            <img src="./photos/copyright.png" alt="copyright" className={classes.copyrightPic} />
          </div>
        </Drawer>
        {/* -------------- Routes ------------------- */}
        <Switch>
          <Route exact path="/">
            <main className={classes.content}>
              <div className={classes.toolbar} />

              <TabProgressTracker user={props.user} />
            </main>
          </Route>

          <Route exact path="/studentProfiles">
            <main className={classes.content}>
              <div className={classes.toolbar} />

              <TabStudentProfiles user={props.user} />
            </main>
          </Route>

          <Route exact path="/helpRequests">
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <h2>Help Requests</h2>
            </main>
          </Route>

          <Route exact path="/projectSubmissions">
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <h2>Project Submissions</h2>
            </main>
          </Route>

          <Route exact path="/projectLibrary">
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <h2>Project Library</h2>
            </main>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
