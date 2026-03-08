export default function Education({ education }) {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
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
                  <div className="w-4 h-4 bg-accent rounded-full mt-1.5 ring-4 ring-accent-light"></div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-800 rounded-2xl p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {edu.degree} - {edu.course}
                      </h3>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 bg-accent-light text-accent text-sm font-medium rounded-full">
                      {edu.year}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-text-green-500">
                        <span className="font-semibold text-green-500">{edu.percentage}</span>
                      </span>
                    </div>
                    {/* {edu.cgpa && (
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                        <span className="text-gray-400">
                          CGPA: <span className="font-semibold text-white">{edu.cgpa}</span>
                        </span>
                      </div>
                    )} */}
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

