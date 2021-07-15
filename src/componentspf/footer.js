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
}));


export default function Footer() {
  const classes = useStyles();
  return (

    <div>
      <Box>
        <Container maxWidth="lg" container className={classes.root} >
          <Grid container spacing={1} className={classes.body}>
            <Grid item xs={2}>
              <br /><br/>
              <br /><h1></h1>
              <br /><h3>COMPANY</h3>
              <p>About Us</p>
              <p>Careers</p>
              <p>Partners</p> </Grid>
            <Grid item xs={2}>
              <br /> <br />
              <br /><h1></h1>
              <br /><h3>COURSES</h3>
              <p>Register</p>
              <p>Login</p>
              <p> Projects</p>
              <p>Teachers</p>
              <p>Partner</p>
              <p>Resources</p><br /> <br /><br /></Grid>
            <Grid item xs={2} >
              <br /> <br />
              <br /><h1></h1>
              <br /><h3>SUPPORT</h3>
              <p>FAQs</p>
              <p>Helpdesk</p>
              <p>Contact Us</p></Grid>
            <Grid item xs={2} >
              <br /> <br />
              <br /><h1></h1>
              <br /> <h3>LEGAL</h3>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p></Grid>
            <Grid item xs={3}>
              <br /> <br />
              <br /><h1></h1>
              <br /><h3>LevelUp Works</h3>
              <p>LevelUp Works is an Auckalnd-based enterprise dedicated to developing game-based learning software to help teachers in response to the New Zealand Digital Technologise & Hangarau Matihiko.</p>
              <p>alan@levelupworks.com</p>
              <p>(021) 688 185</p></Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
