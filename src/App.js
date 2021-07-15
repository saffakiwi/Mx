
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
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
import EmailBox from './EmailBox.js';
import EmailAddress from './EmailAddress.js';
import LoginLine from './LoginLine.js';
import PasswordBox from './PasswordBox.js';
import LoginButton from './LoginButton.js';
import Line from './Line.png';
import TeacherImage from './TeacherImage.js';
import TeacherText from './TeacherText.js';
import teacher from './teacher.png';


const useStyles = makeStyles({
root: {
  flexGrow: 1,

},

dialog: {
  flexDirection:"row",
},

overflow: {
  overflowY: "hidden",
  overflowX: "hidden",
  alignItems: "center",
  display: "flex",
  maxWidth: "700px",
  
},

margin: {
  margin: "auto",
},

button: {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column"
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

});

  

function AutoDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const styles = useStyles()


  return (
    
    <Dialog style={{display: "flex", flexDirection:"row"}} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}
    classes={{paperScrollPaper: styles.dialog, paper:styles.overflow,scrollPaper:styles.margin}}>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    <div style={{marginTop: "0px", marginLeft: "30px", marginRight: "10px"}}>
          <Students/>
      </div>
      <div style={{marginBottom: "30px"}}>
          <StudentsText />
      </div>
      <div style={{display:"flex", marginTop: "0px", marginBottom: "30px"}}>
        <div style={{flexDirection:"column"}}>
          <Button style={{flexDirection: "column"}} classes={{root: styles.button}}>
          <Login />
          <LoginLine />
      </Button>
      
        </div>
      <Button classes={{root: styles.buttons}}>
      <Signup />
      </Button>
      </div>
        
    <div >
    <form style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    <TextField size="small" id="outlined-basic"  variant="outlined" type="email" label="Email Address"/>
    <TextField size="small" id="outlined-basic" variant="outlined" type="password" label="Password"/>
       
      </form>
      </div>
     
      <Button
      classes={{root: styles.button}}>
      <LoginButton />
      </Button>
      
      </div>

      <div>
      <img src={Line} alt="line"/>
  </div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
   
    <div style={{marginTop: "0px", marginLeft: "30px"}}>
          <img className="photo" src={teacher} />
      </div>
      
      <div style={{marginBottom: "30px"}}>
          <TeacherText />
      </div>
      <div style={{display:"flex", marginTop: "0px", marginBottom: "30px"}}>
        <div style={{flexDirection:"column"}}>
          <Button style={{flexDirection: "column"}} classes={{root: styles.button}}>
          <Login />
          <LoginLine />
      </Button>
      
        </div>
      <Button classes={{root: styles.buttons}}>
      <Signup />
      </Button>
      </div>
        

        <div>
    <form style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    <TextField size="small" id="outlined-basic"  variant="outlined" label="Email Address" type="email"/>
    <TextField size="small" id="outlined-basic" variant="outlined" label="Password" type="password"/>
       
      </form>
      </div>
      
     
      <Button classes={{root: styles.button}}>
      <LoginButton />
      </Button>
      
      </div>

      <div>
      </div>
    </Dialog>
    
  );
}

AutoDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function AutoDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <AutoDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}