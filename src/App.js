import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Terms from "./components/terms/terms";
import Donar from "./components/donar/donar";

function App() {
  return (
    <Router>
      <Navbar />
      <Outlet/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/donar" element={<Donar/>} />
        
      </Routes>
      <Footer />
      
    </Router>
  );
}


export default App;
