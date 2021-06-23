
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Students from './Students.png';
import teacher from './teacher.png';
import GridListTile from '@material-ui/core/GridListTile';
import Line from './Line.png';
import GridList from '@material-ui/core/GridList';
import StudentsText from './StudentsText.png';
import LoginButton from './LoginButton.png';
import TextField from '@material-ui/core/TextField';
function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{CellHeight: 800}}>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Open Popover
      </Button>
      <Dialog class="dialog"
        width={800}
        height={800}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      
      >
      <div>
      <div>
      <img alt="students" src={Students} />
      <br />
      <img alt="stext" src={StudentsText} />
      <form noValidate autoComplete="off">
      <TextField 
      required
      id="outlined-email-input"
      label="Email"
      type="email"
      autoComplete="off"
      variant="outlined"
      />
      <br /><br />
      <TextField 
      required
      id="outlined-email-input"
      label="Password"
      type="password"
      autoComplete="off"
      variant="outlined"
      />
      </form><br/>
      <img alt="loginbutton" src={LoginButton} />
      </div>
      </div>
      </Dialog>
      
    </div>
  );
}


export default App;