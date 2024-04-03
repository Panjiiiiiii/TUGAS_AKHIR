import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/LandingPage/LandingPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Gallery from "./Components/Gallery/Gallery";
import Login from "./Components/Login/Login";
import Booking from "./Components/Booking/Booking";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
