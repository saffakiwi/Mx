import { Button } from '@material-ui/core';
import React from 'react';
import Teacher from './img/teacher.png';
import Enquire from './img/enquire.png';
import SignUp from './signUp.png';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    section: {
        display: "flex",
        flexwrap: "wrap",
        marginTop:"50px",
        padding: "30px",
        height: "430px",
    },
    left: {
        flex: "50%",
        marginLeft: "120px",
        justifyItems: "centre",

    },
    right: {
        flex: "50%",
        textAlign: "left",
        marginRight:"50px",
        marginLeft: "30px",
    },
})

export default function Enquiry() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.section}>
                <div className={classes.left}><img src={Teacher} style={{ height:"300px" }} /></div>
                <div className={classes.right}> <h1>What are you waiting for?</h1>
                    <h2 style={{fontFamily:"Open Sans", fontSize:"22px", fontWeight:"normal"}}>Start teaching Digital Technologise today.</h2>
                    <p style={{fontFamily:"Open Sans", fontSize:"15px", fontWeight:"normal", marginRight:"40px", marginBottom:"20px" }}>If you need more information, we are happy to answer any questions you may have.</p>
                    <br/><br/>
                    <Button><img src={Enquire} style={{ height: "35px", width: "150px" }} /></Button>
                    <Button><img src={SignUp} style={{ height: "35px", width: "150px" }} /></Button></div>
            </Container>
        </div>
    )
}