"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects"; // Update the path if needed
import resumeData from "@/data/resume.json";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const { personal, portfolio } = resumeData;
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header personal={personal} portfolio={portfolio} />
      <section className="min-h-screen py-20 bg-[var(--bg-secondary)] mt-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              All{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
              A collection of client and personal projects showcasing my
              experience in frontend development, full-stack applications, and
              modern web technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="group bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border)] hover:border-blue-500/40 transition-all"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-46 object-fit"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-[var(--bg-card)]/80 backdrop-blur"
                      >
                        <ExternalLink
                          size={16}
                          className="text-[var(--text-primary)]"
                        />
                      </motion.a>
                    )}

                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-[var(--bg-card)]/80 backdrop-blur"
                      >
                        <Github
                          size={16}
                          className="text-[var(--text-primary)]"
                        />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <h3 className="flex-1 text-lg font-semibold text-[var(--text-primary)] line-clamp-2 group-hover:text-blue-500 transition">
                      {project.title}
                    </h3>

                    <span className="shrink-0 text-xs px-2 py-1 rounded-full whitespace-nowrap bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                      {project.duration}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-blue-500/10 border border-blue-500/20 text-blue-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                    {project.link ? (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={18} />
                        <span>Live</span>
                      </motion.a>
                    ) : (
                      <span className="text-[var(--text-secondary)] text-sm">
                        Demo coming soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer personal={personal} />
    </>
  );
}
