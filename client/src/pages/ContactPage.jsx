import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-yellow-500 font-medium">Contact Us</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
                We’re here to help with your reservation and inquiries
              </h1>
              <p className="mt-5 text-zinc-400 text-lg leading-8">
                Reach out to us for room availability, booking support, and
                general information.
              </p>
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-zinc-900 p-8">
              <div className="space-y-5 text-zinc-300 text-lg">
                <p>No 7 Adetutu Street, Lagos</p>
                <p>07067886494</p>
                <p>ekewubas@gmail.com</p>
                <p>24/7 Guest Support</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
