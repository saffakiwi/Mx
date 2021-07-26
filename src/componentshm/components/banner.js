import React from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import LearnM from '../homepageIMG/bannerIMGs/LearnM.png';
import signUp from '../homepageIMG/bannerIMGs/signUp.png';
import babyBanner from '../homepageIMG/bannerIMGs/babyBanner.png';
import "../componentsCSS/banner.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    
    },
})

export default function Banner() {

    const styles = useStyles();

    return (
        <div className="maindiv" >
            {/* <Container class={{root: styles.root}} maxWidth="xl"> */}
                {/* <div className="banner"> */}
         <img className="babyImage" src={babyBanner} alt="this is baby" />
                    <div className="text">
                        <h1>Prepare young minds for a better <span style={{ color: "#42C0F6" }}>future.</span></h1>
                        <br />
                        <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
                        <br /><br/>
                        <Button style={{ height: "10%", width: "50%" }}> <img src={LearnM}  style={{ height: "45px" }} /></Button>
                        <Button style={{ height: "10%", width: "50%" }} > <img src={signUp} style={{ height: "45px" }} /></Button>
                        <h6 className="subtext">*Basic subscription includes the first 15 projects <span style={{fontWeight:"800"}}>free </span>of charge.</h6>
                    </div>
                {/* </div> */}
            {/* </Container> */}
        </div>
    )
}