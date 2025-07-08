import React from "react";
import './Footer.css';
function Footer(){
    return(
        <>
        <footer className="footer" style={{
          position:'fixed',
          bottom:0,
          width:"100%"
        }}>
        <p>&copy; 2025 Dreamscape_Creation.All rights reserved.</p>
        </footer>
      </>
    )
}
export default Footer;