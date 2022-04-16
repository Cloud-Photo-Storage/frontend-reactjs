import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="awt__navbar">
      <div className="awt__navbar-links">
        
        <div className="awt__navbar-list">
            <li className="awt__navbar-logo"><a href="home" >AWT</a></li>
            <li className="awt__navbar-item"><a href="home" >Home</a></li>
            <li className="awt__navbar-item"><a href="map" >My Map</a></li>
            <li className="awt__navbar-item"><a href="explore" >Explore</a></li>
            <li className="awt__navbar-item"><a href="profile" >Proflie</a></li>
        </div>  

        <div className="awt__navbar-sign">
          <li className="awt__navbar-sign_in"><a href="#signin">Sign In</a></li>
          <li className="awt__navbar-sign_up"><button><p>Sign Up</p></button></li>
        </div>
          
      </div>
    </div>
  )
}

export default NavBar