import React from "react";
import './Hero.css'
import profileImg from "../assets/profile.jpeg";
function Hero(){
    return(
        <section className="home-section" id="Home">
      <div className="home-content">
        <div className="home-text">
          <h1>Hi, I’m <span className="highlight">Annu Sandhu</span></h1>
          <h3 className="animated-tagline"> Developer | Artist | Dreamscape_Creation Founder</h3>
          <a href="/Annu_Resume.pdf"  className="contact-btn">Resume</a>
        </div>
        <div className="home-image">
          <img src={profileImg} alt="Annu Sandhu" />
        </div>
      </div>
    </section>
        
       
    
    )
}
export default Hero;