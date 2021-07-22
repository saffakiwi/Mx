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
import AppDrawer from './Drawer.js';
import Header from './Header';
const drawerWidth = 240;

//makeStyles section
const useStyles = makeStyles({
root: {
  width: "100%",
  height: "100%",
},
background: {
  display: "flex",
  flexDirection: "column",
    width: "100%",
    backgroundColor: "#b2e4fa",
    height: "800px",
    marginTop: "70px",
   
    
},

box: {
  display: "flex",
  flexDirection: "column",
  width: "100%",
    backgroundColor: "#d9f4ff",
    marginBottom: "50px",
    marginTop: "10px",
    borderRadius: "20px",
    overflow: "auto",
    height: "80%",
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
        axios.get("http://localhost:4000/users/")
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

  const getHumanDate = (dateToChange) => {
    const date = new Date(dateToChange)
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
      <div>
        <h3>{days[date.getDay()].toUpperCase()} {date.getDate()} {month[date.getMonth()]} {date.getFullYear()}</h3>
        <h3>{date.getHours()}:{date.getMinutes()}</h3>
      </div>
    )
    
  }

return (
    
<div className={classes.root}>
<AppDrawer />     
<Container  classes={{root: styles.background}}  maxWidth="xl">
  
    <div id="button_group">
        <Button id="button1" classes={{root: styles.button1, text: styles.button1}} size="small" variant="contained">Take Screenshot</Button>
        <Button id="button2" classes={{root: styles.button2}} size="small" variant="contained">Help Centre</Button>
        <Button id="button3" classes={{root: styles.button3}} size="small" variant="contained">More Projects</Button>
    </div>

<Container classes={{root: styles.box}} maxWidth="xl">

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
              <div className="subcontent">
              <img id="photo" src={users.submission} alt="screenshot" />
              </div>
              <div id="zoom">
                <ZoomInIcon/>
                <h3>ENLARGE PHOTO</h3>
              </div>
              </div>
               

            <div id="subtime">
            <div>{getHumanDate(users.date_submitted)}</div>
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



