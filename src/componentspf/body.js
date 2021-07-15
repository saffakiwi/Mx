import React, {useState, useEffect} from 'react';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';
import CardL from './CardL';
import CardR from './CardR';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Project from './Bk2Proj.png';
import Dash from './Bk2Db.png';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#EEEEEE',
        flexGrow: "1",
        flexDirection: "column",
        alignItems: "flex-end",
        display: "flex",
    },
    btn: {
        marginRight: "170px",
        paddingBottom: "30px",
    },
});

export default function Body() {
    const classes = useStyles();
    const [users, setUsers] = useState({});

    // useEffect(() => {
    //     axios.get("http://localhost:3000/profile?id=2")
    //         .then(response => {
    //             setUsers(response.data)
    //         });
    // });
    return (
        <div>
            <Box>
                <Container maxWidth="lg" className={classes.root}>
                    <br /><br /><br />
                    <Grid container spacing={1} display= "flex" direction="row" >
                        <Grid item xs={5}> <CardL /></Grid>
                        <Grid item sm={7}><CardR user={users} /></Grid>
                    </Grid>
                    <div className={classes.btn} >
                        <Link to='./student'><Button><img src={Project} style={{ height: "35px", width: "150px" }} /></Button></Link>
                        <Button> <img src={Dash} style={{ height: "35px", width: "150px" }} /></Button>
                    </div>
                </Container>
            </Box>
        </div >
    )
};