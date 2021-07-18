import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import axios from 'axios';


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


export default function CardR() {
    const classes = useStyles();
    // const [first_name, setFirst_name] = useState([]);
    // const [last_name, setLast_name] = useState([]);
    // const [school, setSchool] = useState([]);
    // const [course, setCourse] = useState([]);
    // const [date_of_birth, setDate_of_birth] = useState([]);
    // const [contact_number, setContact_number] = useState([]);
    // const [email, setEmail] = useState([]);
    const [users, setUser] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/user")
            .then(response => {
                setUser(response.data)
            })
    }, []);

    return (
        <>
            <Card variant="outlined" className={classes.root} >
                <CardContent className={classes.left}>
                    {users.map(users => (
                        <h1 className={classes.h1}> {users.first_name} {users.last_name}</h1>
                    ))}
                    <Grid className={classes.list} container spacing={6} >

                        <Grid item xs={5} className={classes.a}>
                            <p>School</p>
                            <p>Teacher</p>
                            <p>Email Address</p>
                            <p>Contact No.</p>
                            <p>Date of Birth</p>
                        </Grid>

                        {users.map(users => (
                            <Grid item sm={6} className={classes.b}>
                                <p>{users.school}</p>
                                <p>{users.teacher_id}</p>
                                <p>{users.email}</p>
                                <p>{users.contact_number}</p>
                                <p>{users.date_of_birth}</p>
                            </Grid>
                        ))}
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

