import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Logo from './StarLogo.png';
import Maori from './Maori.png';
import Nz from './Nz.png';
import Lang from './Lang.png';
import { makeStyles } from '@material-ui/core';
import E40 from './Ellipse40.png';
import { Container } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '45px',
    background: '#43C0F6',
    flex: "responsive",
  },
  logo3: {
    position: "relative",
    left: "120px",
    top: "5px",
  },
  logo3Pic: {
    width: "120px",
    alignItems: "left",
  },
  mid: {
    fontSize: '11px',
    width: '26%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },

  midd: {
    color: "#ffffff",
    justifyContent: 'space-between',
    textDecoration: 'none',
    position: 'relative',
    left: '100%',
    top: '20px',
    fontWeight: '680',
    fontFamily: 'Open Sans',
  },
  rt: {
    display: "flex",
    justifyContent: "flex-end",
    position: 'relative',
    marginLeft: '600px',
  },

});

export default function Header(props) {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState([])

  //   useEffect(() => {
  //     axios.post("http://localhost:4001/getUser", {
  //         user_id: match.params.user_id
  //     })
  //         .then(response => {
  //             console.log(response.data)
  //             setUserInfo(response.data)
  //         })
  //         .catch(err => console.log(err))
  // }, [])

  return (
    <div>

      <Container maxWidth="lg" className={classes.root}  >
        <div className={classes.logo3}>
          <img src={Logo} className={classes.logo3Pic} /></div>

        <div className={classes.mid} >
          <a className={classes.midd} href="#"> HOME</a>
          <a className={classes.midd} href="#">PROJECTS</a>
          <a className={classes.midd} href="#">TEACHERS </a> </div>

        <div className={classes.rt}>
          <IconButton style={{ height: "0px", width: "30px" }}><img src={Lang} style={{ height: "10px", width: "20px", opacity: "80%" }} /> </IconButton>
          <IconButton style={{ height: "0px", width: "1px" }}> <img src={Nz} style={{ height: "10px", width: "18px" }} /></IconButton>
          <IconButton style={{ height: "0px", width: "35px" }}><img src={Maori} style={{ height: "10px", width: "18px" }} /></IconButton>
          </div>
          <div>
    
          </div>
       
      </Container>

    </div>
  )
};
