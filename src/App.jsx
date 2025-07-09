import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App(){
    return(
        
        <div className="app-wrapper">
        <Navbar/>
       <div className="content-wrap">
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/project" element={<Project/>}/>

        </Routes>
        </div>
        <Footer/>
        </div>
        
    )
}
export default App