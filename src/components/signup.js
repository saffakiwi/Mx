import { Container } from '@material-ui/core';
import React from 'react';
import Hero from './img/Hero.png';
import { makeStyles } from '@material-ui/core';
import './signup.css';
import { Button } from '@material-ui/core';
import LearnM from './img/LearnM.png';
import signup from './signUp.png';




export default function Signup() {
// const classes = useStyles();
    return (
<div >
        <Container maxWidth="lg" className='pic' >
        <div className="signup">
              <h1>Prepare young minds for a better future</h1>
              <p>Let us help you advance students in Digital Technologies and other learning area with our project-based learning programme.</p>
              <Button><img src={LearnM} className="B" style={{ height: "33px" }} /></Button>
              <Button><img src={signup} className="B" style={{ height: "33px" }} /></Button> 
           </div> 
        </Container>
    

         </div>
    );
}
