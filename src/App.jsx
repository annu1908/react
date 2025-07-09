import React from "react";
import { Route, Routes ,BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import './App.css'

function App(){
    return(
         <div className="app-wrapper">
            <Router>
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
        </Router>
        </div>
        
    )
}
export default App