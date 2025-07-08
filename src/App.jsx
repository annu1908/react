import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App(){
    return(
        <>
        <Navbar/>
       
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/products" element={<Products/>}/>

        </Routes>
        <Footer/>
        </>
    )
}
export default App