import './App.css'
import React from "react";

import {  Route,Router,Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';

import Timeline from './routes/Timeline';
import FAQ from './routes/FAQ';


import Sponsors from './routes/Sponsors';
import Contact from './routes/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';




function App() {
  return (
   
    <div className="App" >
      <Navbar/>
        <Home/>
      <About/>
      <Sponsors/>
      <Contact/>
      <ScrollToTop/>
      <Footer/>
      
      
      
      
      </div>


 
    
  );
}

export default App;
