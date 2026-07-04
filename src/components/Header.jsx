"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";

export default function Header({ personal, portfolio }) {
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-card)]/80 backdrop-blur-xl border-b border-[var(--border)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            {personal.name}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Education", "Projects", "Skills", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
                </a>
              ),
            )}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:bg-[var(--bg-secondary)] transition"
              aria-label="Toggle Theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5 text-[var(--text-primary)]" />
              ) : (
                <Moon className="w-5 h-5 text-[var(--text-primary)]" />
              )}
            </button>

            {/* GitHub */}
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:bg-[var(--bg-secondary)] transition"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 text-[var(--text-primary)]" />
            </a>

            {/* LinkedIn */}
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:bg-[var(--bg-secondary)] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-[var(--text-primary)]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
