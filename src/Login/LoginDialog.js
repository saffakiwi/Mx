import './Dialog.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Students from './Students.js';
import StudentsText from './StudentsText.js';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import Login from './Login.js';
import TextField from '@material-ui/core/TextField';
import {Paper, Tabs, Tab} from '@material-ui/core';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ThemeProvider, createMuiTheme, withStyles, position} from '@material-ui/core/styles';
import Signup from './Signup.js';
import LoginLine from './LoginLine.js';
import LoginButton from './LoginButton.js';
import TeacherImage from './TeacherImage.js';
import TeacherText from './TeacherText.js';
import Cross from './Cross.js';
import CrossOne from './CrossOne.js';
import Divider from '@material-ui/core/Divider';
import {useState, useEffect} from 'react';
import loginFrom from './LoginComp.js';
import signupForm from './SignupComp.js';
import Form from './Form.js';

const useStyles = makeStyles({
root: {
  flexGrow: 1,
},
margin: {
  margin: "auto",
},
button: {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white"
},
buttons: {
  marginTop: "20px",
},
line: {
  marginTop: "0px"
},
input: {
  borderRadius: "20px",
  margin: "20px",
},
maingrid: {
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
},
griditem: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
},
form: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
},
});
 
function AutoDialog(props) {

//parameters for dialog to open
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
 
  //use of makeStyles
  const styles = useStyles();

const [formSelection, setFormSelection] = useState(1);
const handleChange = (prop) => {
    console.log(prop)
    setFormSelection(prop)
}



return(
  <Grid container={true} classes={{container: styles.maingrid}} spacing={3}>
    
    <Grid item={true} classes={{item: styles.griditem}} md={5}>
      <div className="student">
          <Students />
      </div>
      <div className="student">
          <StudentsText />
      </div>
      <div className="student">
        <div className="lsbuttons">
          <Button classes={{label: styles.button}} onClick={() => handleChange(1)}>
          <Login />
          <LoginLine />
          </Button>
        </div>
        <div>
          <Button classes={{label: styles.button}} onClick={() => handleChange(0)}>
          <Signup/>
          <LoginLine/>
          </Button>
        
        </div>
      </div>

        <Form className="main" formSelection={formSelection}/>
   
    </Grid>   
    
    <img src="line.png" alt="line"/>
        
    <Grid item={true} classes={{item: styles.griditem}} md={5}>
      <div >
        <button className="close" type="button">
    <Cross className="exitbutton"/>
    <CrossOne />
        </button>
      <div className="student">
        <img className="photo" src="teacher.png" alt="teacher" />
      </div>
      <div className="student">
    <TeacherText />
      </div>
      <div className="student">
      <div >
        <Button classes={{label: styles.button}} onClick={() => handleChange(1)}>
        <Login />
        <LoginLine />
        </Button>
      </div>
        <Button classes={{label: styles.button}} onClick={() => handleChange(0)}>
        <Signup/>
        <LoginLine/>
        </Button>
      </div>

        <Form className="main" formSelection={formSelection}/>
     </div>
    </Grid> 
</Grid>

)};


export default AutoDialog;