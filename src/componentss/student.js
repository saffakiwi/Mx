import React from 'react';
import { Container, Button, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Teacher from './teacher.png';
import Aiden from './aiden.png';
import Courtney from './courtney.png';
import Rawiri from './rawiri.png';
import Lisa from './lisa.png';
import Neveah from './neveah.png';
import ProfileViewer from '../profileViewer';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    background: {
        width: "80%",
        backgroundColor: "#b2e4fa",
        height: "700px",
        marginRight: "100px"
    },
    button1: {
        margin: "5px",
    },
    button2: {
        margin: "5px"
    },
    button3: {
        margin: "5px"
    },
    buttongroup: {
        fontSize: "8px",
        color: "#6c6c6c",
    },
    box: {
        width: "80%",
        backgroundColor: "#D8F1FC",
        height: "600px",
        marginRight: "80px",
        borderRadius: "10px",
    },
});

export default function Student() {
    const styles = useStyles();
       

    return (
        <Container classes={{ root: styles.background }} maxWidth="xl" >

            <div id="button_group">
                <Button id="button1" classes={{ root: styles.button1, text: styles.button1 }} size="small" variant="contained">Take Screenshot</Button>
                <Button id="button2" classes={{ root: styles.button2 }} size="small" variant="contained">Help Centre</Button>
                <Button id="button3" classes={{ root: styles.button3 }} size="small" variant="contained">More Projects</Button>
            </div>
            <Container classes={{ root: styles.box }} maxWidth="lg">
                <Link to='/profileviewer'><Button ><img src={Aiden} /></Button></Link> 
                <Button> <img src={Courtney} /> </Button>
                <Button> <img src={Rawiri} /> </Button>
                <Button> <img src={Lisa} /> </Button>
                <Button> <img src={Neveah} /> </Button>
            </Container>

        </Container >

    )
};