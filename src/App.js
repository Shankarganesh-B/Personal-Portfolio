import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {

  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/projects" element={<Project></Project>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
      
    </BrowserRouter>
    
  )
}

export default App;
