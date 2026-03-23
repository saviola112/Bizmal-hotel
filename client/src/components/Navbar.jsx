import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-yellow-500"
        >
          BIZMAL HOTEL
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-500 transition">
            Home
          </Link>
          <Link to="/rooms" className="hover:text-yellow-500 transition">
            Rooms
          </Link>
          <Link to="/booking" className="hover:text-yellow-500 transition">
            Booking
          </Link>
          <Link to="/contact" className="hover:text-yellow-500 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
