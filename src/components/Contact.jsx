export default function Contact({ personal, portfolio }) {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let’s collaborate and build something impactful together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE – Contact Info */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition">
                  ✉️
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-medium group-hover:text-blue-400 transition">
                    {personal.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition">
                  📞
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="font-medium group-hover:text-blue-400 transition">
                    {personal.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-medium">{personal.location}</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-gray-400 mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href={portfolio.github}
                  target="_blank"
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition"
                >
                  GitHub
                </a>
                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – CONTACT FORM */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <form className="space-y-6">

              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition"
                />
                <input
                  type="text"
                  placeholder="Number"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition"
                />
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition"
                />
                <input
                  type="text"
                  placeholder="Job Title"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition"
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition resize-none"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform duration-300 font-medium"
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