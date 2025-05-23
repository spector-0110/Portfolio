"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.015 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-60 sm:h-64 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 flex-1 z-20">
        <div>
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-2">
            {project.title}
          </h3>
          {project.description && (
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
              {project.description}
            </p>
          )}

          {/* Tags */}
          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-all"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectShowcase = ({ projects }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};