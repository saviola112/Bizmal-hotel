import React, { useEffect, useState } from "react";

export default function BookingForm({ rooms, prefilledRoom }) {
  const [formData, setFormData] = useState({
    guestName: "",
    guestPhone: "",
    guestEmail: "",
    guestCount: "1",
    roomName: "",
    checkIn: "",
    checkOut: "",
  });

  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledRoom) {
      setFormData((prev) => ({ ...prev, roomName: prefilledRoom }));
    }
  }, [prefilledRoom]);

  const selectedRoom = rooms.find((room) => room.name === formData.roomName);
  const roomRate = selectedRoom ? selectedRoom.price : 0;

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;

    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diff = end - start;
    const nights = diff / (1000 * 60 * 60 * 24);

    return nights > 0 ? nights : 0;
  };

  const nights = calculateNights();
  const total = roomRate * nights;

  const handleChange = (e) => {
    setFeedback({ type: "", message: "" });
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.guestName ||
      !formData.guestPhone ||
      !formData.guestEmail ||
      !formData.guestCount ||
      !formData.roomName ||
      !formData.checkIn ||
      !formData.checkOut
    ) {
      setFeedback({
        type: "error",
        message: "Please complete all booking fields.",
      });
      return;
    }

    if (nights < 1) {
      setFeedback({
        type: "error",
        message: "Check-out date must be later than check-in date.",
      });
      return;
    }

    const apiUrl = import.meta.env.VITE_API_URL;

    console.log("VITE_API_URL:", apiUrl);
    console.log("Booking payload:", {
      ...formData,
      nights,
      total,
    });

    if (!apiUrl) {
      setFeedback({
        type: "error",
        message: "API URL is missing. Check client/.env",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          nights,
          total,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("Server returned an invalid response.");
      }

      if (!response.ok) {
        throw new Error(data.message || "Booking failed.");
      }

      setFeedback({
        type: "success",
        message: "Booking request sent successfully.",
      });

      setFormData({
        guestName: "",
        guestPhone: "",
        guestEmail: "",
        guestCount: "1",
        roomName: "",
        checkIn: "",
        checkOut: "",
      });
    } catch (error) {
      console.error("Booking request error:", error);

      setFeedback({
        type: "error",
        message: error.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-14 rounded-[2rem] border border-white/10 bg-black/40 p-6 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Full Name</label>
          <input
            type="text"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Phone Number</label>
          <input
            type="tel"
            name="guestPhone"
            value={formData.guestPhone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Email Address</label>
          <input
            type="email"
            name="guestEmail"
            value={formData.guestEmail}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Guests</label>
          <select
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-yellow-500"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">Choose Room</label>
          <select
            name="roomName"
            value={formData.roomName}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-yellow-500"
          >
            <option value="">-- Select a Room --</option>
            {rooms.map((room) => (
              <option key={room.slug} value={room.name}>
                {room.name} — ₦{room.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">Check-In Date</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Check-Out Date</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6 rounded-3xl border border-yellow-500/20 bg-black p-6 md:grid-cols-3">
        <div>
          <p className="text-sm text-zinc-400">Room Rate</p>
          <p className="text-2xl font-bold">₦{roomRate.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-zinc-400">Number of Nights</p>
          <p className="text-2xl font-bold">{nights}</p>
        </div>
        <div>
          <p className="text-sm text-zinc-400">Estimated Total</p>
          <p className="text-2xl font-bold text-yellow-500">
            ₦{total.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-yellow-500 px-6 py-3.5 font-semibold text-black hover:bg-yellow-400 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Booking Request"}
        </button>
      </div>

      {feedback.message && (
        <div
          className={`mt-6 rounded-2xl px-4 py-3 ${
            feedback.type === "success"
              ? "border border-green-500/30 bg-green-500/10 text-green-300"
              : "border border-red-500/30 bg-red-500/10 text-red-300"
          }`}
        >
          {feedback.message}
        </div>
      )}
    </form>
  );
}
