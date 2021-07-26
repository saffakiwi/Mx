import React from 'react'
import { Container, Button } from '@material-ui/core';
import "../componentsCSS/weOffer.css"
import bkgdCard from "../homepageIMG/weOfferIMGs/backgroundCard.png";
import animationOverlay from "../homepageIMG/weOfferIMGs/animationOverlay.png";
import Screen1 from "../homepageIMG/weOfferIMGs/Projects 01.png";
import gamesOverlay from "../homepageIMG/weOfferIMGs/gamesOverlay.png";
import Screen2 from "../homepageIMG/weOfferIMGs/Projects 02.png";
import chatbotOverlay from "../homepageIMG/weOfferIMGs/chatbotOverlay.png";
import Screen3 from "../homepageIMG/weOfferIMGs/Projects 03.png";
import augmentedReality from "../homepageIMG/weOfferIMGs/augmentedReality.png";
import Screen4 from "../homepageIMG/weOfferIMGs/Projects 04.png";
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    
    },
})

export default function WeOffer() {
    const [changeScreen, setChangeScreen] = useState('b1')
    var image = '';

    const handleChange = (e) => {
        setChangeScreen(e.currentTarget.value)
    }
    if (changeScreen === 'b2') {
        image = <img src={Screen2} />
        console.log(2);
    } else if (changeScreen === 'b3') {
        image = <img src={Screen3} />
        console.log(3);
    } else if (changeScreen === 'b4') {
        image = <img src={Screen4} />
        console.log(4);
    } else if (changeScreen === 'b1') {
        image = <img src={Screen1} />
        console.log(1)
    }

    const styles = useStyles();

    return (
        <Container classes={{root: styles.root}} maxWidth="xl">
            <div className="weOffer" value={changeScreen}>

                <div className="left">
                    <div className="weOfferText">
                        <h2>What we offer</h2>
                        <br />
                        <p>The Creative Problem Solving programme is series of digital creation aimed to encourage
                            self-motvion and student agency, designed by New Zealand's leading import PropTypes from 'prop-types'
                            industry experts and schools.  </p>
                        <br />  <br />
                        <h3>What will students create?</h3>
                    </div>
                    <br />

                    <div className="weOfferButtons" >

                        <div className="weOfferCard" >
                            <Button value="b1" style={{ padding: "0" }} onClick={handleChange}> <img className="backCard" src={bkgdCard} />
                                <img className="overlay" src={animationOverlay} />
                                <p>ANIMATION</p></Button>
                        </div>
                        <div className="weOfferCard" value="b2">
                            <Button value="b2" style={{ padding: "0" }} onClick={handleChange}> <img className="backCard" src={bkgdCard} alt="" />
                                <img className="overlay" src={gamesOverlay} />
                                <p>GAMES</p></Button>
                        </div>
                        <div className="weOfferCard" value='b3'>
                            <Button value="b3" style={{ padding: "0" }} onClick={handleChange}><img className="backCard" src={bkgdCard} alt="" />
                                <img className="overlay" src={chatbotOverlay} value="b3" />
                                <p value='b3'>CHATBOTS</p></Button>
                        </div>
                        <div className="weOfferCard" value='b4'>
                            <Button
                                style={{ padding: "0" }} onClick={handleChange} value='b4'>
                                <img className="backCard" src={bkgdCard} />
                                <img className="overlay" src={augmentedReality} />
                                <p>AUGMENTED REALITY</p></Button>
                        </div>
                    </div>
                </div> <br />
               
               <div className="right">
                <div className="weOfferPic">
                    <p2>{image}</p2>
                    <div className="radioButtons">
                        <input type="radio" name="radio" onClick={handleChange} value="b1" />
                        <input type="radio" name="radio" onClick={handleChange} value='b2' />
                        <input type="radio" name="radio" onClick={handleChange} value='b3' />
                        <input type="radio" name="radio" onClick={handleChange} value='b4' />
                    </div>
                    <br />
                </div>
                </div>

            </div>
        </Container>
    )
}