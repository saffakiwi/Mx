import React, { useState, useEffect } from "react"
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
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';

const styles = makeStyles((theme) => ({
  drawerPaper: {
    width: "inherit",
    marginTop: "70px 0",
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
    display: "flex",
    position: "relative",
    width: "100%",
    marginBottom: "50px",
    top: "250px"
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
    height: "4%",
    
  },
  copyrightPic: {
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  navicon: {
    objectFit: "contain",
  },
  avatarnav: {
    justifyContent: "center",
    height: "60px",
    width: "60px",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
},
}))

export default function AppDrawer(props) {
  const classes = styles()
  const [drawerState, setDrawerState] = useState(false)
  const [drawerWidth, setDrawerWidth] = useState("70px")
  const [caret, setCaret] = useState("./openCaretRight.png")
  const [bottomDirection, setBottomDirection] = useState("column")
  const [bottomTop, setBottomTop] = useState("180px")
  const [teacher, setTeacher] = useState([]);
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get("http://localhost:4000/teachers")
        .then(response => {
            setTeacher(response.data)
        })
    }, []) 

  const toggleDrawer = (open) => {
    if (drawerState === false) {
      setDrawerState(true)
      setDrawerWidth("280px")
      setCaret("./openCaretLeft.png")
      setBottomTop("210px")
      setBottomDirection("row")
    } else {
      setDrawerState(false)
      setDrawerWidth("70px")
      setCaret("./openCaretRight.png")
      setBottomTop("70px")
      setBottomDirection("column")
    }
  }

  return (
    
      <div style={{ display: "flex" }}>
      <AppBar elevation="0" position="fixed" color="default" className={classes.appHeader}>
          <Toolbar>
            <Button onClick={() => alert("Welcome to LEVEL UP WORKS!")}>
              <img src="./LevelupLogo.png" alt="level up works logo" />
            </Button>
            <div className="flag" style={{ position: "absolute", right: "2%" }}>
              <Button onClick={() => alert("Clicked NZ Flag!")}>
                <img src="./NZflag.png" alt="level up works logo" />
              </Button>
              <Button onClick={() => alert("Clicked Maori Flag!")}>
                <img src="./Maoriflag.png" alt="level up works logo" />
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

            <div>
            {teacher.map(users => ( 
            <div>    
                <Avatar src={users.profile_pic} size="large" className={classes.avatarnav} alt="teacher" />
              </div>
            ))}
            </div>

            
              <ListItem button>
              <ListItemIcon>
                  <img className={classes.navicon} src="./progressLight.png" alt="sidenav icon" />
                  </ListItemIcon>
                <p>PROGRESS TRACKER</p>
              </ListItem>
           

            
              <ListItem button>
              <ListItemIcon>
                  <img src="./userGraduate.png" alt="sidenav icon" />
                  </ListItemIcon>
                <div>
                <p>STUDENT PROFILES</p>
                </div>
              </ListItem>
            

            
              <ListItem button>
                <ListItemIcon>
                  <img src="./helpIcon.png" alt="sidenav icon" />
                </ListItemIcon>
                <p>HELP REQUESTS</p>
              </ListItem>
            

            
              <ListItem button>
                <ListItemIcon>
                  <img src="./projectSubmissions2.png" alt="sidenav icon" />
                </ListItemIcon>
                <p>PROJECT SUBMISSIONS</p>
              </ListItem>
            

            
              <ListItem button>
                <ListItemIcon>
                  <img src="./libraryLight.png" alt="sidenav icon" />
                </ListItemIcon>
                <p>PROJECT LIBRARY</p>
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
                  icon={<img src="./userIcon.png" alt="profile" />}
                  className={classes.bottomNavAction}
                />
                <BottomNavigationAction
                  label="Settings"
                  icon={<img src="./settingIcon.png" alt="settings" />}
                  className={classes.bottomNavAction}
                />
                <BottomNavigationAction
                  label="Logout"
                  icon={<img src="./logoutIcon.png" alt="logout" />}
                  className={classes.bottomNavAction}
                />
              </BottomNavigation>
            </div>
          </List>
          {/*------------- Footer ------------------*/}
          <div className={classes.bottomPush}>
            <img src="./copyright.png" alt="copyright" className={classes.copyrightPic} />
          </div>
        </Drawer>
      </div>
   
  )
}
