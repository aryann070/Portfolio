import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer({ personal, portfolio }) {
  const currentYear = new Date().getFullYear();

  return (
   <footer className="relative bg-[#020617]/90 backdrop-blur-xl border-t border-white/10 py-10">

  {/* gradient glow */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

  <div className="relative max-w-6xl mx-auto px-6">

    <div className="flex flex-col md:flex-row justify-between gap-8">

      {/* Branding */}
      <div>
        <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Aryan Surve
        </h3>

        <p className="text-gray-400 text-sm mt-2 max-w-sm">
          Building modern web experiences with clean UI and smooth performance.
        </p>
      </div>

      {/* Links */}
      <div className="flex gap-6 text-sm text-gray-400">
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#education" className="hover:text-white transition">Education</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">

      <p>
        © {new Date().getFullYear()} 
        <span className="text-white font-medium"> Aryan Surve</span>. 
        All rights reserved.
      </p>

      <p>
        Built with 
        <span className="text-blue-400"> Next.js</span> & 
        <span className="text-purple-400"> Tailwind CSS</span>
      </p>

    </div>

  </div>

</footer>
  );
}