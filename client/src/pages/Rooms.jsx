import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoomCard from "../components/RoomCard";
import { rooms } from "../data/rooms";

export default function Rooms() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-yellow-500 font-medium">Our Rooms</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
                Choose the room that fits your comfort and style
              </h1>
              <p className="mt-5 text-zinc-400 text-lg leading-8">
                Explore our room options, from budget-friendly comfort to more
                premium and refined stays.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {rooms.map((room) => (
                <RoomCard key={room.slug} room={room} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
