import React from 'react';
import Footer from './componentspf/footer';
import Body from './componentspf/body.js';
import Header1 from './componentspf/header1';
import {useState, useEffect} from 'react';



export default function ProfileViewer() {


    return (
     <div>
            <Header1 />
           <Body  />
            <Footer />
        </div>
    );
}
