import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import RoomDetails from "./pages/RoomDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/rooms/:slug" element={<RoomDetails />} />
    </Routes>
  );
}
