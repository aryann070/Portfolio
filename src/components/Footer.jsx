import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Heart, Copyright } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";
export default function Footer({ personal, portfolio }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative backdrop-blur-xl py-10 transition-colors duration-300"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Branding */}
          <div>
            <h3
              className="text-lg font-semibold"
              style={{
                background:
                  "linear-gradient(to right,var(--gradient-start),var(--gradient-end))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Aryan Surve
            </h3>

            <p
              className="text-sm mt-2 max-w-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Building modern web experiences with clean UI, responsive design,
              and smooth performance. Passionate about creating user-friendly
              interfaces and scalable applications that deliver both
              functionality and great user experience.
            </p>
          </div>

          {/* Navigation */}
          <div
            className="flex flex-wrap gap-6 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <a href="#about" className="transition hover:text-blue-500">
              About
            </a>

            <a href="#education" className="transition hover:text-blue-500">
              Education
            </a>

            <a href="#projects" className="transition hover:text-blue-500">
              Projects
            </a>

            <a href="#skills" className="transition hover:text-blue-500">
              Skills
            </a>

            <a href="#contact" className="transition hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-8 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm"
          style={{
            borderTop: "1px solid var(--border)",
            color: "var(--text-muted)",
          }}
        >
          <p className="flex items-center justify-center gap-2 text-sm">
            <Copyright className="w-4 h-4" />
            {currentYear}
            <span
              className="font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Aryan Surve.
            </span>
            All rights reserved.
          </p>

          <p className="flex items-center gap-2 justify-center mt-2">
            Built with
            <SiNextdotjs className="w-6 h-6" />
            <SiTailwindcss className="w-6 h-6 text-sky-400" />
            <span className="bg-black p-1.5 rounded-2xl flex items-center justify-center">
              <SiVercel className="w-4 h-4 text-white" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
