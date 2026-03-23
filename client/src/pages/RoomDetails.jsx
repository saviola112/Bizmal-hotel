import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { rooms } from "../data/rooms";

export default function RoomDetails() {
  const { slug } = useParams();
  const room = rooms.find((item) => item.slug === slug);

  if (!room) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Room not found</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-yellow-500 hover:text-yellow-500"
          >
            Back to Rooms
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_0.8fr]">
            <section>
              <img
                src={room.image}
                alt={room.name}
                className="h-[260px] md:h-[500px] w-full rounded-[2rem] object-cover"
              />

              <div className="mt-8">
                <span className="inline-block rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
                  {room.badge}
                </span>

                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-yellow-500">
                  {room.name}
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                  {room.description}
                </p>

                <div className="mt-10">
                  <h2 className="text-2xl font-semibold">Room Features</h2>
                  <ul className="mt-5 space-y-4 text-zinc-300">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 text-green-400">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <aside>
              <div className="sticky top-28 rounded-[2rem] border border-white/10 bg-zinc-900 p-6">
                <h3 className="text-2xl font-semibold text-yellow-500">
                  Room Summary
                </h3>

                <div className="mt-6">
                  <p className="text-sm text-zinc-400">Price</p>
                  <p className="mt-2 text-3xl font-bold">
                    ₦{room.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-zinc-500">per night</p>
                </div>

                <Link
                  to={`/booking?room=${encodeURIComponent(room.name)}`}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-yellow-500 px-5 py-3.5 font-semibold text-black transition hover:bg-yellow-400"
                >
                  Book This Room
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
