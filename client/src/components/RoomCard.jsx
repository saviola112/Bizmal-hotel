import React from "react";
import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-2">
      <img
        src={room.image}
        alt={room.name}
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <span className="inline-block rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
          {room.badge}
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-yellow-500">
          {room.name}
        </h3>
        <p className="mt-3 text-zinc-400">{room.summary}</p>
        <p className="mt-4 text-xl font-bold">
          ₦{room.price.toLocaleString()} / night
        </p>
        <Link
          to={`/rooms/${room.slug}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-yellow-500 py-3 font-semibold text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
        >
          View Room
        </Link>
      </div>
    </article>
  );
}
