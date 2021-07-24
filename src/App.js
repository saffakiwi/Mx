import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import AutoDialog from './Login/LoginDialog.js';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  
  },
  
  dialog: {
    display: "flex",
    flexDirection:"row",
    overflowY: "hidden",
    overflowX: "hidden",
    maxWidth: "700px",
  },
});

function App() {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const styles = useStyles();



  return (
    <div className="App">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog classes={{root: styles.root, paperScrollPaper: styles.dialog, paper:styles.overflow,scrollPaper:styles.margin}} selectedValue={selectedValue} open={open} onClose={handleClose}>
      <AutoDialog classes={{root: styles.root, paperScrollPaper: styles.dialog, paper:styles.overflow,scrollPaper:styles.margin}}/>
      </Dialog>
    </div>
  );
}

export default App;
