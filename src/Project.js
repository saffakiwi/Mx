import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GetAppIcon from '@material-ui/icons/GetApp';
import CheckIcon from '@material-ui/icons/Check';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import './projects.css';
import axios from 'axios';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Tracker from './Tracker.js';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import DraftsIcon from '@material-ui/icons/Drafts';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const drawerWidth = 240;

//makeStyles section
const useStyles = makeStyles({
root: {
  width: "100%"
},
background: {
    width: "100%",
    backgroundColor: "#b2e4fa",
    height: "700px",
    
},

box: {
    width: "100%",
    backgroundColor: "#d9f4ff",
    marginBottom: "30px",
    marginTop: "10px",
    borderRadius: "20px",
    overflow: "auto",
    height: "85%",
    '&::-webkit-scrollbar': {
    width: '20px',
    marginRight: "20px"
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    marginRight: "20px",
    backgroundColor: "white",
    borderRadius: "30px",
    
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#43c0f6',
    marginRight: "20px",
    borderRadius: "30px",
    width: "15px"
  }
},

button1: {
    margin: "5px",
    
},

button2: {
    margin: "5px"
    
},

button3: {
    margin: "5px"
},

buttongroup: {
    fontSize: "8px",
    color: "#6c6c6c",
},

cards: {
    direction: "flex",
    flexDirection: "column",
    width: "100%",
    borderRadius: "20px",
    flexWrap: "nowrap",
    marginBottom: "10px",
    padding: "10px",
},

cards2: {

},

innerbox: {
    height: "300px",
},

avatar: {
    height: "60px",
    width: "60px",
    margin: "auto"
},


projectcontent: {
    alignItems: "top",
    marginTop: "20px",
},

checkbox: {
    backgroundColor: "white,",
    marginBottom: "auto"
},
avatarnav: {
    justifyContent: "center",
    height: "60px",
    width: "60px",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
},

bottomnav: {
    marginTop: "100px",
},

navlinks: {
    fontFamily: "OpenSans-Bold",
    color: "white",
    fontSize: "12px",
},

navicons: {
    color: "white",
},


});

const useStyling = makeStyles((theme) => ({
//makeStyles for drawer
root: {
    display: 'flex',
    flexDirection: 'row'
    
  },
menuButton: {
    marginRight: 40,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    
    
  },
  drawerOpen: {
    marginTop: "65px",
    height: "635px",
    backgroundColor: "#2596be",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    marginTop: "65px",
    height: "635px",
    backgroundColor: "#2596be",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }), 
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
 
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),

  },



}));



function Projects() {

//makeStyles state
const styles = useStyles()

const [project, setProject] = useState([])
const [help, setHelp] = useState([])
const [users, setUsers] = useState([])

useEffect(() => {
axios.get("http://localhost:4000/progress_history")
    .then(response => {
        setProject(response.data)
    })
}, []) 

useEffect(() => {
    axios.get("http://localhost:4000/help_requests")
        .then(response => {
            setHelp(response.data)
        })
    }, []) 

    useEffect(() => {
        axios.get("http://localhost:4000/users")
            .then(response => {
                setUsers(response.data)
            })
        }, []) 

//checkbox state
const [checked, setChecked] = React.useState(true);
const handleChange = (event) => {
    setChecked(event.target.checked);
  };

//sidenav component
    const classes = useStyling();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

//Links in the sidenav
const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

return (
    
<div className={classes.root}>
    <CssBaseline />
  
  <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
     
     {users.map(users => (
        <div className="headerbox">
          <Avatar classes={{root: styles.avatarnav}} src={users.profile_pic} />
        </div>
          ))}
        <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 1)}
        >
        <ListItemIcon>
          <Tracker/>
        </ListItemIcon>
        <ListItemText classes={{primary: styles.navlinks}} primary="PROGRESS TRACKER" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 1)}
        >
        <ListItemIcon>
          <DraftsIcon classes={{root: styles.navicons}} />
        </ListItemIcon>
        <ListItemText classes={{primary: styles.navlinks}} primary="STUDENT PROFILES" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 1)}
        >
        <ListItemIcon>
          <DraftsIcon classes={{root: styles.navicons}}/>
        </ListItemIcon>
        <ListItemText classes={{primary: styles.navlinks}} primary="HELP REQUESTS" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
        <ListItemIcon>
          <DraftsIcon classes={{root: styles.navicons}}/>
        </ListItemIcon>
        <ListItemText classes={{primary: styles.navlinks}} primary="PROJECT SUBMISSIONS" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 1)}
        >
        <ListItemIcon>
          <DraftsIcon classes={{root: styles.navicons}}/>
        </ListItemIcon>
        <ListItemText classes={{primary: styles.navlinks}} primary="PROJECT LIBRARY" />
        </ListItem>
        </List>
      
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ArrowLeftIcon /> : <ArrowLeftIcon fontSize="large" />}
        </IconButton>
      </div>
      <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
        <ArrowRightIcon fontSize="large"/>
        </IconButton>
        <List classes={{root: styles.bottomnav}}>
          <Button size="small">
          <CheckIcon fontSize="small"/>
          <p id="ptag">Profile</p>
          </Button>
       
       
          <Button size="small">
          <CheckIcon fontSize="small"/>
          <p id="ptag">Settings</p>
          </Button>
        
        
          <Button size="small">
          <CheckIcon fontSize="small"/>
          <p id="ptag">Logout</p>
          </Button>
        </List>
    </Drawer>
     
