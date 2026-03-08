export default function Hero({ personal, portfolio }) {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Hi, I'm <br />
              <span className="gradient-text">{personal.name}</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-white font-medium mb-5">
              {personal.role}
            </h2>

            <p className="text-white text-lg mb-5 max-w-xl leading-relaxed">
              {personal.summary}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-white hover:text-accent transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-2 text-white hover:text-accent transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {personal.phone}
              </a>
              <span className="flex items-center gap-2 text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {personal.location}
              </span>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-purple-500 rounded-3xl blur-2xl opacity-20 scale-110"></div>
              <div className="relative w-70 h-70 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* SN Icon Badge */}
              {/* <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent to-purple-500 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-2xl font-bold text-white">SN</span>
              </div> */}
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full"></div>
            </div>
          </div>
        </div>
        {/* CTA / Resume Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 items-stretch sm:items-center">
          {/* <a
            href={portfolio.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-accent to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            <span>View Portfolio</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a> */}
          <a
            href="https://drive.google.com/file/d/1rTMAFNfPogKT4msJZe6EvIIEuhE-vUu_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-800/30 hover:-translate-y-1 hover:scale-105 active:scale-95 border border-gray-700/50 hover:border-gray-600"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>View Resume</span>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1rTMAFNfPogKT4msJZe6EvIIEuhE-vUu_"
            download
            className="group inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 hover:scale-105 active:scale-95 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg
              className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="relative z-10">Download Resume</span>
          </a>
          {/* <a
            href="#contact"
            className="group inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-accent/30 text-text-primary font-semibold rounded-xl transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/5 hover:shadow-lg hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            <span>Get in Touch</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </section>
  );
}
