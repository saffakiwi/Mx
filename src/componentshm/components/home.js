import React from 'react';
import Header from "./header.js";
import Banner from "./banner";
import WeOffer from "./weOffer";
import DigitalSkills from "./digitalSkills"
import Info from "./info";
import BottomBanner from "./bottomPromo"
import Footer from './footer';
import "../componentsCSS/homepage.css"


export default function Homepage({ setCurrentUser }) {
    return (

        <div className="homepage">
            <Header setCurrentUser={setCurrentUser}/>
            <Banner />
            <WeOffer />
            <DigitalSkills />
            <Info />
            <BottomBanner />
            <Footer />
        </div>
    )
}
