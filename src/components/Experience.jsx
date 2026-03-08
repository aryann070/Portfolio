function Internship() {
  const internships = [
    {
      company: "SYSPREE DIGITAL PVT LTD",
      position: "Web Developer",
      duration: "Feb 2025 - Present",
      companyLogo:
        "syspree.jpg",
      description:
        "Developed responsive, high-performance websites using Next.js, converting Figma designs into pixel-perfect, user-friendly interfaces. Implemented SEO best practices, optimized website speed, and handled ongoing maintenance to ensure smooth performance and reliability.",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
  ];
  return (
    <section id="internships" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Professional Experience
        </h2>
        <div className="max-w-5xl mx-auto flex justify-center">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300 w-full md:w-[70%]"
            >
              <div className="flex items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-4 flex-1">
                  {internship.companyLogo && (
                    <img
                      src={internship.companyLogo}
                      alt={`${internship.company} Logo`}
                      className="h-12 w-12 object-contain" 
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">
                      {internship.company}
                    </h3>
                    <p className="text-blue-400 text-sm">{internship.position}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm whitespace-nowrap">
                  {internship.duration}
                </p>
              </div>

              <p className="text-gray-300 mb-4">{internship.description}</p>
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internship;
