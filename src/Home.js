import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App'; 
import './App.css';
import Enquiry from './components/enquiry';
import Signup from './components/signup';


function Home() {
  return (
    <div className="App">
      <Header />
      <Signup />
      <Enquiry />
      <Footer />
      </div>
  );
}

export default Home;
