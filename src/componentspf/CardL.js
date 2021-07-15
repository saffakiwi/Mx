import React from 'react';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import Ellipse39 from './Ellipse39.png';
import { CardContent } from '@material-ui/core';
import SettinBtn from './SettinBtn.png';
import EditBtn from './EditBtn.png';
import ChgPhoBtn from './ChgPhoBtn.png';
import { makeStyles } from '@material-ui/core';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import Aiden from './aiden.png';

const useStyles = makeStyles({
    root: {
        width: "220px",
        height: "370px",
        marginLeft: "250px",
        marginTop: "40px",
        borderRadius: "25px",
        flexGrow: "1",
        display: "flex",
        alignItems: "flex-end"
    },
    left: {
        padding: '48px',
        alignItems: "centre",
    }
});

export default function CardL() {
    const classes = useStyles();
    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     axios.get("http://localhost:3000/")
    //         .then(response => {
    //             setUsers(response.data)
    //         })
    // })

    return (
                <Card variant="outlined" className={classes.root}>
                    <CardContent className={classes.left}>
                       <img src={Aiden} style={{ height: "120px", width: "120px" }} /> <br />
                        <p><img src={EditBtn} style={{ height: "30px", width: "120px" }} /></p>
                        <p><img src={ChgPhoBtn} style={{ height: "30px", width: "120px" }} /></p>
                        <p><img src={SettinBtn} style={{ height: "30px", width: "120px" }} /></p>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
                    
                       )}