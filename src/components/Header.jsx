"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header({ personal, portfolio }) {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
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
          ? "bg-[#0B1220]/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
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
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item}

                  {/* Animated underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
                </a>
              ),
            )}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* GitHub */}
            {/* GitHub */}
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition group"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
