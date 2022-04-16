import React from 'react';
import { Header, Footer, Map, Profile, Home, Explore } from './containers';
import {NavBar} from './components';
import {Helmet} from 'react-helmet';
import './App.css';
import { Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <div className='App' >
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
      
      <div>
        <Footer />
      </div>
      
    </div>
   
  )
}

export default App

