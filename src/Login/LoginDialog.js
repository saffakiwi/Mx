import './Dialog.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Students from './Students.js';
import StudentsText from './StudentsText.js';
import TeacherText from './TeacherText.js';
import Cross from './Cross.js';
import CrossOne from './CrossOne.js';
import FormLS from './FormLS.js';
import {useState} from 'react';


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
 
function AutoDialog({ handleClose, setCurrentUser }) {

//parameters for dialog to close



//use of makeStyles
const styles = useStyles();

return(
  <Grid container={true} classes={{container: styles.maingrid}} spacing={3}>

{/*.................................Student side on dialog box...................................*/}    
    <Grid item={true} classes={{item: styles.griditem}} md={5}>
      <div className="leftbox">
        <div className="student">
          <Students />
        </div>
        <div className="student">
          <StudentsText />
        </div>
        <div className="student">
          <FormLS />
        </div>
      </div>
    </Grid>   
    
    <img className="image" src="line.png" alt="line"/>

 {/*.................................Teacher side on dialog box...................................*/}         
    <Grid item={true} classes={{item: styles.griditem}} md={5}>
    <div className="rightbox">
        <button className="close" type="button" onClick={() => handleClose(false)} >
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
        <FormLS setCurrentUser={setCurrentUser}/>
      </div>
    </div>
    </Grid> 
  </Grid>

)};


export default AutoDialog;