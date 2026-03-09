import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

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
              Building modern web experiences with clean UI and smooth performance.
            </p>
          </div>

          {/* Navigation */}
          <div
            className="flex flex-wrap gap-6 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <a
              href="#about"
              className="transition hover:text-blue-500"
            >
              About
            </a>

            <a
              href="#education"
              className="transition hover:text-blue-500"
            >
              Education
            </a>

            <a
              href="#projects"
              className="transition hover:text-blue-500"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="transition hover:text-blue-500"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="transition hover:text-blue-500"
            >
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

          <p>
            © {currentYear}{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              Aryan Surve
            </span>. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span style={{ color: "var(--gradient-start)" }}>
              Next.js
            </span>{" "}
            &{" "}
            <span style={{ color: "var(--gradient-end)" }}>
              Tailwind CSS
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}