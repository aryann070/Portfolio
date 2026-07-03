"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useState } from "react";

export default function Contact({ personal, portfolio }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message:
            "Your message has been sent successfully. I'll get back to you soon!",
        });

        setTimeout(() => {
          setStatus({
            type: "",
            message: "",
          });
        }, 5000);

        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message,
        });

        setTimeout(() => {
          setStatus({
            type: "",
            message: "",
          });
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });

      setTimeout(() => {
        setStatus({
          type: "",
          message: "",
        });
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="py-24 transition-colors duration-300"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Get In{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right,var(--gradient-start),var(--gradient-end))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div
            className="backdrop-blur-md rounded-3xl p-8 shadow-sm"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="text-2xl font-semibold mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white group-hover:scale-110 transition">
                  <FaEnvelope className="w-5 h-5" />
                </div>

                <div>
                  <p style={{ color: "var(--text-muted)" }}>Email</p>
                  <p
                    className="font-medium group-hover:text-blue-500 transition"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {personal.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white group-hover:scale-110 transition">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>

                <div>
                  <p style={{ color: "var(--text-muted)" }}>Phone</p>
                  <p
                    className="font-medium group-hover:text-blue-500 transition"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {personal.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white group-hover:scale-110 transition">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>

                <div>
                  <p style={{ color: "var(--text-muted)" }}>Location</p>
                  <p style={{ color: "var(--text-primary)" }}>
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div
              className="mt-10 pt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                Connect with me
              </p>

              <div className="flex gap-2 mb-6">
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500  transition"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  <FaGithub className="w-5 h-5" />
                </a>

                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500  transition"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Small Map */}
              <div className="w-full h-40 rounded-xl overflow-hidden border border-gradient-to-r from-blue-500 to-purple-500 ">
                <iframe
                  src="https://www.google.com/maps?q=Mumbai&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="backdrop-blur-md rounded-3xl p-8 shadow-sm border"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <h3
              className="text-2xl font-semibold mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              Lets Connect
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-[var(--bg-input)] 
          hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
          outline-none transition"
                  />
                </div>

                {/* Company + Job Title */}

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-400">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-[var(--bg-input)] 
          hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
          outline-none transition"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-[var(--bg-input)] 
          hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
          outline-none transition"
                  />
                </div>

                {/* Email */}

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-400">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-[var(--bg-input)] 
        hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
        outline-none transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-[var(--bg-input)] 
        hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
        outline-none transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:scale-105 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status.message && (
                <div
                  className={`mt-4 rounded-xl p-4 text-sm font-medium ${
                    status.type === "success"
                      ? "bg-green-500/10 border border-green-500 text-green-500"
                      : "bg-red-500/10 border border-red-500 text-red-500"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
