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
import EmailBox from './EmailBox.js';
import EmailAddress from './EmailAddress.js';
import LoginLine from './LoginLine.js';
import PasswordBox from './PasswordBox.js';
import LoginButton from './LoginButton.js';
import Line from './Line.png';
import TeacherImage from './TeacherImage.js';
import TeacherText from './TeacherText.js';
import teacher from './teacher.png';
import Cross from './Cross.js';
import CrossOne from './CrossOne.js';
import Divider from '@material-ui/core/Divider';

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
  flexDirection: "row",
  
}

});
  
function AutoDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const styles = useStyles();
return(
  <Grid container={true} spacing={2}>
    <Grid item={true} md={6}>
      <div >
          <Students/>
      </div>
      <div >
          <StudentsText />
      </div>
      <div >
        <div >
          <Button classes={{root: styles.button}}>
          <Login />
          <LoginLine />
          </Button>
      
        </div>
          <Button classes={{root: styles.buttons}}>
          <Signup/>
          </Button>
      </div>
      <div>
      
      </div>
    </Grid> 
    <Divider/>   
  <Grid item={true} md={6}>
  <div >
    <button className="close" type="button" style={{marginLeft: "200px"}}>
    <Cross />
    <CrossOne />
  </button>
    <div >
        <img className="photo" src={teacher} />
    </div>
      
    <div >
      <TeacherText />
    </div>
      <div >
        <div >
          <Button classes={{root: styles.button}}>
          <Login />
          <LoginLine />
          </Button>
      </div>
        <Button classes={{root: styles.buttons}}>
        <Signup/>
        </Button>
      </div>
  </div>
</Grid> 
</Grid>

)
};

AutoDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default AutoDialog;