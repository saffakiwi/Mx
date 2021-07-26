import React from 'react'
import { Container } from '@material-ui/core';
import bottomPromoCard from "../homepageIMG/bottomPromoIMGs/bottomPromoCard.png";

import '../componentsCSS/bottomPromo.css'

export default function BottomPromo() {
    return (
        <Container maxWidth="xl">
            <div className="bottomPromo">
                <div className="bottomPromoPic">
                    <img src={bottomPromoCard} alt="" /> </div>
                <div className="bottomPromoText">
                    <h2>What are you waiting for?</h2> <br /> <br />
                   <h3>Start teaching Digital Technologies today.</h3><br /> <br />
                    <p>If you need more information, we are happy to answer any questions you may have.</p>
                    <div className="bottomPromoButtons">
                        <button className="button5">ENQUIRE NOW</button>
                        <button className="button6">SIGN UP</button>
                    </div>
                </div>
            </div>
     </Container>
    )
}
