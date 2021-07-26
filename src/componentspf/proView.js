import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header1.js';
import Footer from './footer';
import { Box, Container, Grid, Card, Button, Link, makeStyles, CardContent } from '@material-ui/core';
import Project from './Bk2Proj.png';
import Dash from './Bk2Db.png';
import EditBtn from './EditBtn.png';
import ChgPhoBtn from './ChgPhoBtn.png';
import TabProgressTracker from '../componentssp/tabProgressTracker.js';

const useStyles = makeStyles({
    roota: {
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
    cardl: {
        width: "220px",
        height: "370px",
        marginLeft: "250px",
        marginTop: "40px",
        borderRadius: "25px",
        flexGrow: "1",
        display: "flex",
        alignItems: "flex-end"
    },
    cardr: {
        borderRadius: "25px",
        marginTop: "40px",
        marginRight: "180px",
        elevation: "0",
        marginBottom: "40px",
        textAlign: "justify",
    },
    left1: {
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
        padding: '30px',
        textAlign: 'center',
    },
    list1: {
        marginLeft: "13px",
        marginBottom: "50px",
        lineSpacing: "30px",
        marginRight: '0',
        lineHeight: '2.5',

    },
    a1: {
        fontFamily: "Nunito",
        fontSize: "20px",
        // fontWeight: "lighter",
        color: "#a5a5a5",
        padding: "20px",

    },
    b1: {
        // fontFamily: "Nunito",
        fontSize: "20px",
        color: "#707070",
        padding: "12px",
        marginRight: "0",
    },
    // p: {
    //     fontFamily: "Nunito",
    //     fontSize: "20px",
    //     // fontWeight: "lighter",
    //     color: "#a5a5a5",
    //     padding: "20px",
    // }
});


export default function ProView({ match }) {
    const [userInfo, setUserInfo] = useState([])
    const classes = useStyles();


    useEffect(() => {
        axios.post("http://localhost:4001/getUser", {
            user_id: match.params.user_id
        })
            .then(response => {
                console.log(response.data)
                setUserInfo(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Header />
            {userInfo.length > 0 && (
                <Box>
                    <Container maxWidth="lg" className={classes.roota}>
                        <br /><br /><br />

                        <Grid container spacing={1} display="flex" direction="row" >
                            <Grid item xs={5}>
                                <Card variant="outlined" className={classes.cardl} >

                                    <CardContent className={classes.left1}  >

                                        <img src={userInfo[0].profile_pics} alt="profile" />
                                        <br />
                                        <p><img src={EditBtn} style={{ height: "30px", width: "120px" }} /></p>
                                        <p><img src={ChgPhoBtn} style={{ height: "30px", width: "120px" }} /></p>
                                        {/* <p><img src={SettinBtn} style={{ height: "30px", width: "120px" }} /></p> */}
                                    </CardContent>

                                </Card>
                            </Grid>
                            <Grid item sm={7} >

                                <Card variant="outlined" className={classes.cardr} >
                                    <h1 className={classes.h1}> {userInfo[0].first_name} {userInfo[0].last_name}</h1>
                                    <CardContent className={classes.left}>

                                        <Grid container spacing={6} className={classes.list1} >
                                            <Grid item xs={5} className={classes.a1}>
                                                <p>School</p>
                                                <p>Teacher</p>
                                                <p>Course</p>
                                                <p>Date of Birth</p>
                                                <p>Contact No.</p>
                                                <p>Email Address</p>
                                            </Grid>
                                            <Grid item sm={6} className={classes.b1}>
                                                <div className={classes.p} >
                                                    <p >{userInfo[0].school}</p>
                                                    <p>{userInfo[0].teacher_name}</p>
                                                    <p>{userInfo[0].course}</p>
                                                    <p>{userInfo[0].date_of_birth}</p>
                                                    <p>{userInfo[0].contact_number}</p>
                                                    <p>{userInfo[0].email}</p>

                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>

                                </Card>
                            </Grid>
                        </Grid>
                        <div className={classes.btn} >
                            <Button><img src={Project} style={{ height: "35px", width: "150px" }} /></Button>
                            <a href='../progresstracker'><Button> <img src={Dash} style={{ height: "35px", width: "150px" }} /></Button></a>
                        </div>
                    </Container>
                </Box>
            )}
            <Footer />
        </>
    );
}


// style={{ height: "120px", width: "120px" }}