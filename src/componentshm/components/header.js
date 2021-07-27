import React from 'react'
import logoWorks from '../homepageIMG/headerIMGS/logoWorks.png';
import NZFlag from '../homepageIMG/headerIMGS/NZFlag.png';
import MaoriFlag from '../homepageIMG/headerIMGS/MaoriFlag.png';
import { Button, Container } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import User from '../homepageIMG/headerIMGS/UserCircle.png'
import "../componentsCSS/header.css"
import { makeStyles } from '@material-ui/core/styles';
import AutoDialog from '../../Login/LoginDialog.js';
import Dialog from '@material-ui/core/Dialog';


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
    header: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    }
  });

export default function Header() {

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
        <div>
            <Container maxWidth="xl">
            <div class={{root:styles.header}} >
                <div className="header5">
                    <div className="logo1">
                        <img className="logoPic" src={logoWorks} alt="level up logo" /> </div>

                    <div className="middleButtons">
                        <a href="#"> HOME</a>
                        <a href="#"> FEATURES</a>
                        <a href="#">TEACHERS </a> </div>

                    <div className="flags1">
                        <div className="lang"> LANG </div>
                        <img src={NZFlag} alt="nz flag" />
                        <img src={MaoriFlag} alt="maori flag" /> </div>

                    <div className="avatar">
                        <IconButton style={{ height: "20px", width: "3px" }} >
                            <img src={User} style={{ height: "20px", width: "20px" }} /></IconButton> </div>

                    <div className="loginButtons">
                    <Button style={{ height: "20px"}}  onClick={handleClickOpen}>
                    <p>REGISTER | LOGIN </p>
                    </Button>
                    <Dialog  classes={{root: styles.root, paperScrollPaper: styles.dialog, paper:styles.overflow,scrollPaper:styles.margin}} selectedValue={selectedValue} open={open} onClose={handleClose}>
                        <AutoDialog handleClose={setOpen} classes={{root: styles.root, paperScrollPaper: styles.dialog, paper:styles.overflow,scrollPaper:styles.margin}}/>
                    </Dialog>
                        
                    </div>
                </div>
            </div>
            </Container>
        </div>
    )
}