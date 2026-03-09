export default function Education({ education }) {
  return (
    <section id="education" className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Educational{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="timeline-line animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-6 pb-10">

                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mt-1.5 ring-4 ring-blue-200"></div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 card-hover">

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        {edu.degree} - {edu.course}
                      </h3>
                      <p className="text-[var(--text-secondary)]">
                        {edu.institution}
                      </p>
                    </div>

                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {edu.year}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="text-[var(--text-secondary)]">
                        <span className="font-semibold text-green-500">
                          {edu.percentage}
                        </span>
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}