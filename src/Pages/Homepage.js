import React from 'react';
import { useNavigate } from 'react-router-dom';
import About from './About';
import Amenities from './Amenities';
import Services from './Services.js';
import Team from './Team';
import logo from '../Images/ShashEstate.jpg';
import banner from '../Images/Homepagebanner.jpg';
import Exploreproperty from './Exploreproperty';
import './HomePage.css'; 
import SellersRatedPage from './SellersRatedPage';

const Homepage = () => {
  const navigate = useNavigate(); 

  const goToSignin = () => {
    navigate('/login');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div>
      <div className="homepage">
        <nav className="home-navbar">
          <div className="home-navbar-left">
            <div className="home-logo">
              <img src={logo} alt="Logo" />
            </div>
            <ul className="home-nav-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#service">Our Services</a></li>
              <li><a href="#Amenities">Amenities</a></li>
              <li><a href="#Properties">Explore Properties</a></li>
              <li><a href="#Properties">Contact Us</a></li>
              <li><a href="#Team">The Team</a></li>
            </ul>
          </div>
          <div className="home-navbar-right">
            <button className="auth-button" onClick={goToSignin}>Login</button>
            <button className="auth-button" onClick={goToSignup}>Signup</button>
          </div>
        </nav>
        <br />
        <img src={banner} alt="Homepage Banner" />
        <header className="home-hero">
          <div className="home-hero-content">
            <h1>Welcome to UrbanKey</h1>
            <p>Your dream home is just a click away</p>
            <br />
            <a href="#Properties" className="home-hero-button">Explore Now</a>
          </div>
        </header>
      </div>
      <div>
        <About />
        <Services />
        <Amenities />
        <Exploreproperty />
        <SellersRatedPage/>
        <Team />
      </div>
    </div>
  );
}

export default Homepage;
