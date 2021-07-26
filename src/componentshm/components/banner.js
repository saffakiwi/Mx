import React from 'react';
import Button from '@material-ui/core/Button';
import { Container, Imag } from '@material-ui/core';
import LearnM from '../homepageIMG/bannerIMGs/LearnM.png';
import signUp from '../homepageIMG/bannerIMGs/signUp.png';
import babyBanner from '../homepageIMG/bannerIMGs/babyBanner.png';
import "../componentsCSS/banner.css";
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

// const useStyles = makeStyles => ({
// paperContainer:{
//     backgroundImage: `url(${babyBanner})`
// }
// });


export default function Banner() {

    // const styles = useStyles();

    return (
        <>
          <Container maxWidth="xl">
                <div className= "bbbanner">
                <div className="text7" >
                    <h1>Prepare young minds for a better <span style={{ color: "#42C0F6" }}>future.</span></h1>
                    <br />
                    <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
                    <br /><br />
                    <div className="buttonText">
                    <div className="bannerButton">
                    <Button> <img src={LearnM} style={{ height: "45px" }} /></Button>
                    <Button> <img src={signUp} style={{ height: "45px" }} /></Button></div>
                    <div> <h6 className="subtext">*Basic subscription includes the first 15 projects <span style={{ fontWeight: "800" }}>free </span>of charge.</h6>
               </div> 
               </div>
               </div>
               
            </div>
            </Container>
        </>
    )
}