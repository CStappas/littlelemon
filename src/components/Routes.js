import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import BookingPage from "../components/BookingPage";

import Main from "../components/Main";

import ConfirmedBooking from "./ConfirmedBooking";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/booking" element={<BookingPage />} />
    <Route path="/confirmed" element={<ConfirmedBooking />}/>
  </Routes>
);

export default AppRoutes;
