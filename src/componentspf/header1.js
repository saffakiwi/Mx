import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Logo from './StarLogo.png';
import Maori from './Maori.png';
import Nz from './Nz.png';
import Lang from './Lang.png';
import { makeStyles } from '@material-ui/core';
import E40 from './Ellipse40.png';
import { Container } from '@material-ui/core';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: "1",
    backgroundColor: '#43C0F6',
    display: "flex",
    flexFlow: "column wrap",
    flexDirection:"column",
  },
  logo: {
    position: "relative",
    left: "120px",
    top: "5px",
  },
  logoPic: {
    width: "120px",
    alignItems: "left",
  },
  midButn: {
    display: "flex",
    alignItems: "flex-end",
    color: "#ffffff",
    fontFamily: 'Open Sans',
    fontSize: '10px',
    fontWeight: 'bold',
    alignContent: "stretch",
    width:"130px", 
    display:"flex",
    alignItems: "flex-end",
  },
  rt: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg"  className={classes.root} >
        <Grid container spacing={10}>
          <Grid className={classes.logo} item xs={4}>
            <img src={Logo} className={classes.logoPic} /></Grid>
          <Grid item xs className={classes.midButn} item xs={4} >
            <Button className={classes.midButn} >HOME</Button>
            <Button className={classes.midButn}> PROJECTS</Button>
            <Button className={classes.midButn}> TEACHERS</Button></Grid>
          <Grid item xs={3} >
            <div className={classes.rt}>
              <IconButton style={{ height: "0px", width: "30px" }}><img src={Lang} style={{ height: "10px", width: "20px", opacity: "80%" }} /> </IconButton>
              <IconButton  style={{ height: "0px", width:"1px"}}> <img src={Nz} style={{ height: "10px", width: "18px" }}/></IconButton>
              <IconButton  style={{ height: "0px", width: "35px" }}><img src={Maori}  style={{ height: "10px", width: "18px" }} /></IconButton></div>
            <div className={classes.rt}>
              <IconButton style={{ height: "20px", width: "3px" }} ><img src={E40} style={{ height: "15px", width: "15px" }} /></IconButton>
              <Button style={{ height: "25px", width:"125px", fontFamily: 'Open Sans', fontSize: '10px', fontWeight: 'bold',  color: "#ffffff",size: "small",}}>JASMINA SALVADOR</Button> </div></Grid>
        </Grid>
      </Container>
    </div>
  )
};
