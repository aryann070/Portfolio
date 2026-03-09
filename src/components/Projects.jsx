"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function ProjectSection() {
  const previewProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {previewProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border)] hover:border-blue-500/40 transition-all backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                <div className="absolute top-4 right-4 flex gap-2">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-[var(--bg-card)]/80 rounded-full backdrop-blur hover:bg-[var(--bg-secondary)] transition"
                    >
                      <ExternalLink size={16} className="text-[var(--text-primary)]" />
                    </motion.a>
                  )}

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-[var(--bg-card)]/80 rounded-full backdrop-blur hover:bg-[var(--bg-secondary)] transition"
                    >
                      <Github size={16} className="text-[var(--text-primary)]" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-blue-500 transition">
                    {project.title}
                  </h3>

                  <span className="text-xs text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2 py-1 rounded-full">
                    {project.duration}
                  </span>
                </div>

                <p className="text-[var(--text-secondary)] mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs border border-blue-500/20"
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
                      <span>Live Demo</span>
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
  );
}

export default ProjectSection;