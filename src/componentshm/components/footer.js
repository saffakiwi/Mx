import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    backgroundColor: '#B2E4FA',
  },
  body: {
    flexGrow: "1",
    display:"flex",     
    padding: "1",
    color: '#707070',
    fontSize: '13px',
    fontFamily: 'Nunito',
    marginLeft: "50px",
    outputSpacing: "5px",
  },
  p: {
    marginTop: "10%",
  },
  p1:{
    marginTop: "5%",
  }
}));


export default function Footer() {
  const classes = useStyles();
  return (

    <div>
      <Box>
        <Container maxWidth="xl" container className={classes.root} >
          <Grid spacing={2} className={classes.body}>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <br /><br/>
              <br /><h1> </h1>
              <br /><h3>COMPANY</h3>
              <div className={classes.p}>
              <p>About Us</p>
              <p>Careers</p>
              <p>Partners</p></div> </Grid>
            <Grid item xs={2}>
              <br /> <br />
              <br /><h1> </h1>
              <br /><h3>COURSES</h3>
              <div className={classes.p}>
              <p>Register</p>
              <p>Login</p>
              <p> Projects</p>
              <p>Teachers</p>
              <p>Partner</p>
              <p>Resources</p>
              <br /> <br /> <br/><br/></div></Grid>
            <Grid item xs={2} >
              <br /> <br />
              <br /><h1></h1>
              <br /><h3>SUPPORT</h3>
              <div className={classes.p}>
              <p>FAQs</p>
              <p>Helpdesk</p>
              <p>Contact Us</p></div></Grid>
            <Grid item xs={2} >
              <br /> <br />
              <br /><h1> </h1>
              <br /> <h3>LEGAL</h3>
              <div className={classes.p}>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p></div></Grid>
            <Grid item xs={3}>
              <br /> <br />
              <br /><h1> </h1>
              <br /><h3>LevelUp Works</h3>
              <div className={classes.p1}>
              <p>LevelUp Works is an Auckalnd-based enterprise dedicated to developing game-based learning software to help teachers in response to the New Zealand Digital Technologise & Hangarau Matihiko.</p>
              <p>alan@levelupworks.com</p>
              <p>(021) 688 185</p></div></Grid>
              <Grid item xs={1}></Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
