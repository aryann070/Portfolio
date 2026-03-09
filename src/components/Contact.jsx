export default function Contact({ personal, portfolio }) {
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
                  ✉️
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
                  📞
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
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  📍
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

              <div className="flex gap-4">
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  GitHub
                </a>

                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="backdrop-blur-md rounded-3xl p-8 shadow-sm"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="input-style" />
                <input type="tel" placeholder="Phone" className="input-style" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Company" className="input-style" />
                <input type="text" placeholder="Job Title" className="input-style" />
              </div>

              <input type="email" placeholder="Email" className="input-style" />

              <textarea
                rows="5"
                placeholder="Message"
                className="input-style resize-none"
              />

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:scale-105 transition-transform duration-300"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}