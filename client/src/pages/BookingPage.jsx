import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import { rooms } from "../data/rooms";

export default function BookingPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const prefilledRoom = params.get("room") || "";

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-yellow-500 font-medium">Booking</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
                Reserve your stay at Bizmal Hotel
              </h1>
              <p className="mt-5 text-zinc-400 text-lg leading-8">
                Fill in your booking details below and send your request
                directly.
              </p>
            </div>

            <BookingForm rooms={rooms} prefilledRoom={prefilledRoom} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
