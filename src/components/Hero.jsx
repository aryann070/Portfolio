"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCircle } from "react-icons/fa";
import { useState } from "react";

export default function Hero({ personal, portfolio }) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-20 pb-16 bg-[var(--bg-secondary)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
              Hi, I'm <br />
              <span className="gradient-text">{personal.name}</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-[var(--text-secondary)] font-medium mb-5 uppercase">
              {personal.role}
            </h2>

            <p className="text-[var(--text-secondary)] text-lg mb-5 max-w-xl leading-relaxed">
              {personal.summary}
            </p>

            {/* Contact Info */}
           <div className="flex flex-wrap gap-4 mb-8">

  <a
    href={`mailto:${personal.email}`}
    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-accent hover:border-purple-500/40 hover:shadow-md transition-all duration-300"
  >
    <FaEnvelope className="w-4 h-4 text-purple-400" />
    {personal.email}
  </a>

  <a
    href={`tel:${personal.phone}`}
    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-accent hover:border-green-500/40 hover:shadow-md transition-all duration-300"
  >
    <FaPhoneAlt className="w-4 h-4 text-green-400" />
    {personal.phone}
  </a>

  <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-red-500/40 hover:shadow-md transition-all duration-300">
    <FaMapMarkerAlt className="w-4 h-4 text-red-400" />
    {personal.location}
  </span>

</div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-purple-500 rounded-3xl blur-2xl opacity-20 scale-110"></div>

              <div className="relative w-70 h-70 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-[var(--border)] shadow-2xl bg-[var(--bg-card)]">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 items-stretch sm:items-center">
          <a
            href="https://drive.google.com/file/d/1no5ynssobKyXBZskijqlaf9xN3Fu8Pz3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 sm:px-8 sm:py-3.5 font-semibold rounded-xl border border-[var(--border)] text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
          >
            View Resume
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1no5ynssobKyXBZskijqlaf9xN3Fu8Pz3"
            download
            className="group inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-sm hover:shadow-purple-500/40 hover:-translate-y-1 hover:scale-105"
          >
            Download Resume
          </a>
          {/* Open Form Button */}
          <button
            onClick={() => setOpenForm(true)}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl border border-[var(--border)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        {openForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-[var(--bg-card)] p-8 rounded-2xl w-[90%] max-w-md shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Contact Me</h3>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]"
                />

                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]"
                ></textarea>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg"
                >
                  Send Message
                </button>
              </form>

              <button
                onClick={() => setOpenForm(false)}
                className="mt-4 text-sm text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
