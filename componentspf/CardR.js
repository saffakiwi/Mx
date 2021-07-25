import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        borderRadius: "25px",
        marginTop: "40px",
        marginRight: "180px",
        elevation: "0",
        marginBottom: "40px",
    },
    left: {
        display: "flex",
        padding: '7px',
        display: "block",
        margin: "auto",
    },

    h1: {
        fontFamily: "Nunito",
        fontSize: "45px",
        fontWeight: "bold",
        color: "#707070",
        marginLeft: "80px",
        marginTop: "30px",
    },
    list: {
        marginLeft: "13px",
        marginBottom: "50px",
        spacing: "20px",
        marginRight: '0',
    },
    a: {
        fontFamily: "Nunito",
        fontSize: "20px",
        fontWeight: "bold",
        color: "#a5a5a5",
        padding: "12px",
    },
    b: {
        fontFamily: "Open Sans",
        fontSize: "20px",
        color: "#707070",
        padding: "12px",
        marginRight: "0",
    }
});


export default function CardR({ match }) {
    const [userInfo, setUserInfo] = useState([])
    const classes = useStyles();
    const user_id = useParams();

    // useEffect(() => {
    //     axios.post("http://localhost:4000/getUser", {

    //     })
    //         .then(response => {
    //             console.log(response.data)
    //             setUserInfo(response.data)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    return (
        <>

            <Card variant="outlined" className={classes.root} >

                <CardContent className={classes.left} key={userInfo.user_id}>
                    {/* {userInfo.length > 0 && ( */}
                        <h1 className={classes.h1}> {userInfo[0].first_name} {userInfo[0].last_name}</h1>
)}
                        <Grid className={classes.list} container spacing={6} >

                            <Grid item xs={5} className={classes.a}>
                                <p>School</p>
                                <p>Teacher</p>
                                <p>Course</p>
                                <p>Email Address</p>
                                <p>Contact No.</p>
                                <p>Date of Birth</p>
                            </Grid>
                            {userInfo.length > 0 && (
                            <Grid item sm={6} className={classes.b}>
                                <p>{userInfo[0].school}</p>
                                <p>{userInfo[0].teacher_name}</p>
                                <p>{userInfo[0].course}</p>
                                <p>{userInfo[0].email}</p>
                                <p>{userInfo[0].contact_number}</p>
                                <p>{userInfo[0].date_of_birth}</p>
                            </Grid>)}

                        </Grid> 
                   
                </CardContent>

            </Card>

        </>
    );
}

// You will need to create a usestyles for the root - you will then be able to make changes to the sizing. Something like:
// name: {
// width: "xx",
// height: "xx",
// },

// then in your element:
// classes={{root: styles.name}}