<Container  classes={{root: styles.background}}  maxWidth="xl">
    
    <div id="button_group">
        <Button id="button1" classes={{root: styles.button1, text: styles.button1}} size="small" variant="contained">Take Screenshot</Button>
        <Button id="button2" classes={{root: styles.button2}} size="small" variant="contained">Help Centre</Button>
        <Button id="button3" classes={{root: styles.button3}} size="small" variant="contained">More Projects</Button>
    </div>

<Container classes={{root: styles.box}} maxWidth="lg">

  <div id="headings">
      <h1>PROJECT SUBMISSIONS</h1>
    <div id="downloads">
      <Button classes={{root: styles.buttongroup}}>
      <GetAppIcon/>
        <h3>DOWNLOAD FILES</h3>
      </Button>
    </div>

    <div id="complete">
      <Button classes={{root: styles.buttongroup}}>
      <CheckIcon/>
        <h3>MARK AS COMPLETE PROJECT</h3>
      </Button>
    </div>
  </div>
  
    <div id="cards">
        
      {project.map(users => (
        <div id="content1">
          <Checkbox classes={{root: styles.checkbox}}
            color="secondary"
            onChange={handleChange}
          />

          <Card classes={{root: styles.cards}} elevation={3}>
          <div id="innercard">
            <div id="subav">
              <Avatar src={users.profile_pic} sizes="large" classes={{root: styles.avatar}} alt="Aiden" />
            </div>
    
            <div id="subname">
              <div className="subcontent"><h2>{users.first_name.toUpperCase()} submitted his project</h2></div>
              <div className="subcontent"><img id="photo" src={users.submission} alt="screenshot"/></div>
              <div id="zoom">
                <ZoomInIcon/>
                <p>ENLARGE PHOTO</p>
              </div>
              </div>

            <div id="subtime">

            </div>
          </div>
          </Card>
        </div>       
      ))}    

    </div>             
            
  
    <div id="cards">
        
      {help.map(users => ( 
        <div id="content1">    
          <Checkbox classes={{root: styles.checkbox}} 
            onChange={handleChange}
          />
          <Card classes={{root: styles.cards}} elevation={3}>
            <div id="innercard">
              <div id="helpav">
                <Avatar src={users.profile_pic} sizes="large" classes={{root: styles.avatar}} alt="Aiden" />
              </div>
            
              <div id="helpname"> 
                <div><h2>{users.first_name.toUpperCase()} wants to show you her project</h2></div>
              </div>
                
              <div id="helptime">
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>  

</Container>

</Container>
</div>
);
}

export default Projects;



