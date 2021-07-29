import React, { useState, useEffect } from "react";
import AppDrawer from './componentssp/appDrawer.js';
import Container from '@material-ui/core/Container';
import Navigation from './Navigation.js';

export default function Dashboard({page}) {

  return (
    
    <div>
      <AppDrawer/>

      <div>
        <Container>
        <Navigation page={page}/>
        </Container>
      </div>
    
    </div>
   
)}
