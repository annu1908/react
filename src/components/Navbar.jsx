import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar(){
    return(
        <>
        <nav>
        
            <h1>Annu's Portfolio</h1>
            <ul>
                <Link to={'/'}>Home</Link>
                <Link to={'/project'}>Project</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/about'}>About</Link>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;