import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import BookingPage from "../components/BookingPage";
import About from "../components/About";
import Main from "../components/Main";
import Homepage from "../components/Homepage";
import Menu from "../components/Menu";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/booking" element={<BookingPage />} />
    
  </Routes>
);

export default AppRoutes;
