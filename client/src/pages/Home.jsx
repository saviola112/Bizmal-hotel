import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { rooms } from "../data/rooms";
import RoomCard from "../components/RoomCard";

export default function Home() {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
              Comfort, style, and hospitality in Lagos
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Experience a stay that feels refined, relaxing, and memorable
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl leading-8 text-zinc-300">
              Bizmal Hotel offers elegant accommodation, warm hospitality, and a
              welcoming environment for guests who value comfort, convenience,
              and peace of mind.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="rounded-full bg-yellow-500 px-6 py-3.5 font-semibold text-black hover:bg-yellow-400 transition"
              >
                Book Your Stay
              </Link>
              <Link
                to="/rooms"
                className="rounded-full border border-yellow-500 px-6 py-3.5 font-semibold text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
              >
                Explore Rooms
              </Link>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              Located in Lagos • Clean rooms • Easy booking • Guest support
            </p>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="border-y border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="rounded-2xl bg-white/5 p-5">
            <p className="text-2xl font-bold text-yellow-500">24/7</p>
            <p className="mt-2 text-zinc-300">Guest Support</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-5">
            <p className="text-2xl font-bold text-yellow-500">5</p>
            <p className="mt-2 text-zinc-300">Room Options</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-5">
            <p className="text-2xl font-bold text-yellow-500">Lagos</p>
            <p className="mt-2 text-zinc-300">Prime Location</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-5">
            <p className="text-2xl font-bold text-yellow-500">Easy</p>
            <p className="mt-2 text-zinc-300">Booking Process</p>
          </div>
        </div>
      </section>

      {/* Welcome / About */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-500 font-medium">
              Welcome to Bizmal Hotel
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              A comfortable stay designed for business, leisure, and relaxation
            </h2>
            <p className="mt-6 text-zinc-400 text-lg leading-8">
              At Bizmal Hotel, we provide a calm and well-prepared space for
              guests who want convenience, comfort, and quality service. Whether
              you are visiting for a short business trip, a weekend stay, or a
              longer visit, our rooms are designed to help you feel settled and
              at ease.
            </p>
            <p className="mt-5 text-zinc-400 text-lg leading-8">
              Our goal is simple: to give every guest a smooth experience from
              booking to check-out, with clean spaces, reliable support, and
              room options that fit different budgets and preferences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-yellow-500">
                Comfort First
              </h3>
              <p className="mt-3 text-zinc-400 leading-7">
                Rooms designed to help you rest, recharge, and enjoy your stay.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-yellow-500">
                Easy Access
              </h3>
              <p className="mt-3 text-zinc-400 leading-7">
                A convenient Lagos location that keeps your trip practical and
                stress-free.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-yellow-500">
                Flexible Choices
              </h3>
              <p className="mt-3 text-zinc-400 leading-7">
                From budget-friendly rooms to more premium stays, there is an
                option for you.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-yellow-500">
                Reliable Service
              </h3>
              <p className="mt-3 text-zinc-400 leading-7">
                We focus on helpful service and a booking process that feels
                simple and direct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <p className="text-yellow-500 font-medium">Featured Rooms</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                A selection of our best stays
              </h2>
              <p className="mt-4 text-zinc-400 text-lg">
                Explore some of our most popular room options, each designed to
                offer comfort, style, and value.
              </p>
            </div>

            <Link
              to="/rooms"
              className="rounded-full border border-yellow-500 px-6 py-3 font-semibold text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
            >
              View All Rooms
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredRooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-yellow-500 font-medium">
              Why Choose Bizmal Hotel
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Everything you need for a smooth and satisfying stay
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-yellow-500">
                Clean Spaces
              </h3>
              <p className="mt-3 text-zinc-400 leading-7">
                We maintain rooms that feel fresh, comfortable, and welcoming.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-yellow-500">
                Affordable Options
              </h3>
              <p className="mt-3 text-zinc-400 leading-7">
                Different room categories help you choose a stay that fits your
                budget.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-yellow-500">
                Guest Convenience
              </h3>
              <p className="mt-3 text-zinc-400 leading-7">
                Our setup is designed to make booking, check-in, and staying
                easy.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-yellow-500">
                Relaxing Atmosphere
              </h3>
              <p className="mt-3 text-zinc-400 leading-7">
                Bizmal Hotel gives guests a calm environment to rest and
                recharge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[2rem] border border-yellow-500/20 bg-gradient-to-r from-zinc-900 to-black p-10 md:p-14 text-center">
            <p className="text-yellow-500 font-medium">
              Ready to Stay With Us?
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Book your room and enjoy comfort the Bizmal way
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-zinc-400 text-lg leading-8">
              Whether you want a quick stay, a relaxing room, or a more premium
              experience, Bizmal Hotel is ready to welcome you.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/booking"
                className="rounded-full bg-yellow-500 px-6 py-3.5 font-semibold text-black hover:bg-yellow-400 transition"
              >
                Book Now
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-yellow-500 px-6 py-3.5 font-semibold text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
