"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero({ personal, portfolio }) {
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

            <h2 className="text-xl sm:text-2xl text-[var(--text-secondary)] font-medium mb-5">
              {personal.role}
            </h2>

            <p className="text-[var(--text-secondary)] text-lg mb-5 max-w-xl leading-relaxed">
              {personal.summary}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8">

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-accent transition-colors"
              >
                <FaEnvelope className="w-4 h-4" />
                {personal.email}
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-accent transition-colors"
              >
                <FaPhone className="w-4 h-4" />
                {personal.phone}
              </a>

              <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                <FaMapMarkerAlt className="w-4 h-4" />
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
            href="https://drive.google.com/file/d/1rTMAFNfPogKT4msJZe6EvIIEuhE-vUu_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold rounded-xl border border-[var(--border)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
          >
            View Resume
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1rTMAFNfPogKT4msJZe6EvIIEuhE-vUu_"
            download
            className="group inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 hover:scale-105"
          >
            Download Resume
          </a>

        </div>
      </div>
    </section>
  );
}