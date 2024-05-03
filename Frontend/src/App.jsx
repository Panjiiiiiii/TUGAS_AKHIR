import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./Components/Layouts/User";
import Home from "./Components/Home/LandingPage/LandingPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Gallery from "./Components/Gallery/Gallery";
import Login from "./Components/Login/Login";
import Booking from "./Components/Booking/Booking";
import Admin from "./Admin";
import AdminLayout from "./Components/Layouts/Admin";
import DataKamar from "./Components/Admin/DataKamar";
import Transaksi from "./Components/Admin/Transaksi";
import CheckIn from "./Components/Admin/CheckIn";
import CheckOut from "./Components/Admin/CheckOut";

import Register from "./Components/Register/Register";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Route>


        <Route path="/Admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="DataKamar" element={<DataKamar />} />
          <Route path="Transaksi" element={<Transaksi />} />
          <Route path="CheckIn" element={<CheckIn />} />
          <Route path="CheckOut" element={<CheckOut />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
