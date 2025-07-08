import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar(){
    return(
        <>
        <nav>
        
            <h1>Dreamscape Creation</h1>
            <ul>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/about'}>About</Link>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;