import React from "react";
import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white bg-black">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0"></div>

      <div className="relative z-20 text-center max-w-3xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-wider">
            <span className="text-white">COMING</span>
            <span className="text-luxury-red font-medium ml-1">SOON</span>
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wide text-gray-200">
            The Besson Group's website is under construction. Stay tuned!
          </p>
        </div>

        <CountdownTimer targetDate="2025-12-31T06:00:00+05:30" />
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div
          className="animate-bounce cursor-pointer"
          onClick={() =>
            document
              .getElementById("logo-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition-opacity duration-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
