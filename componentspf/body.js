import React, { useState, useEffect } from 'react';
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
import { Link, useParams } from 'react-router-dom';


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
    const [userInfo, setUserInfo] = useState([])
    const user_id = useParams([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:4001/getUser", {

        })
            .then(response => {
                console.log(response.data)
                setUserInfo(response.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <Box>
                <Container maxWidth="lg" className={classes.root}>
                    <br /><br /><br />
                    <Grid container spacing={1} display="flex" direction="row" >
                        <Grid item xs={5}> <CardL /></Grid>
                      
                                <Grid item sm={7} key={users.user_id}>
                                    <CardR user={users.user_id} />

                                </Grid>
                        
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